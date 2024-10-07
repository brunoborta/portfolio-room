import { create } from "zustand";
import { lightTheme, darkTheme } from "../themes";

export const useTheme = create((set, get) => ({
  isLight: true,
  setIsLight: (value) => set({ isLight: value }),
  toggleTheme: () => set((state) => ({ isLight: !state.isLight })),
  getActualTheme: () => {
    const { isLight } = get();
    return isLight ? lightTheme : darkTheme;
  },
}));
