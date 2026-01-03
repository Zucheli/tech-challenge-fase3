import { useEffect, useState } from "react";
import { getPublicPosts } from "../../api/posts";
import type { Post } from "../../api/posts";
import PostCard from "../../components/PostCard";

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPublicPosts()
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

            {posts.length === 0 && <p>Nenhum post encontrado.</p>}

            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
