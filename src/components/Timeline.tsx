"use client";

import { paginationHours } from "@/utils/paginations";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import Link from "next/link";
import { Court } from "@/utils/models";

const Timeline = ({
	courts,
	reservations,
}: {
	courts: Court[];
	reservations: any;
}) => {
	const [actualPage, setActualPage] = useState(0);
	const [selectedHour, setSelectedHour] = useState<string>("");

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

	function calculatePriorLimit(hour: string, hoursBefore: number): string {
		// Dividir hora
		const [h, m] = hour.split(":");

		// Convertir a números
		let newH = parseInt(h);
		let newM = parseInt(m);

		// Restar horas
		newH -= Math.floor(hoursBefore);

		// Restar minutos
		newM -= Math.round((hoursBefore % 1) * 60);

		// Corregir minutos negativos
		if (newM < 0) {
			newM += 60;
			newH--;
		}

		// Formatear con 02 dígitos
		const newHStr = newH.toString().padStart(2, "0");
		const newMStr = newM.toString().padStart(2, "0");

		return `${newHStr}:${newMStr}`;
	}

	function calculatePostLimit(hour: string, hoursAfter: number): string {
		const [h, m] = hour.split(":");

		let newH = parseInt(h);
		let newM = parseInt(m);

		newH += Math.floor(hoursAfter);
		newM += Math.round((hoursAfter % 1) * 60);

		if (newM >= 60) {
			newM -= 60;
			newH++;
		}

		const newHStr = newH.toString().padStart(2, "0");
		const newMStr = newM.toString().padStart(2, "0");

		return `${newHStr}:${newMStr}`;
	}

	function between(arr: string[], start: string, end: string) {
		return arr.filter((hour) => {
			return hour >= start && hour <= end;
		});
	}

	//TODO: Bloquear turnos anteriores de turnos ya sacados para que no se superpongan
	//TODO: Permitir turnos de hora y media
	return (
		<div className="p-2 mx-auto">
			<div>
				<div className="flex gap-2 justify-center">
					<button
						disabled={actualPage === 0}
						onClick={() => handlePage(actualPage - 1)}
					>
						<ArrowBackIos />
					</button>
					{pages[actualPage].map((hour, i) => {
						const availableCourts = Object.keys(reservations).filter(
							(court) => !reservations[court].includes(hour),
						);
						return (
							<div key={i}>
								{availableCourts.length === 0 ? (
									<button className="text-gray-300">{hour}</button>
								) : (
									<button key={i} onClick={() => setSelectedHour(hour)}>
										{hour}
									</button>
								)}
							</div>
						);
					})}
					<button
						disabled={actualPage === pages.length - 1}
						onClick={() => handlePage(actualPage + 1)}
					>
						<ArrowForwardIos />
					</button>
				</div>
				{Object.keys(reservations).map((court, i) => {
					const actualCourt: Court = courts[i];
					//TODO: Obtener horas bloqueadas
					const blockedHours = reservations[court]
						.map((hour: any) => {
							const limit1 = calculatePriorLimit(hour, 1);
							const limit2 = calculatePostLimit(hour, 1);
							return between(allHours, limit1, limit2);
						})
						.flat();
					if (!blockedHours.includes(selectedHour)) {
						return (
							<Link
								key={i}
								href={`/reservations/new-reservation?courst_id=${actualCourt.id}&hour=${selectedHour}`}
							>
								<div>{actualCourt.name} disponible</div>
							</Link>
						);
					}
					return null;
				})}
			</div>
		</div>
	);
};

export default Timeline;
