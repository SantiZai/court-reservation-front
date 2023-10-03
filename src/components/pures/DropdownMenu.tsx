"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ArrowBack } from "@mui/icons-material";

const DropdownMenu = ({ handler }: { handler: (isOpen: boolean) => void }) => {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen(!open);
		handler(!open);
	};

	return (
		<div>
			<div className="toggle p-4">
				<div onClick={toggleMenu}>
					<Menu />
				</div>
			</div>
			<div className={`menu ${open && "opened"} w-full h-full p-6`}>
				<ul className="w-full h-full flex flex-col gap-2">
					<div className="w-full flex justify-end">
						<ArrowBack onClick={toggleMenu} />
					</div>
					<div className="h-full w-2/3 flex flex-col justify-between">
						<div className="flex flex-col gap-1">
							<li>
								<Link href="/">Inicio</Link>
							</li>
							<li>
								<Link href="/contact">Contactanos</Link>
							</li>
							<li>
								<Link href="/demo">Quiero una demo</Link>
							</li>
							<li className="mb-2">
								<Link href="/auth">Iniciar sesión</Link>
							</li>
							<div className="separator w-3/4"></div>
							<li className="w-3/4 mt-4 text-sm text-center">
								<Link href="/privacy-policy">Términos y condiciones</Link>
							</li>
						</div>
						<div>Logo</div>
					</div>
				</ul>
			</div>
		</div>
	);
};

export default DropdownMenu;
