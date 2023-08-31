"use client"

import Timeline from "@/components/Timeline";
import { useState } from "react";

const ReservationsPage = () => {
	const [selectedHour, setSelectedHour] = useState<string>("");

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

	const handleSelectedHour = (hour: string) => setSelectedHour(hour)

    //TODO: Traer la hora seleccionada para la reserva
	//TODO: Crear contexto para manejar la reserva
	return (
		<div>
			<h2>Reservations</h2>
			<div>
				<Timeline hours={hours} handle={handleSelectedHour} />
			</div>
		</div>
	);
};

export default ReservationsPage;
