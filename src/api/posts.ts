import { api } from "./api";

export type Post = {
    id: number;
    title: string;
    content: string;
    author?: string;
};

export const getPublicPosts = async (): Promise<Post[]> => {
    const res = await api.get("/posts/public");
    return res.data;
};
