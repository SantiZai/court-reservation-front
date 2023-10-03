import "./globals.css";
import "./layout.scss";
import { cookies } from "next/headers";
import ClientCookiesProvider from "@/components/providers/CookiesProvider";
import Provider from "@/components/providers/SessionProvider";
import PrincipalContent from "@/components/containers/PrincipalContent";

export const metadata = {
	title: "Court reservation",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Provider>
					<ClientCookiesProvider value={cookies().getAll()}>
						<PrincipalContent children={children} />
					</ClientCookiesProvider>
				</Provider>
			</body>
		</html>
	);
}
