import { useEffect, useState } from "react";
import { getPosts, searchPosts } from "../../api/posts";
import {
    FilterContainer,
    FilterRow,
    FilterLabel,
    Divider,
    Input,
    Select,
    Button,
    ClearButton,
    ToggleButton
} from "./styles";
import type { Post } from "../../api/posts";
import PostCard from "../../components/PostCard";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const role = JSON.parse(localStorage.getItem("role") || '"ALUNO"') as string;
    const isAluno = role === "ALUNO";

    const [query, setQuery] = useState("");
    const [subject, setSubject] = useState("");
    const [type, setType] = useState("");
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);

        try {
            if (query || subject || type || liked || favorited) {
                const res = await searchPosts({
                    query,
                    subject,
                    type,
                    ...(liked && { liked: true }),
                    ...(favorited && { favorited: true }),
                });
                setPosts(res.data);
            } else {
                const res = await getPosts();
                setPosts(res);
            }
        } catch {
            alert("Erro ao carregar posts");
        } finally {
            setLoading(false);
        }
    };

    const clearFilters = () => {
        setQuery("");
        setSubject("");
        setType("");
        setLiked(false);
        setFavorited(false);
        getPosts().then(setPosts);
    };

    useEffect(() => {
        getPosts()
            .then(setPosts)
            .catch(() => alert("Erro ao carregar posts"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p>Carregando posts...</p>;
    }

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 16px" }}>
            <h1>Posts</h1>

            <FilterContainer>
                {/* linha 1: busca por texto e disciplina */}
                <FilterRow>
                    <Input
                        placeholder="🔍  Buscar por título ou conteúdo..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Input
                        placeholder="Disciplina"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </FilterRow>

                <Divider />

                {/* linha 2: tipo + toggles de aluno + ações */}
                <FilterRow>
                    <FilterLabel>Tipo:</FilterLabel>
                    <Select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="PROVA">Prova</option>
                        <option value="EXERCICIO">Exercício</option>
                        <option value="RESUMO">Resumo</option>
                    </Select>

                    {isAluno && (
                        <>
                            <ToggleButton active={liked} onClick={() => setLiked((v) => !v)}>
                                👍 Curtidos
                            </ToggleButton>
                            <ToggleButton active={favorited} onClick={() => setFavorited((v) => !v)}>
                                ⭐ Favoritos
                            </ToggleButton>
                        </>
                    )}

                    <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                        <ClearButton onClick={clearFilters}>Limpar</ClearButton>
                        <Button onClick={fetchPosts}>Buscar</Button>
                    </div>
                </FilterRow>
            </FilterContainer>

            {posts.length === 0 && <p>Nenhum post encontrado.</p>}

            {posts.map((post) => (
                <PostCard key={post.id} post={post} refreshPosts={fetchPosts} />
            ))}
        </div>
    );
}