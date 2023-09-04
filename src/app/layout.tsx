import Link from "next/link";
import "./globals.css";
import "./navigation.scss";
import { cookies } from "next/headers";
import ClientCookiesProvider from "@/components/providers/CookiesProvider";

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
				<ul className="navigation w-full flex gap-2">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/courts">Courts</Link>
					</li>
					<li>
						<Link href="/reservations">Reservations</Link>
					</li>
					<li>
						<Link href="/auth">Auth</Link>
					</li>
				</ul>
				<ClientCookiesProvider value={cookies().getAll()}>
					{children}
				</ClientCookiesProvider>
			</body>
		</html>
	);
}
