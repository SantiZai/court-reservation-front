"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { useCookies } from "next-client-cookies";

const AuthPage = () => {
	const cookies = useCookies();

	const { data: session } = useSession();
	console.log(session);

	return (
		<div>
			<h2>Auth</h2>
			<div>
				{session?.user ? (
					<div>
						<span>Profile</span>
						<button onClick={() => signOut()}>Sign out</button>
					</div>
				) : (
					<button onClick={() => signIn()}>Login with google</button>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
