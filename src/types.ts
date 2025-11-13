// User 타입 정의
// email 속성은 옵셔널로 해보세요.
export type User = {
    id: number;
    name: string;
    age: number;
    email?: string;
    isAdmin: boolean;
};

// Post 타입 정의
// status 타입은 "draft", "published", 또는 "archived" 중 하나가 되게 해주세요.
export type Post = {
    id: number;
    title: string;
    content: string;
    authorId: number;
    tags: string[];
    status: "draft" | "published" | "archived";
};
