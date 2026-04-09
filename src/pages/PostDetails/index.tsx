import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import {
    Container,
    Title,
    Author,
    Content,
    BackButton, Actions, ActionButton
} from "./styles";

type Post = {
    id: number;
    title: string;
    content: string;
    author?: string;
    type?: string;
    subject?: string;

    _count?: {
        likes: number;
        favorites: number;
    };

    likes?: { id: number }[];
    favorites?: { id: number }[];
};

export default function PostDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchPost = () => {
        api.get(`/posts/${id}`)
            .then((res) => setPost(res.data))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchPost();
    }, [id]);

    const handleLike = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Sem token, faz login de novo");
            return;
        }

        await api.post(
            `/posts/${post?.id}/like`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    };

    const handleFavorite = async () => {
        await api.post(`/posts/${id}/favorite`);
        fetchPost();
    };

    if (loading) return <p>Carregando post...</p>;
    if (!post) return <p>Post não encontrado.</p>;

    const isLiked = (post.likes?.length || 0) > 0;
    const isFavorited = (post.favorites?.length || 0) > 0;

    return (
        <Container>
            <Title>{post.title}</Title>
            <Author>Autor: {post.author || "Anônimo"}</Author>

            <Content>{post.content}</Content>

            <p><strong>Tipo:</strong> {post.type}</p>
            <p><strong>Disciplina:</strong> {post.subject}</p>

            <Actions>
                <ActionButton active={isLiked} onClick={handleLike}>
                    👍 {post._count?.likes || 0}
                </ActionButton>

                <ActionButton active={isFavorited} onClick={handleFavorite}>
                    ⭐
                </ActionButton>
            </Actions>

            <BackButton onClick={() => navigate(-1)}>
                ← Voltar
            </BackButton>
        </Container>
    );
}