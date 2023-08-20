import axios from "axios";

const $API = process.env.API_BASE;

export const bringCourts = async () => {
	const res = await axios.get(`${$API}courts`);
	console.log(res.data);
};
