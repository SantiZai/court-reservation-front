"use client";

import { paginationHours } from "@/utils/paginations";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";

const Timeline = ({ hours }: { hours: string[] }) => {
	const [actualPage, setActualPage] = useState(0);
	const [selectedHour, setSelectedHour] = useState("");

	const handlePage = (newPage: number) => {
		setActualPage(newPage);
	};

	const pages = paginationHours(hours, 5);

	return (
		<div className="p-2 bg-red-300 mx-auto">
			<div className="flex gap-2 justify-center">
				<button
					disabled={actualPage === 0}
					onClick={() => handlePage(actualPage - 1)}
				>
					<ArrowBackIos />
				</button>
				{pages[actualPage].map((hour, i) => (
					<button key={i} onClick={() => setSelectedHour(hour)}>
						{hour}
					</button>
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
