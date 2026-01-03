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

                <Button type="submit">Salvar</Button>
            </Form>
        </Container>
    );
}
