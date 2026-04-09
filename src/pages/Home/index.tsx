import { useEffect, useState } from "react";
import { getPosts, searchPosts } from "../../api/posts";
import {
    FilterContainer,
    FilterRow,
    Input,
    Select,
    Button,
    ClearButton
} from "./styles";
import type { Post } from "../../api/posts";
import PostCard from "../../components/PostCard";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    // 🔍 novos estados
    const [query, setQuery] = useState("");
    const [subject, setSubject] = useState("");
    const [type, setType] = useState("");

    // 🚀 função de busca
    const fetchPosts = async () => {
        setLoading(true);

        try {
            // se tiver filtro → usa search
            if (query || subject || type) {
                const res = await searchPosts({
                    query,
                    subject,
                    type,
                });
                setPosts(res.data);
            } else {
                // sem filtro → lista normal
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

        // opcional: já recarrega tudo
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
                <FilterRow>
                    <Input
                        placeholder="Buscar..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Input
                        placeholder="Disciplina"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <Select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="">Todos</option>
                        <option value="PROVA">Prova</option>
                        <option value="EXERCICIO">Exercicio</option>
                        <option value="RESUMO">Resumo</option>
                    </Select>

                    <div style={{ display: "flex", gap: "8px" }}>
                        <Button onClick={fetchPosts}>Buscar</Button>
                        <ClearButton onClick={clearFilters}>Limpar</ClearButton>
                    </div>
                </FilterRow>
            </FilterContainer>

            {posts.length === 0 && <p>Nenhum post encontrado.</p>}

            {posts.map((post) => (
                <PostCard post={post} refreshPosts={fetchPosts} />
            ))}
        </div>
    );
}