enum STATE {
	Disponible,
	Ocupado,
}

export interface Player {
	id: number;
	email: string;
	fullname: string;
	picture: string;
	admin: boolean;
	reservations: Reservation[];
}

export interface Court {
	id: number;
	name: string;
	state: STATE;
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
	court?: Court;
	courtId: number;
}
