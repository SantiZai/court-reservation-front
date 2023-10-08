"use client";

import { createUser } from "@/services/createEntries";
import { Player } from "@/utils/models";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { userStore } from "@/utils/globalStates";
import { bringUserByEmail } from "@/services/bringData";

const AuthPage = () => {
	const { data: session } = useSession();

	const setUserState = userStore((state: any) => state.setUser);

	useEffect(() => {
		if (session?.user) {
			createUser({
				email: session.user.email,
				fullname: session.user.name,
				picture: session.user.image,
			} as Player);
			bringUserByEmail(session.user.email as string).then((res) => {
				setUserState({
					id: res.id,
					email: res.email,
					name: res.fullName,
					photo: res.picture,
				});
			});
		}
	}, [session]);

	return (
		<div className="flex flex-col items-center">
			<span className="text-lg text-center">Iniciar sesión</span>
			<div>
				{session?.user ? (
					<div>
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
					<button
						onClick={async () => await signIn("google", { callbackUrl: "/" })}
					>
						Login with google
					</button>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
