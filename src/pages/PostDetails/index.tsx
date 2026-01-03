import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import {
    Container,
    Title,
    Author,
    Content,
    BackButton,
} from "./styles";

type Post = {
    id: number;
    title: string;
    content: string;
    author?: string;
};

export default function PostDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/posts/${id}`)
            .then((res) => setPost(res.data))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <p>Carregando post...</p>;
    }

    if (!post) {
        return <p>Post não encontrado.</p>;
    }

    return (
        <Container>
            <Title>{post.title}</Title>
            <Author>Autor: {post.author || "Anônimo"}</Author>

            <Content>{post.content}</Content>

            <BackButton onClick={() => navigate(-1)}>
                ← Voltar
            </BackButton>
        </Container>
    );
}
