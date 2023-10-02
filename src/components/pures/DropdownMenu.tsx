"use client";

import { Menu, Close } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const DropdownMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="toggle">
				<div onClick={() => setOpen(!open)}>{open ? <Close /> : <Menu />}</div>
			</div>
			<div className={`menu ${open && "opened"} w-3/4 h-full bg-red-200`}>
				<ul className="w-full h-full flex flex-col justify-between gap-2">
					<div className="flex flex-col">
						<li>
							<Link href="/">Inicio</Link>
						</li>
						<li>
							<Link href="/contact">Contactanos</Link>
						</li>
						<li>
							<Link href="/demo">Quiero una demo</Link>
						</li>
						<hr />
						<li>
							<Link href="/auth">Iniciar sesión</Link>
						</li>
						<hr />
						<li>
							<Link href="/privacy-policy">Términos y condiciones</Link>
						</li>
					</div>
					<div>Logo</div>
				</ul>
			</div>
		</>
	);
};

export default DropdownMenu;
