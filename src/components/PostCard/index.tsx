import { useNavigate } from "react-router-dom";
import { Card, Title, ContentPreview, Footer, ReadMore, Actions, ActionButton } from "./styles";
import type { Post } from "../../api/posts";
import { api } from "../../api/api";

type Props = {
    post: Post;
    refreshPosts: () => void;
};

export default function PostCard({ post, refreshPosts }: Props) {
    const navigate = useNavigate();

    const isLiked = (post.likes?.length || 0) > 0;
    const isFavorited = (post.favorites?.length || 0) > 0;

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
                <ActionButton active={isLiked} onClick={handleLike}>
                    👍 {post._count?.likes || 0}
                </ActionButton>

                <ActionButton active={isFavorited} onClick={handleFavorite}>
                    ⭐
                </ActionButton>
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