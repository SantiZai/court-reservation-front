import "./globals.css";
import "./layout.scss";
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
					<PrincipalContent children={children} />
				</Provider>
			</body>
		</html>
	);
}
