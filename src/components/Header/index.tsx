import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem("token"));

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header
            style={{
                padding: "16px",
                borderBottom: "1px solid #ddd",
                marginBottom: "24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <h2
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
            >
                Tech Challenge
            </h2>

            <nav style={{ display: "flex", gap: "12px" }}>
                {!isAuthenticated && (
                    <Link to="/login">Login</Link>
                )}

                {isAuthenticated && (
                    <>
                        <Link to="/admin">Admin</Link>
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )}
            </nav>
        </header>
    );
}
