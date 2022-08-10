
export type UserType = {
    id: string | number,
    name?: string,
    email?: string,
    role?: string,
    phone?: string,
    status: "active" | "paused" | "warning",
};