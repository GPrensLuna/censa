import { NextRequest } from "next/server";
import { isAuthenticated } from "@/libs/auth";

const publicRoutes = ["/api/public1", "/api/public2", "/api/public3"];
const clientRoutes = ["/api/client1", "/api/client2", "/api/client3"];
const adminRoutes = ["/api/admin1", "/api/admin2", "/api/admin3"];

export const config = {
    matcher: "/api/:function*",
};

export function customMiddleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    if (publicRoutes.includes(pathname)) {
        return;
    }

    if (clientRoutes.includes(pathname)) {
        if (!isAuthenticated(request, "cliente")) {
            return Response.json(
                { success: false, message: "Autenticación fallida" },
                { status: 401 }
            );
        }
    }

    if (adminRoutes.includes(pathname)) {
        if (!isAuthenticated(request, "admin")) {
            return Response.json(
                { success: false, message: "Autenticación fallida" },
                { status: 401 }
            );
        }
    }
}
