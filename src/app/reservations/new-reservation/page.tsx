"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Court } from "@/utils/models";
import { bringCourt } from "@/services/bringData";

const NewReservationPage = () => {
	const [court, setCourt] = useState<Court>({} as Court);
	const params = useSearchParams();
	console.log(params.get("hour"));

	useEffect(() => {
		bringCourt(params.get("court_id")!).then((res) => setCourt(res));
	}, []);

	return (
		<div>
			<h2>New reservation</h2>
			<h3>{court.name}</h3>
		</div>
	);
};

export default NewReservationPage;
