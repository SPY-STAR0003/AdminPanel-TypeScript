
export type UserType = {
    id: number,
    name?: string,
    email?: string,
    role?: string,
    phone?: string,
    status: "active" | "paused" | "warning",
};