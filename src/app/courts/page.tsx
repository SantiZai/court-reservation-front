"use client";

import SingleCourt from "@/components/SingleCourt";
import { bringCourts } from "@/services/bringData";
import { Court } from "@/utils/models";
import { useEffect, useState } from "react";
import Link from "next/link";
import variables from "../../variables.module.scss";

const CourtsPage = () => {
	const [courts, setCourts] = useState<Court[]>([]);

	useEffect(() => {
		bringCourts().then((res) => setCourts(res));
	}, []);

	return (
		<div style={{backgroundColor: variables.primaryColor}}>
			<h1>Courts</h1>
			<div className="flex flex-col gap-4">
				{courts.map((court: Court) => {
					return (
						<div key={court.id} className="bg-red-400">
							<Link href={`courts/${court.id}`}>
								<SingleCourt court={court} />
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CourtsPage;
