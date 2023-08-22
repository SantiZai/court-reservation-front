import axios from "axios";

//const API = process.env.API_BASE;
const API = "http://localhost:3000/"

export const bringCourts = async () => {
	try {
		//TODO: Solucionar problema con la variable de entorno
		const res = await axios.get(`${API}courts`);
		return res.data;
	} catch (err) {
		return err;
	}
};

export const bringCourt = async (id: string) => {
	try {
		const res = await axios.get(`${API}courts/${id}`)
		return res.data
	} catch (err) {
		return err
	}
}
