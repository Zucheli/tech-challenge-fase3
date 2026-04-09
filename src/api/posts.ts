import { api } from "./api";

export type Post = {
    id: number;
    title: string;
    content: string;
    author?: string;
    type?: string;
    subject?: string;

    _count?: {
        likes: number;
        favorites: number;
    };

    likes?: { id: number }[];
    favorites?: { id: number }[];
};

export const getPosts = async (): Promise<Post[]> => {
    const res = await api.get("/posts");
    return res.data;
};

export const searchPosts = (params: {
    query?: string;
    subject?: string;
    type?: string;
}) => {
    return api.get("/posts/search", { params });
};
