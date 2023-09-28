import axios from "axios";
import { API } from "./bringData";

export const findCourts = async ({
	country,
	province,
	city,
	sport,
}: {
	country: string;
	province: string;
	city: string;
	sport: string;
}) => {
	const res = await axios.get(
		`${API}clubs/search/results?country=${country}&province=${province}&city=${city}&sport=${sport}`,
	);
	if (!res) return console.log("Courts not founded");
	return res.data;
};
