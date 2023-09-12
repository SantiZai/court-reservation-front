import axios from "axios";

//TODO: Solucionar problema con la variable de entorno
//const API = process.env.API_BASE;
export const API = "http://localhost:3000/";

export const bringUserByEmail = async (email: string) => {
	try {
		const res = await axios.get(`${API}players/bring/${email}`);
		return res.data;
	} catch (err) {
		return err;
	}
};

export const bringCourts = async () => {
	try {
		const res = await axios.get(`${API}courts`);
		return res.data;
	} catch (err) {
		return err;
	}
};

export const bringCourt = async (id: string) => {
	try {
		const res = await axios.get(`${API}courts/${id}`);
		return res.data;
	} catch (err) {
		return err;
	}
};
