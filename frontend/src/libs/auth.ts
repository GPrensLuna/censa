import { getServerSession } from "next-auth";
import { NextRequest } from "next/server";

export async function getCurrentUser(request: NextRequest) {
    const session = await getServerSession({ req: request.req });
    if (session?.user) {
        return session.user;
    }
    return null;
}

export async function isAuthenticated(request: NextRequest, roll: string) {
    const currentUser = await getCurrentUser(request);
    return currentUser && currentUser?.roll === roll;
}
