import { useNavigate } from "react-router-dom";
import { Card, Title, ContentPreview, Footer, ReadMore, Actions, ActionButton, FavoriteButton, CountLabel } from "./styles";
import type { Post } from "../../api/posts";
import { api } from "../../api/api";

type Props = {
    post: Post;
    refreshPosts: () => void;
};

export default function PostCard({ post, refreshPosts }: Props) {
    const navigate = useNavigate();
    const role = JSON.parse(localStorage.getItem("role") || '"ALUNO"') as string;
    const isProfessor = role === "PROFESSOR";
    const currentUserId = Number(localStorage.getItem("userId"));

    const isLiked = post.likes?.some((l) => l.userId === currentUserId) ?? false;
    const isFavorited = post.favorites?.some((f) => f.userId === currentUserId) ?? false;

    const handleLike = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            alert("Sem token, faz login de novo");
            return;
        }

        await api.post(
            `/posts/${post.id}/like`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        refreshPosts();
    };

    const handleFavorite = async () => {
        await api.post(`/posts/${post.id}/favorite`);
        refreshPosts();
    };

    return (
        <Card>
            <Title>{post.title}</Title>

            <ContentPreview>
                {post.content.slice(0, 120)}...
            </ContentPreview>

            <p><strong>Tipo:</strong> {post.type}</p>
            <p><strong>Disciplina:</strong> {post.subject}</p>

            <Actions>
                {isProfessor ? (
                    <>
                        <CountLabel>👍 {post._count?.likes || 0}</CountLabel>
                        <CountLabel>⭐ {post._count?.favorites || 0}</CountLabel>
                    </>
                ) : (
                    <>
                        <ActionButton active={isLiked} onClick={handleLike}>
                            👍
                        </ActionButton>
                        <FavoriteButton active={isFavorited} onClick={handleFavorite}>
                            ⭐
                        </FavoriteButton>
                    </>
                )}
            </Actions>

            <Footer>
                <small>Autor: {post.author || "Anônimo"}</small>

                <ReadMore onClick={() => navigate(`/posts/${post.id}`)}>
                    Ler mais
                </ReadMore>
            </Footer>
        </Card>
    );
}