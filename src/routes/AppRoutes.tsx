import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import PostDetails from "../pages/PostDetails";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import CreatePost from "../pages/CreatePost";
import EditPost from "../pages/EditPost";
import Users from "../pages/Users";
import CreateUser from "../pages/CreateUser";
import EditUser from "../pages/EditUser";
import { PrivateRoute } from "./PrivateRoute";

export function AppRoutes() {
    return (
        <Routes>
            {/* redireciona raiz para login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* públicas */}
            <Route path="/login" element={<Login />} />
            <Route path="/posts" element={<Home />} />
            <Route path="/posts/:id" element={<PostDetails />} />

            {/* protegidas */}
            <Route
                path="/admin"
                element={
                    <PrivateRoute>
                        <Admin />
                    </PrivateRoute>
                }
            />

            <Route
                path="/create"
                element={
                    <PrivateRoute>
                        <CreatePost />
                    </PrivateRoute>
                }
            />

            <Route
                path="/edit/:id"
                element={
                    <PrivateRoute>
                        <EditPost />
                    </PrivateRoute>
                }
            />

            <Route
                path="/users"
                element={
                    <PrivateRoute>
                        <Users />
                    </PrivateRoute>
                }
            />

            <Route
                path="/users/create"
                element={
                    <PrivateRoute>
                        <CreateUser />
                    </PrivateRoute>
                }
            />

            <Route
                path="/users/edit/:id"
                element={
                    <PrivateRoute>
                        <EditUser />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}
