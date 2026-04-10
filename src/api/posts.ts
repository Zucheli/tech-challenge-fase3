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

    likes?: { userId: number }[];
    favorites?: { userId: number }[];
};

export type Comment = {
    id: number;
    content: string;
    postId: number;
    userId: number;
    createdAt: string;
    user: {
        id: number;
        username: string;
        role: string;
    };
};

export const getPosts = async (): Promise<Post[]> => {
    const res = await api.get("/posts");
    return res.data;
};

export const searchPosts = (params: {
    query?: string;
    subject?: string;
    type?: string;
    liked?: boolean;
    favorited?: boolean;
}) => {
    return api.get("/posts/search", { params });
};

export const getComments = (postId: number) =>
    api.get<Comment[]>(`/posts/${postId}/comments`);

export const createComment = (postId: number, content: string) =>
    api.post<Comment>(`/posts/${postId}/comments`, { content });

export const deleteComment = (postId: number, commentId: number) =>
    api.delete(`/posts/${postId}/comments/${commentId}`);
