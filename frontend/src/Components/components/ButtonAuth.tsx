"use client";

import { signIn, signOut, useSession } from "next-auth/react";
interface classStyleTypes {
    classStyle: string;
}
export const ButtonAuth = ({ classStyle }: classStyleTypes) => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    return (
        session ? (
            <button onClick={() => signOut()} className={classStyle}>
                Sign out
            </button>
        ) : (
            <button onClick={() => signIn()} className={classStyle}>
                Sign in
            </button>
        )
    );
};
