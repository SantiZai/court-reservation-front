import { create } from "zustand";

interface UserStore {
	id: number;
	email: string;
	name: string;
	photo: string;
}

export const userStore = create((set) => ({
	userToken: "",
	user: {
		id: 0,
		email: "",
		name: "",
		photo: "",
	} as UserStore,
	setToken: (token: string) => set({ userToken: token }),
	setUser: (user: UserStore) => set({ user: user }),
}));
