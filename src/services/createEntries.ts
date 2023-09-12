import { Reservation } from "@/utils/models";
import axios from "axios";
import { API } from "./bringData";

export const createReservation = async (reservation: Reservation) => {
	try {
		const res = await axios.post(`${API}reservations`, { reservation });
        console.log(res.status);
	} catch (err) {
		return err;
	}
};
