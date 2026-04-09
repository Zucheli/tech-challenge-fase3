import { useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Title,
    Form,
    Input,
    TextArea,
    Button,
} from "./styles";

export default function CreatePost() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [type, setType] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post("/posts", {
                title,
                content,
                author,
                type,
                subject
            });

            alert("Post criado com sucesso!");
            navigate("/admin");
        } catch (error) {
            alert("Erro ao criar post");
            console.error(error);
        }
    };

    return (
        <Container>
            <Title>Criar Novo Post</Title>

            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <TextArea
                    placeholder="Conteúdo do post"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />

                <Input
                    placeholder="Autor"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />

                <Input
                    placeholder="Ex: Matemática"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />

                <div style={{ display: "flex", gap: 10 }}>
                    {["PROVA", "EXERCICIO", "RESUMO"].map((item) => (
                        <button
                            key={item}
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

                <Button type="submit">Salvar</Button>
            </Form>
        </Container>
    );
}
