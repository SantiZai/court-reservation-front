import { Player, Reservation } from "@/utils/models";
import axios from "axios";
import { API } from "./bringData";

export const createUser = async (user: Player) => {
	const res = await axios.get(`${API}players/exists?email=${user.email}`);
	if (res.status === 404) {
		console.log("not found");
		const res = await axios.post(`${API}players`, user);
	}
};

export const createReservation = async (reservation: Reservation) => {
	try {
		const res = await axios.post(`${API}reservations`, reservation);
		return res.status;
	} catch (err) {
		console.error(err);
	}
};
