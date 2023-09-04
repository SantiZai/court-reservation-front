import axios from "axios";
import { API } from "./bringData";

export const googleAuth = async () => {
	try {
		const res = await axios.get(`${API}auth/google`);
		const redirectUrl = res.request.responseURL;
		return { success: true, redirectUrl };
	} catch (err) {
		return err;
	}
};
