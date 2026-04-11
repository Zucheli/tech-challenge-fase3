import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { updateUser } from "../../api/users";
import type { User } from "../../api/users";
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
} from "../CreateUser/styles";

export default function EditUser() {
    const navigate = useNavigate();
    const location = useLocation();
    const user = location.state?.user as User;

    const [username, setUsername] = useState(user?.username || "");
    const [role, setRole] = useState<"ALUNO" | "PROFESSOR">(user?.role || "ALUNO");
    const [saving, setSaving] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!username.trim()) return;

        setSaving(true);
        try {
            await updateUser(user.id, { username: username.trim(), role });
            navigate("/users");
        } catch {
            alert("Erro ao atualizar usuário");
        } finally {
            setSaving(false);
        }
    };

    if (!user) {
        navigate("/users");
        return null;
    }

    return (
        <Container>
            <Title>Editar Usuário</Title>

            <Form onSubmit={handleSubmit}>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                        Salvar
                    </Button>
                </ButtonRow>
            </Form>
        </Container>
    );
}
