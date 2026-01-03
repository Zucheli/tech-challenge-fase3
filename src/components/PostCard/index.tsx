import { useNavigate } from "react-router-dom";
import { Card, Title, ContentPreview, Footer, ReadMore } from "./styles";
import type { Post } from "../../api/posts";

type Props = {
    post: Post;
};

export default function PostCard({ post }: Props) {
    const navigate = useNavigate();

    return (
        <Card>
            <Title>{post.title}</Title>

            <ContentPreview>
                {post.content.slice(0, 120)}...
            </ContentPreview>

            <Footer>
                <small>Autor: {post.author || "Anônimo"}</small>

                <ReadMore onClick={() => navigate(`/posts/${post.id}`)}>
                    Ler mais
                </ReadMore>
            </Footer>
        </Card>
    );
}
