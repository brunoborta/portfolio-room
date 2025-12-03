import { create } from "zustand";

export const useIntro = create((set) => ({
  introCompleted: false,
  setIntroCompleted: (value) => set({ introCompleted: value }),
  loadingCompleted: false,
  setLoadingCompleted: (value) => set({ loadingCompleted: value }),
}));
