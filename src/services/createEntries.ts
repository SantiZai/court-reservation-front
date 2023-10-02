import { Player, Reservation } from "@/utils/models";
import axios from "axios";
import { API } from "./bringData";

export const createUser = async (user: Player) => {
	const res = await axios.get(`${API}players/exists?email=${user.email}`);
	if (res.data.status === 404) {
		const res = await axios.post(`${API}players`, user);
		return res.data;
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
