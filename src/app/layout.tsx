import "./globals.css";
import "./layout.scss";
import "./navigation.scss";
import { cookies } from "next/headers";
import ClientCookiesProvider from "@/components/providers/CookiesProvider";
import DropdownMenu from "@/components/pures/DropdownMenu";
import Footer from "@/components/pures/Footer";
import Provider from "@/components/providers/SessionProvider";

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
					<DropdownMenu />
					<ClientCookiesProvider value={cookies().getAll()}>
						{children}
					</ClientCookiesProvider>
					<Footer />
				</Provider>
			</body>
		</html>
	);
}
