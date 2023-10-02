import axios from "axios";

//TODO: Solucionar problema con la variable de entorno
//const API = process.env.API_BASE;
export const API = "http://localhost:3000/";

export const bringUserByEmail = async (email: string) => {
	try {
		const res = await axios.get(`${API}players/exists?email=${email}`);
		return res.data;
	} catch (err) {
		return err;
	}
};

export const bringClub = async (clubName: string) => {
	try {
		const res = await axios.get(`${API}clubs?clubName=${clubName}`)
		return res.data
	} catch (err) {
		return err
	}
}

export const bringCourts = async (clubName: string) => {
	try {
		const res = await axios.get(`${API}courts?club=${clubName}`);
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
