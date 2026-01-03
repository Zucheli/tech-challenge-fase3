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

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <HeaderWrapper>
            <HeaderContent>
                <Title onClick={() => navigate("/")}>
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
                            <Link to="/admin">
                                <NavLink>Admin</NavLink>
                            </Link>

                            <LogoutButton onClick={handleLogout}>
                                Logout
                            </LogoutButton>
                        </>
                    )}
                </Nav>
            </HeaderContent>
        </HeaderWrapper>
    );
}
