"use client";

import { useState } from "react";
import DropdownMenu from "../pures/DropdownMenu";
import Footer from "../pures/Footer";
import "../../app/navigation.scss";

const PrincipalContent = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleIsOpen = (open: boolean) => setIsOpen(open);

	return (
		<div>
			<DropdownMenu handler={handleIsOpen} />
			<div
				className={`${
					isOpen && "darken"
				} h-full w-full flex flex-col justify-between pt-2`}
			>
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default PrincipalContent;
