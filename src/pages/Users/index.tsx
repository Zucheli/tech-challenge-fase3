import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../../api/users";
import type { User } from "../../api/users";
import {
    Container,
    PageHeader,
    Title,
    CreateButton,
    List,
    ListItem,
    UserInfo,
    Username,
    RoleBadge,
    Actions,
    ActionButton,
} from "./styles";

export default function Users() {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = () => {
        setLoading(true);
        getUsers()
            .then((res) => setUsers(res.data))
            .catch(() => alert("Erro ao carregar usuários"))
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (id: number, username: string) => {
        const confirmed = window.confirm(`Deseja excluir o usuário "${username}"?`);
        if (!confirmed) return;

        try {
            await deleteUser(id);
            setUsers((prev) => prev.filter((u) => u.id !== id));
        } catch {
            alert("Erro ao excluir usuário");
        }
    };

    return (
        <Container>
            <PageHeader>
                <Title>Gerenciar Usuários</Title>
                <CreateButton onClick={() => navigate("/users/create")}>
                    ➕ Novo Usuário
                </CreateButton>
            </PageHeader>

            {loading && <p>Carregando...</p>}

            <List>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <UserInfo>
                            <Username>{user.username}</Username>
                            <RoleBadge role={user.role}>{user.role}</RoleBadge>
                        </UserInfo>

                        <Actions>
                            <ActionButton
                                variant="edit"
                                onClick={() => navigate(`/users/edit/${user.id}`, { state: { user } })}
                            >
                                Editar
                            </ActionButton>
                            <ActionButton
                                variant="delete"
                                onClick={() => handleDelete(user.id, user.username)}
                            >
                                Excluir
                            </ActionButton>
                        </Actions>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}
