import { useMemo } from "react";
import { useResponsiveStore } from "../stores/responsiveStore";
import gsap from "gsap";

/**
 * Hook to create responsive GSAP timeline based on current breakpoint
 * @param {Object} refs - Object containing refs for apartment, floor, and camera
 * @returns {Object} GSAP timeline instance
 */
export const useResponsiveTimeline = (refs) => {
  const { breakpoint, config } = useResponsiveStore();
  const { apartmentRef, floor, cameraRef } = refs;

  return useMemo(() => {
    if (
      !config ||
      !apartmentRef?.current ||
      !floor?.current ||
      !cameraRef?.current
    ) {
      return null;
    }

    const timeline = gsap.timeline();
    const { timeline: timelineConfig } = config;

    // Create timeline based on current breakpoint configuration
    timeline
      .to(floor.current.scale, {
        x: timelineConfig.floorScale,
        y: timelineConfig.floorScale,
        z: timelineConfig.floorScale,
        ease: "power2.inOut",
      })
      .to(
        apartmentRef.current.position,
        {
          x: timelineConfig.roomMovement.x,
          y: timelineConfig.roomMovement.y,
          z: timelineConfig.roomMovement.z,
        },
        "<"
      )
      .to(cameraRef.current.position, {
        x: timelineConfig.cameraMovement.x,
        y: timelineConfig.cameraMovement.y,
        z: timelineConfig.cameraMovement.z,
        ease: "power2.inOut",
      })
      .to(
        apartmentRef.current.position,
        {
          x: timelineConfig.roomMovement.x * 0.5,
        },
        "<"
      )
      .to(cameraRef.current.position, {
        x: timelineConfig.cameraMovement.x * 0.35,
        y: timelineConfig.cameraMovement.y * 0.87,
        z: timelineConfig.cameraMovement.z * 0.2,
        ease: "power2.inOut",
      })
      .to(
        apartmentRef.current.position,
        {
          x: timelineConfig.roomMovement.x * 0.17,
        },
        "<"
      )
      // Contact section - simplified for smaller screens
      .to(cameraRef.current.position, {
        x: breakpoint === "xs" ? -2.3 : -4.6,
        y: breakpoint === "xs" ? 2.9 : 5.8,
        z: breakpoint === "xs" ? 8.5 : 17,
        ease: "power2.inOut",
      })
      .to(
        apartmentRef.current.position,
        {
          x: timelineConfig.roomMovement.x * 0.17,
        },
        "<"
      );

    return timeline;
  }, [breakpoint, config, apartmentRef, floor, cameraRef]);
};
