import { headers } from "next/headers";
import { auth } from "./auth";
import { redirect } from "next/navigation";

export async function requireLoggedIn(): Promise<ReturnType<typeof auth.api.getSession> | null> {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session?.session.token) {
        redirect("/login");
    }
    return session;
}

export async function requireLoggedOut(): Promise<void> {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (session?.session.token) {
        redirect("/");
    }
}