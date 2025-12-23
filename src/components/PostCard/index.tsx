import type { Post } from "../../api/posts";
import { Link } from "react-router-dom";

interface Props {
    post: Post;
}

export default function PostCard({ post }: Props) {
    return (
        <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 12 }}>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <small>Autor: {post.author}</small>
            <br />
            <Link to={`/posts/${post.id}`}>Ler mais</Link>
        </div>
    );
}
