import { create } from "zustand";

interface UserStore {
	email: string;
	name: string;
	photo: string;
}

export const userStore = create((set) => ({
	userToken: "",
	user: {
		email: "",
		name: "",
		photo: "",
	} as UserStore,
	setToken: (token: string) => set({ userToken: token }),
	setUser: (user: UserStore) => set({ user: user }),
}));
