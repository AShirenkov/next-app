export { default } from "next-auth/middleware";

export const config = { matcher: ["/profile", "/protected/:path*"] }; // список страний доступных авторизованным пользователям
