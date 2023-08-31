"use client";

import { paginationHours } from "@/utils/paginations";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

const Timeline = ({
	hours,
	handle,
}: {
	hours: string[];
	handle: (hour: string) => void;
}) => {
	const [actualPage, setActualPage] = useState(0);

	const allHours = [
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

	const handlePage = (newPage: number) => {
		setActualPage(newPage);
	};

	const pages = paginationHours(allHours, 5);

	return (
		<div className="p-2 mx-auto">
			<div className="flex gap-2 justify-center">
				<button
					disabled={actualPage === 0}
					onClick={() => handlePage(actualPage - 1)}
				>
					<ArrowBackIos />
				</button>
				{pages[actualPage].map((hour, i) => (
					<div key={i}>
						{!hours.includes(hour) ? (
							<button className="text-gray-300">{hour}</button>
						) : (
							<button key={i} onClick={() => handle(hour)}>
								{hour}
							</button>
						)}
					</div>
				))}
				<button
					disabled={actualPage === pages.length - 1}
					onClick={() => handlePage(actualPage + 1)}
				>
					<ArrowForwardIos />
				</button>
			</div>
		</div>
	);
};

export default Timeline;
