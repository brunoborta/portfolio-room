import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { responsiveConfig } from "../utils/responsiveConfig";

// Breakpoint definitions based on Tailwind CSS
const breakpoints = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export const useResponsiveStore = create(
  subscribeWithSelector((set, get) => ({
    breakpoint: "xl", // default
    config: responsiveConfig.xl, // default config

    setBreakpoint: (breakpoint) => {
      const config = responsiveConfig[breakpoint];
      set({ breakpoint, config });
    },

    detectBreakpoint: () => {
      const width = window.innerWidth;
      let newBreakpoint = "xl";

      // Determine breakpoint based on window width
      if (width < breakpoints.sm) newBreakpoint = "xs";
      else if (width < breakpoints.md) newBreakpoint = "sm";
      else if (width < breakpoints.lg) newBreakpoint = "md";
      else if (width < breakpoints.xl) newBreakpoint = "lg";
      else if (width < breakpoints["2xl"]) newBreakpoint = "xl";
      else newBreakpoint = "2xl";

      // Only update if breakpoint actually changed
      if (newBreakpoint !== get().breakpoint) {
        get().setBreakpoint(newBreakpoint);
      }
    },

    // Helper methods
    isMobile: () => {
      const { breakpoint } = get();
      return breakpoint === "xs" || breakpoint === "sm";
    },

    isTablet: () => {
      const { breakpoint } = get();
      return breakpoint === "md";
    },

    isDesktop: () => {
      const { breakpoint } = get();
      return breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl";
    },

    getConfig: () => {
      return get().config;
    },

    getBreakpoint: () => {
      return get().breakpoint;
    },
  }))
);
