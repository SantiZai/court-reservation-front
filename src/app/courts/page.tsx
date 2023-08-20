import { bringCourts } from "@/services/bringData";

const CourtsPage = async () => {
	await bringCourts()
	return (
		<div>
			<h1>Courtss</h1>
		</div>
	);
};

export default CourtsPage;
