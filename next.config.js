const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	sassOptions: {
		includePaths: [path.join(__dirname, "styles")],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
				pathname: "/a/**"
			}
		]
	}
};

module.exports = nextConfig;
