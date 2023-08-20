enum STATE {
    Disponible,
    Ocupado
}

export interface Player {

}

export interface Court {
    id: number;
    name: string
    state: STATE,
    reservations: Reservation[]
}

export interface Reservation {

}