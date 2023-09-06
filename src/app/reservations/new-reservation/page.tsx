"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Court } from "@/utils/models";
import { bringCourt } from "@/services/bringData";

const NewReservationPage = () => {
	const [court, setCourt] = useState<Court>({} as Court);
	const [hour, setHour] = useState<string>("");
	const params = useSearchParams();
	console.log(params.get("hour"));

	useEffect(() => {
		bringCourt(params.get("court_id")!).then((res) => setCourt(res));
		setHour(params.get("hour")!);
	}, []);

	return (
		<div>
			<h2>New reservation</h2>
			<h3>{court.name}</h3>
			<h3>{hour}</h3>
		</div>
	);
};

export default NewReservationPage;
