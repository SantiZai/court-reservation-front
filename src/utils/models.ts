enum STATE {
	Disponible,
	Ocupado,
}

enum Surface {
	Polvo,
	Cemento,
	CespedNatural,
	CespedSintetico,
	Parquet,
}

export enum Sport {
	Tenis,
	Basquet,
	Futbol,
}

export interface Player {
	id: number;
	email: string;
	fullname: string;
	picture: string;
	admin?: boolean;
	reservations?: Reservation[];
}

export interface Club {
	id: number;
	name: string;
	country: string;
	province: string;
	city: string;
	courts: Court[];
	sports: Sport[];
	reservations: Reservation[];
}

export interface Court {
	id: number;
	name: string;
	state: STATE;
	illuminated: boolean;
	club: Club;
	clubId: number;
	sport: Sport;
	reservations: Reservation[];
}

export interface Reservation {
	id?: number;
	createdAt?: Date;
	duration: number;
	reservedMonth: string;
	reservedDay: string;
	reservedHour: string;
	reservedMinutes: string;
	user?: Player;
	userId: number;
	club?: Club;
	clubId: number;
	court?: Court;
	courtId: number;
}
