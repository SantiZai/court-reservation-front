import { Court } from "@/utils/models";

interface Props {
	court: Court;
}

const SingleCourt = ({ court }: Props) => {
	return (
		<div>
			<h3>{court.id}</h3>
			<h2>{court.name}</h2>
			<h3>{court.state}</h3>
		</div>
	);
};

export default SingleCourt;
