import Link from "next/link";
import "./globals.css";

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
				<ul>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/courts">Courts</Link>
					</li>
					<li>
						<Link href="/reservations">Reservations</Link>
					</li>
				</ul>
				{children}
			</body>
		</html>
	);
}
