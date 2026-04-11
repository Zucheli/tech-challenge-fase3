import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";
import {
    Container,
    Title,
    Form,
    Input,
    TextArea,
    Button,
    CancelButton,
} from "./styles";

export default function EditPost() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await api.get(`/posts/${id}`);
                setTitle(response.data.title);
                setContent(response.data.content);
                setAuthor(response.data.author || "");
                setType(response.data.type || "");
                setSubject(response.data.subject || "");
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
                type,
                subject
            });

            alert("Post atualizado com sucesso!");
            navigate("/admin");
        } catch (error) {
            alert("Erro ao atualizar post");
            console.error(error);
        }
    };

    return (
        <Container>
            <Title>Editar Post</Title>

            <Form onSubmit={handleSubmit}>
                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <TextArea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />

                <Input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />

                <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />

                <div style={{ display: "flex", gap: 10 }}>
                    {["PROVA", "EXERCICIO", "RESUMO"].map((item) => (
                        <button
                            key={item}
                            type="button"
                            onClick={() => setType(item)}
                            style={{
                                padding: 8,
                                borderRadius: 6,
                                border: "1px solid #ccc",
                                background: type === item ? "#1976d2" : "#fff",
                                color: type === item ? "#fff" : "#000",
                            }}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
                    <CancelButton type="button" onClick={() => navigate("/admin")}>Cancelar</CancelButton>
                    <Button type="submit">Atualizar</Button>
                </div>
            </Form>
        </Container>
    );
}
