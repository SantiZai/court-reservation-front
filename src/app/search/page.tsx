"use client";

import { findCourts } from "@/services/searchCourts";
import { Club, Sport } from "@/utils/models";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchPage = () => {
	const [country, setCountry] = useState("");
	const [province, setProvince] = useState("");
	const [city, setCity] = useState("");
	const [sport, setSport] = useState("");
	const [clubs, setClubs] = useState([] as Club[]);

	const params = useSearchParams();

	useEffect(() => {
		setCountry(params.get("country") as string);
		setProvince(params.get("province") as string);
		setCity(params.get("city") as string);
		setSport(params.get("sport") as string);
	}, [country, province, city, sport]);

	useEffect(() => {
		if (country && province && city && sport) {
			findCourts({ country, province, city, sport }).then((res) =>
				setClubs(res),
			);
		}
	}, [country, province, city, sport]);

	return (
		<div>
			<span>Search page</span>
			{clubs && (
				<div>
					{clubs.map((club: Club) => {
						return (
							<div key={club.id}>
								<span>{club.name}</span>
								<div className="flex">
									{club.sports.map((sport: Sport) => {
										return <span>{sport}</span>;
									})}
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default SearchPage;
