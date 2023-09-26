"use client";

import { Menu, Close } from "@mui/icons-material";
import Link from "next/link";
import { useState } from "react";

const DropdownMenu = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="toggle w-full flex justify-end">
				<div onClick={() => setOpen(!open)}>{open ? <Close /> : <Menu />}</div>
			</div>
			<div className={`menu ${open && "opened"} w-full bg-red-200`}>
				<ul className="navigation flex gap-2">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/courts">Courts</Link>
					</li>
					<li>
						<Link href="/reservations">Reservations</Link>
					</li>
					<li>
						<Link href="/auth">Auth</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default DropdownMenu;
