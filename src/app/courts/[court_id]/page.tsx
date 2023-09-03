"use client";

import SingleCourt from "@/components/SingleCourt";
import { bringCourt } from "@/services/bringData";
import { Court } from "@/utils/models";
import { useEffect, useState } from "react";

const CourtPage = ({ params }: { params: { court_id: string } }) => {
	const [court, setCourt] = useState({} as Court);

	useEffect(() => {
		bringCourt(params.court_id).then((res) => setCourt(res));
	}, [])

	return (
		<div>
			<SingleCourt court={court} />
		</div>
	);
};

export default CourtPage;
