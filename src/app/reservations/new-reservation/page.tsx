"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Court } from "@/utils/models";

const NewReservationPage = () => {
	const [Court, setCourt] = useState<Court>({} as Court);
	const params = useSearchParams();
	console.log(params.get("court"));
	console.log(params.get("hour"));

    //TODO: Cambiar la timeline para que se le envie la prop de los courts con toda su info
    //TODO: O sino traer todos los courts y filtrar por nombre
	useEffect(() => {}, []);

	return (
		<div>
			<h2>New reservation</h2>
		</div>
	);
};

export default NewReservationPage;
