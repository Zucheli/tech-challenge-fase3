import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Header,
    Title,
    CreateButton,
    List,
    ListItem,
    PostTitle,
    Actions,
    ActionButton,
} from "./styles";

type Post = {
    id: number;
    title: string;
};

export default function Admin() {
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get("/posts")
            .then((res) => setPosts(res.data))
            .catch(() => alert("Erro ao carregar posts"));
    }, []);

    const handleDelete = async (id: number) => {
        const confirm = window.confirm("Deseja realmente excluir este post?");
        if (!confirm) return;

        await api.delete(`/posts/${id}`);
        setPosts((prev) => prev.filter((post) => post.id !== id));
    };

    return (
        <Container>
            <Header>
                <Title>Administração de Posts</Title>

                <CreateButton onClick={() => navigate("/create")}>
                    ➕ Criar novo post
                </CreateButton>
            </Header>

            <List>
                {posts.map((post) => (
                    <ListItem key={post.id}>
                        <PostTitle>{post.title}</PostTitle>

                        <Actions>
                            <ActionButton
                                onClick={() => navigate(`/edit/${post.id}`)}
                                variant="edit"
                            >
                                Editar
                            </ActionButton>

                            <ActionButton
                                onClick={() => handleDelete(post.id)}
                                variant="delete"
                            >
                                Excluir
                            </ActionButton>
                        </Actions>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
