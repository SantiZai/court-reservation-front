"use client";

import Timeline from "@/components/Timeline";
import { bringCourts } from "@/services/bringData";
import { checkReservations } from "@/services/checking";
import { Court } from "@/utils/models";
import { useEffect, useState } from "react";

const ReservationsPage = () => {
	const [courts, setCourts] = useState<Court[]>([]);
	const [reservations, setReservations] = useState<{}>({});

	useEffect(() => {
		bringCourts().then((res) => setCourts(res));
	}, []);

	useEffect(() => {
		setReservations(checkReservations(courts));
	}, [courts]);

	return (
		<div>
			<h2>Reservations</h2>
			<div>
				<Timeline courts={courts} reservations={reservations} />
			</div>
		</div>
	);
};

export default ReservationsPage;
