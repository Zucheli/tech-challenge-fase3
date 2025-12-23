import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export default function CreatePost() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post("/posts", {
                title,
                content,
                author,
            });

            alert("Post criado com sucesso!");
            navigate("/admin");
        } catch (error) {
            alert("Erro ao criar post");
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Criar novo post</h1>

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

                <button type="submit">Criar Post</button>
                <button type="button" onClick={() => navigate("/admin")}>
                    Cancelar
                </button>
            </form>
        </div>
    );
}
