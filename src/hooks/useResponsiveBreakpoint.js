import { useEffect } from "react";
import { useResponsiveStore } from "../stores/responsiveStore";

/**
 * Hook to initialize responsive breakpoint detection
 * This hook sets up the resize listener and initializes the breakpoint detection
 */
export const useResponsiveBreakpoint = () => {
  const { detectBreakpoint } = useResponsiveStore();

  useEffect(() => {
    // Detect breakpoint immediately on mount
    detectBreakpoint();

    // Set up resize listener
    const handleResize = () => {
      detectBreakpoint();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [detectBreakpoint]);

  // Return current state from store
  return useResponsiveStore();
};
