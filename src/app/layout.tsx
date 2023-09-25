import "./globals.css";
import "./navigation.scss";
import { cookies } from "next/headers";
import ClientCookiesProvider from "@/components/providers/CookiesProvider";
import DropdownMenu from "@/components/pures/DropdownMenu";

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
				<DropdownMenu />
				<ClientCookiesProvider value={cookies().getAll()}>
					{children}
				</ClientCookiesProvider>
			</body>
		</html>
	);
}
