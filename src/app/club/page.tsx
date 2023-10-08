"use client";

import "./club.scss";
import { bringClubById, bringUserByEmail } from "@/services/bringData";
import { Club, Court, Player } from "@/utils/models";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ClubPage = () => {
	const [user, setUser] = useState({} as Player);
	const [club, setClub] = useState({} as Club);

	const { data: session } = useSession();

	useEffect(() => {
		if (session?.user) {
			bringUserByEmail(session?.user?.email as string).then((res) => {
				setUser(res);
				bringClubById(res.clubAdmin.toString()).then((res) => setClub(res));
			});
		}
	}, [club]);

	return (
		<div className="flex flex-col p-4">
			<div className="flex justify-end">Logo</div>
			{user.admin && (
				<>
					<span className="text-lg">Manage my club</span>
					<span>{club.name}</span>
					<div>
						{club.courts &&
							club.courts.map((court: Court) => {
								return (
									<div key={court.id} className="court flex flex-col p-2 rounded-md">
										<span className="text-lg">{court.name}</span>
										<div>
											<span className="text-sm">{court.surface}</span>
											<span> - </span>
											<span className="text-sm">{court.sport}</span>
											<span> - </span>
											<span className="text-sm">
												{court.illuminated
													? "Con iluminación"
													: "Sin iluminación"}
											</span>
										</div>
									</div>
								);
							})}
						<span>Agregar más canchas</span>
					</div>
				</>
			)}
		</div>
	);
};

export default ClubPage;
