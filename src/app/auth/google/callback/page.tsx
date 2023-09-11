"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCookies } from "next-client-cookies";
import axios from "axios";
import { userStore } from "@/utils/globalStates";

const GoogleCallbackPage = () => {
	const cookies = useCookies();

	const [token, setToken] = useState<string>(
		cookies.get("access_token") as string | "",
	);
	const [userData, setUserData] = useState<{}>({} as {});

	const searchParams = useSearchParams();

	//Setea valores en el estado global
	const setTokenState = userStore((state: any) => state.setToken);
	const setUserState = userStore((state: any) => state.setUser);
	const user = userStore((state: any) => state.user);

	useEffect(() => {
		if (!cookies.get("access_token")) {
			const code = searchParams.get("code");
			if (code) {
				//TODO: Crear variables de entorno para datos sensibles
				const requestBody = {
					code: code,
					client_id:
						"900367152844-iejji8kcn8u170ogf5ckfh7qi9c466j9.apps.googleusercontent.com",
					client_secret: "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",
					redirect_uri: "http://localhost:4000/auth/google/callback",
					grant_type: "authorization_code",
				};
				axios
					.post("https://oauth2.googleapis.com/token", requestBody)
					.then((res) => {
						const accessToken = res.data.access_token;
						cookies.set("access_token", res.data.access_token);
						setToken(accessToken);
						//TODO: Setear el access_token del estado global
						setTokenState(accessToken);
					})
					.catch((err) => console.error(err));
			}
		}
	}, [searchParams]);

	useEffect(() => {
		if (token) {
			axios
				.get(
					"https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses,photos",
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				)
				.then((res) => {
					setUserData(res.data);
					setUserState({
						email: res.data.emailAddresses[0].value,
						name: res.data.names[0].displayName,
						photo: res.data.photos[0].url,
					});
				})
				.catch((err) => console.error(err));
		}
	}, [token]);

	useEffect(() => {
		console.log(userData);
		console.log(user);
	}, [userData]);

	return (
		<div>
			<h2>Inicio de sesión exitoso...</h2>
			<button onClick={() => console.log(token, userData)}>Show data</button>
		</div>
	);
};

export default GoogleCallbackPage;
