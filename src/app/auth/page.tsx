"use client";

//TODO: No estoy usando esto, ver si funciona igual el auth
import { googleAuth } from "@/services/auth";
import { useCookies } from "next-client-cookies";

const AuthPage = () => {
	const cookies = useCookies();

	return (
		<div>
			<h2>Auth</h2>
			{!cookies.get("access_token") && (
				<div>
					<button
						onClick={() => {
							window.location.href =
								"https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:4000/auth/google/callback&client_id=900367152844-iejji8kcn8u170ogf5ckfh7qi9c466j9.apps.googleusercontent.com&response_type=code&scope=email%20profile";
						}}
					>
						Login with google
					</button>
				</div>
			)}
		</div>
	);
};

export default AuthPage;
