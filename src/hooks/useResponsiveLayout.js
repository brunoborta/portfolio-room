import { useResponsiveStore } from "../stores/responsiveStore";

/**
 * Hook to access responsive layout configuration
 * @returns {Object} Layout configuration for current breakpoint
 */
export const useResponsiveLayout = () => {
  const { config } = useResponsiveStore();

  return {
    layout: config?.layout || {},
    features: config?.features || {},
    breakpoint: useResponsiveStore.getState().breakpoint,
  };
};

/**
 * Hook to check if specific feature is enabled for current breakpoint
 * @param {string} featureName - Name of the feature to check
 * @returns {boolean} Whether the feature is enabled
 */
export const useResponsiveFeature = (featureName) => {
  const { features } = useResponsiveStore();

  return features?.[featureName] || false;
};

/**
 * Hook to get responsive text sizes
 * @returns {Object} Text size configuration
 */
export const useResponsiveText = () => {
  const { layout } = useResponsiveStore();

  return {
    titleSize: layout?.titleSize || "8rem",
    subtitleSize: layout?.subtitleSize || "3rem",
    paragraphSize: layout?.paragraphSize || "1.1rem",
  };
};
