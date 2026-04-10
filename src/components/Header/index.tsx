import { useNavigate, Link } from "react-router-dom";
import {
    HeaderWrapper,
    HeaderContent,
    Title,
    Nav,
    NavLink,
    LogoutButton,
} from "./styles";

export default function Header() {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem("token"));
    const rawRole = localStorage.getItem("role");
    const role = rawRole ? rawRole.replace(/"/g, "") : null;
    const isProfessor = role === "PROFESSOR";

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <HeaderWrapper>
            <HeaderContent>
                <Title onClick={() => navigate("/posts")}>
                    Tech Challenge
                </Title>

                <Nav>
                    {!isAuthenticated && (
                        <Link to="/login">
                            <NavLink>Login</NavLink>
                        </Link>
                    )}

                    {isAuthenticated && (
                        <>
                            {isProfessor && (
                                <Link to="/admin">
                                    <NavLink>Admin</NavLink>
                                </Link>
                            )}

                            <LogoutButton onClick={handleLogout}>
                                Logout ({role})
                            </LogoutButton>
                        </>
                    )}
                </Nav>
            </HeaderContent>
        </HeaderWrapper>
    );
}
