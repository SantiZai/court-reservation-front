"use client";

import "./court.scss";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Edit } from "@mui/icons-material";
import {
	FormControl,
	FormLabel,
	TextField,
	RadioGroup,
	FormControlLabel,
	Radio,
	InputAdornment,
} from "@mui/material";
import { bringCourt } from "@/services/bringData";
import { Court } from "@/utils/models";

const CourtClubPage = () => {
	const [court, setCourt] = useState({} as Court);
	const [name, setName] = useState("");
	const [disabled, setDisabled] = useState(true);
	const [illuminated, setIlluminated] = useState(false);

	const params = useParams();

	useEffect(() => {
		bringCourt(params.id[0]).then((res) => {
			setCourt(res);
			setIlluminated(res.illuminated);
			setName(res.name);
		});
	}, []);

	return (
		<div className="w-full h-full flex flex-col justify-center items-center px-4 py-8">
			<FormControl className="px-2 py-4 flex flex-col justify-center items-center">
				<div className="entry">
					<TextField
						label={"Nombre de la cancha"}
						defaultValue={name}
						disabled={disabled}
						onChange={(e) => setName(e.target.value)}
						variant="standard"
						InputProps={{
							startAdornment: (
								<div onClick={() => setDisabled(!disabled)}>
									<InputAdornment position="start">
										<Edit />
									</InputAdornment>
								</div>
							),
						}}
					>
						{court.name}
					</TextField>
				</div>
				<div className="entry">
					<FormLabel>{court.surface}</FormLabel>
					<Edit />
				</div>
				<div className="entry">
					<FormLabel id="controlled-radio-buttons-group">Iluminación</FormLabel>
					<RadioGroup
						aria-labelledby="controlled-radio-buttons-group"
						name="controlled-radio-button-group"
						value={illuminated}
						onChange={() => setIlluminated(!illuminated)}
					>
						<FormControlLabel
							value={false}
							control={<Radio />}
							label="Sin iluminación"
						/>
						<FormControlLabel
							value={true}
							control={<Radio />}
							label="Con iluminación"
						/>
					</RadioGroup>
				</div>
				<button>Actualizar</button>
			</FormControl>
		</div>
	);
};

export default CourtClubPage;
