import { Court } from "@/utils/models";

//TODO: Complete this function for check if the court have disponibility
export const checkReservations = (courts: Court[]) => {
	let reservations: any = {};
	courts.forEach((court: Court) => {
		let courtReservations: string[] = [];
		court.reservations.forEach((reservation: any) => {
			courtReservations.push(
				`${reservation.reservedHour}:${reservation.reservedMinutes}`,
			);
		});
		reservations[court.name] = courtReservations;
	});
	return reservations;
};
