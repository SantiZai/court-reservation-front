"use client"

import { bringUserByEmail } from "@/services/bringData";
import { Player } from "@/utils/models";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const NewClubPage = () => {
    const [user, setUser] = useState({} as Player)

    const {data: session} = useSession()

    useEffect(() => {
        bringUserByEmail(session?.user?.email as string).then((res) => setUser(res))
    }, [])

    return (
		<div>
			{
                user.admin && (
                    <div>
                        <span>New club</span>
                    </div>
                )
            }
		</div>
	);
};

export default NewClubPage;
