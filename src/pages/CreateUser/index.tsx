import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../api/users";
import {
    Container,
    Title,
    Form,
    Input,
    RoleSelector,
    RoleButton,
    ButtonRow,
    Button,
    CancelButton,
} from "./styles";

export default function CreateUser() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState<"ALUNO" | "PROFESSOR">("ALUNO");
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) return;

        setSaving(true);
        try {
            await createUser({ username: username.trim(), password, role });
            alert("Usuário criado com sucesso!");
            setUsername("");
            setPassword("");
            setRole("ALUNO");
        } catch {
            alert("Erro ao criar usuário");
        } finally {
            setSaving(false);
        }
    };

    return (
        <Container>
            <Title>Novo Usuário</Title>

            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <Input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <RoleSelector>
                    <RoleButton
                        type="button"
                        active={role === "ALUNO"}
                        onClick={() => setRole("ALUNO")}
                    >
                        ALUNO
                    </RoleButton>
                    <RoleButton
                        type="button"
                        active={role === "PROFESSOR"}
                        onClick={() => setRole("PROFESSOR")}
                    >
                        PROFESSOR
                    </RoleButton>
                </RoleSelector>

                <ButtonRow>
                    <CancelButton type="button" onClick={() => navigate("/users")}>
                        Cancelar
                    </CancelButton>
                    <Button type="submit" disabled={saving}>
                        Criar
                    </Button>
                </ButtonRow>
            </Form>
        </Container>
    );
}
