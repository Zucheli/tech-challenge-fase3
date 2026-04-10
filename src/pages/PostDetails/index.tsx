import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { getComments, createComment, deleteComment } from "../../api/posts";
import type { Comment } from "../../api/posts";
import {
    Container,
    Title,
    Author,
    Content,
    BackButton,
    Actions,
    ActionButton,
    FavoriteButton,
    CountLabel,
    Divider,
    CommentsSection,
    CommentsSectionTitle,
    CommentCard,
    CommentHeader,
    CommentMeta,
    CommentAuthor,
    CommentContent,
    DeleteCommentButton,
    CommentForm,
    CommentInput,
    CommentSubmitButton,
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

    likes?: { userId: number }[];
    favorites?: { userId: number }[];
};

export default function PostDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentText, setCommentText] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const role = JSON.parse(localStorage.getItem("role") || '"ALUNO"') as string;
    const isProfessor = role === "PROFESSOR";
    const currentUserId = Number(localStorage.getItem("userId"));
    const isLoggedIn = Boolean(localStorage.getItem("token"));

    const fetchPost = () => {
        api.get(`/posts/${id}`)
            .then((res) => setPost(res.data))
            .finally(() => setLoading(false));
    };

    const fetchComments = () => {
        getComments(Number(id)).then((res) => setComments(res.data));
    };

    useEffect(() => {
        fetchPost();
        fetchComments();
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
        fetchPost();
    };

    const handleFavorite = async () => {
        await api.post(`/posts/${id}/favorite`);
        fetchPost();
    };

    const handleSubmitComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        setSubmitting(true);
        try {
            await createComment(Number(id), commentText.trim());
            setCommentText("");
            fetchComments();
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteComment = async (commentId: number) => {
        await deleteComment(Number(id), commentId);
        fetchComments();
    };

    if (loading) return <p>Carregando post...</p>;
    if (!post) return <p>Post não encontrado.</p>;

    const isLiked = post.likes?.some((l) => l.userId === currentUserId) ?? false;
    const isFavorited = post.favorites?.some((f) => f.userId === currentUserId) ?? false;

    return (
        <Container>
            <Title>{post.title}</Title>
            <Author>Autor: {post.author || "Anônimo"}</Author>

            <Content>{post.content}</Content>

            <p><strong>Tipo:</strong> {post.type}</p>
            <p><strong>Disciplina:</strong> {post.subject}</p>

            <Actions>
                {isProfessor ? (
                    <>
                        <CountLabel>👍 {post._count?.likes ?? post.likes?.length ?? 0}</CountLabel>
                        <CountLabel>⭐ {post._count?.favorites ?? post.favorites?.length ?? 0}</CountLabel>
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

            <BackButton onClick={() => navigate(-1)}>
                ← Voltar
            </BackButton>

            <Divider />

            <CommentsSection>
                <CommentsSectionTitle>
                    Comentários ({comments.length})
                </CommentsSectionTitle>

                {isLoggedIn && (
                    <CommentForm onSubmit={handleSubmitComment}>
                        <CommentInput
                            placeholder="Escreva um comentário..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                        />
                        <CommentSubmitButton type="submit" disabled={submitting || !commentText.trim()}>
                            Comentar
                        </CommentSubmitButton>
                    </CommentForm>
                )}

                {comments.length === 0 && (
                    <p style={{ color: "#999", fontSize: "0.9rem" }}>Nenhum comentário ainda.</p>
                )}

                {comments.map((comment) => (
                    <CommentCard key={comment.id}>
                        <CommentHeader>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <CommentAuthor>{comment.user.username}</CommentAuthor>
                                <CommentMeta>· {comment.user.role}</CommentMeta>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <CommentMeta>
                                    {new Date(comment.createdAt).toLocaleDateString("pt-BR", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                    })}
                                </CommentMeta>
                                {(isProfessor || comment.userId === currentUserId) && (
                                    <DeleteCommentButton onClick={() => handleDeleteComment(comment.id)}>
                                        Excluir
                                    </DeleteCommentButton>
                                )}
                            </div>
                        </CommentHeader>
                        <CommentContent>{comment.content}</CommentContent>
                    </CommentCard>
                ))}
            </CommentsSection>
        </Container>
    );
}