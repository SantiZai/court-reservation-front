"use client";

import SingleCourt from "@/components/SingleCourt";
import Timeline from "@/components/Timeline";
import { bringCourt } from "@/services/bringData";
import { Court } from "@/utils/models";
import { useEffect, useState } from "react";

const CourtPage = ({ params }: { params: { court_id: string } }) => {
	const [court, setCourt] = useState({} as Court);
	const [selectedHour, setSelectedHour] = useState("");

	const handleSelectedHour = (hour: string) => {
		setSelectedHour(hour)
	}

	useEffect(() => {
		bringCourt(params.court_id).then((res) => setCourt(res));
	}, []);

	const hours = [
		"08:00",
		"08:30",
		"09:00",
		"09:30",
		"10:00",
		"10:30",
		"11:00",
		"11:30",
		"12:00",
		"12:30",
		"13:00",
		"13:30",
		"14:00",
		"14:30",
		"15:00",
		"15:30",
		"16:00",
		"16:30",
		"17:00",
		"17:30",
		"18:00",
		"18:30",
		"19:00",
		"19:30",
		"20:00",
		"20:30",
		"21:00",
		"21:30",
		"22:00",
		"22:30",
	];

	return (
		<div>
			<SingleCourt court={court} />
			<Timeline hours={hours} handle={handleSelectedHour} />
		</div>
	);
};

export default CourtPage;
