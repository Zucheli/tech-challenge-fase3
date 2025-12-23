import { useEffect, useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

type Post = {
    id: number;
    title: string;
    content: string;
    author?: string;
};

export default function Admin() {
    const [posts, setPosts] = useState<Post[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) return;

        api.get("/posts/all")
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
        <div>
            <h1>Administração de Posts</h1>

            <button onClick={() => navigate("/create")}>
                ➕ Criar novo post
            </button>

            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <strong>{post.title}</strong>

                        <div>
                            <button onClick={() => navigate(`/edit/${post.id}`)}>
                                ✏️ Editar
                            </button>

                            <button onClick={() => handleDelete(post.id)}>
                                🗑️ Deletar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
