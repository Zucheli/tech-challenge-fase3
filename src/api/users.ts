import { api } from "./api";

export type User = {
    id: number;
    username: string;
    role: "ALUNO" | "PROFESSOR";
};

export const getUsers = () => api.get<User[]>("/users");

export const createUser = (data: { username: string; password: string; role: string }) =>
    api.post<User>("/users", data);

export const updateUser = (id: number, data: { username: string; role: string }) =>
    api.put<User>(`/users/${id}`, data);

export const deleteUser = (id: number) => api.delete(`/users/${id}`);
