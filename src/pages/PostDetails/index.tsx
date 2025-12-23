import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/api";

type Post = {
    id: number;
    title: string;
    content: string;
    author?: string;
};

export default function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        api.get(`/posts/${id}`)
            .then((res) => setPost(res.data))
            .catch(() => alert("Erro ao carregar post"))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) return <p>Carregando...</p>;
    if (!post) return <p>Post não encontrado</p>;

    return (
        <div>
            <h1>{post.title}</h1>

            {post.author && <p><strong>Autor:</strong> {post.author}</p>}

            <p>{post.content}</p>
        </div>
    );
}
