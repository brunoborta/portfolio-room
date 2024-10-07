import { create } from "zustand";

export const useEmailSuccess = create((set) => ({
  emailSuccess: false,
  setEmailSuccess: (value) => set({ emailSuccess: value }),
}));
