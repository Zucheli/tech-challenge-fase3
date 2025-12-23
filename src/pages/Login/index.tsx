import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export default function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await api.post("/auth/login", {
                username,
                password,
            });

            localStorage.setItem("token", response.data.token);
            navigate("/admin");
        } catch (err) {
            setError("Usuário ou senha inválidos");
        }
    };

    return (
        <div>
            <h1>Login</h1>

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button onClick={handleLogin}>Entrar</button>
        </div>
    );
}
