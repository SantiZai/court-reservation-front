"use client";

import { createUser } from "@/services/createEntries";
import { Player } from "@/utils/models";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

const AuthPage = () => {
	const { data: session } = useSession();

	useEffect(() => {
		if (session?.user) {
			createUser(session?.user as Player);
		}
	}, [session]);

	return (
		<div>
			<h2>Auth</h2>
			<div>
				{session?.user ? (
					<div>
						<span>Profile</span>
						<button
							onClick={async () =>
								await signOut({
									callbackUrl: "/",
								})
							}
						>
							Sign out
						</button>
					</div>
				) : (
					<button onClick={async () => await signIn()}>
						Login with google
					</button>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
