import { bringCourts } from "@/services/bringData";

const CourtsPage = async () => {
	await bringCourts()
	return (
		<div>
			<h1>Courts</h1>
		</div>
	);
};

export default CourtsPage;
