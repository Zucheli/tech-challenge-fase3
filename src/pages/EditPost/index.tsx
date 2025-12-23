import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";

export default function EditPost() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/posts/${id}`);
                setTitle(response.data.title);
                setContent(response.data.content);
                setAuthor(response.data.author || "");
            } catch (error) {
                alert("Erro ao carregar post");
                console.error(error);
            }
        };

        fetchPost();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.put(`/posts/${id}`, {
                title,
                content,
                author,
            });

            alert("Post atualizado com sucesso!");
            navigate("/admin");
        } catch (error) {
            alert("Erro ao atualizar post");
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Editar post</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Conteúdo</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Autor</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <button type="submit">Salvar alterações</button>
                <button type="button" onClick={() => navigate("/admin")}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}
