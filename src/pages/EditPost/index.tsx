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
} from "./styles";

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

                <Button type="submit">Atualizar</Button>
            </Form>
        </Container>
    );
}
