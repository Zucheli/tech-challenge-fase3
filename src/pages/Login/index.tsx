import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import {
    Container,
    Card,
    Title,
    Input,
    Button,
    Error,
} from "./styles";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const res = await api.post("/auth/login", {
                username,
                password,
            });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("role", JSON.stringify(res.data.role)); // 👈 ESSENCIAL

            // redirecionamento correto
            if (res.data.user === "PROFESSOR") {
                navigate("/admin");
            } else {
                navigate("/"); // ou /posts
            }
        } catch {
            setError("Usuário ou senha inválidos");
        }
    };

    return (
        <Container>
            <Card>
                <Title>Login</Title>

                <Input
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button onClick={handleLogin}>Entrar</Button>

                {error && <Error>{error}</Error>}
            </Card>
        </Container>
    );
}
