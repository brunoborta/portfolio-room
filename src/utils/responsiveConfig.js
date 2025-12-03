// Responsive configuration for different viewports
export const responsiveConfig = {
  xs: {
    pages: 5,
    camera: {
      fov: 60,
      position: [0, 15, 15],
      movement: { x: 2, y: 2, z: 3 },
    },
    timeline: {
      floorScale: 8,
      roomMovement: { x: 4, y: 0, z: 0 },
      cameraMovement: { x: 0.8, y: 3, z: 1 },
    },
    layout: {
      titleSize: "3rem",
      subtitleSize: "1.5rem",
      paragraphSize: "0.9rem",
      padding: "0 1rem",
    },
    features: {
      mouseRotation: false,
      spotlights: false,
      complexAnimations: false,
    },
  },
  sm: {
    pages: 6,
    camera: {
      fov: 55,
      position: [0, 18, 18],
      movement: { x: 3, y: 2.5, z: 4 },
    },
    timeline: {
      floorScale: 9,
      roomMovement: { x: 5, y: 0, z: 0 },
      cameraMovement: { x: 1.2, y: 3.5, z: 2 },
    },
    layout: {
      titleSize: "4rem",
      subtitleSize: "2rem",
      paragraphSize: "1rem",
      padding: "0 2rem",
    },
    features: {
      mouseRotation: false,
      spotlights: false,
      complexAnimations: true,
    },
  },
  md: {
    pages: 7,
    camera: {
      fov: 50,
      position: [0, 19, 19],
      movement: { x: 4, y: 3, z: 5 },
    },
    timeline: {
      floorScale: 10,
      roomMovement: { x: 5.5, y: 0, z: 0 },
      cameraMovement: { x: 1.4, y: 4.5, z: 5.9 },
    },
    layout: {
      titleSize: "5rem",
      subtitleSize: "2.5rem",
      paragraphSize: "1.05rem",
      padding: "0 3rem",
    },
    features: {
      mouseRotation: false,
      spotlights: true,
      complexAnimations: true,
    },
  },
  lg: {
    pages: 8,
    camera: {
      fov: 45,
      position: [0, 20, 20],
      movement: { x: 5, y: 3.5, z: 6 },
    },
    timeline: {
      floorScale: 10.5,
      roomMovement: { x: 6, y: 0, z: 0 },
      cameraMovement: { x: 1.4, y: 4.5, z: 5.9 },
    },
    layout: {
      titleSize: "6rem",
      subtitleSize: "2.8rem",
      paragraphSize: "1.08rem",
      padding: "0 3.5rem",
    },
    features: {
      mouseRotation: true,
      spotlights: true,
      complexAnimations: true,
    },
  },
  xl: {
    pages: 9,
    camera: {
      fov: 45,
      position: [0, 20, 20],
      movement: { x: 6, y: 4, z: 7 },
    },
    timeline: {
      floorScale: 11,
      roomMovement: { x: 6, y: 0, z: 0 },
      cameraMovement: { x: 1.4, y: 4.5, z: 5.9 },
    },
    layout: {
      titleSize: "8rem",
      subtitleSize: "3rem",
      paragraphSize: "1.1rem",
      padding: "0 4rem",
    },
    features: {
      mouseRotation: true,
      spotlights: true,
      complexAnimations: true,
    },
  },
  "2xl": {
    pages: 9,
    camera: {
      fov: 45,
      position: [0, 20, 20],
      movement: { x: 7, y: 4.5, z: 8 },
    },
    timeline: {
      floorScale: 12,
      roomMovement: { x: 7, y: 0, z: 0 },
      cameraMovement: { x: 1.4, y: 4.5, z: 5.9 },
    },
    layout: {
      titleSize: "9rem",
      subtitleSize: "3.2rem",
      paragraphSize: "1.15rem",
      padding: "0 5rem",
    },
    features: {
      mouseRotation: true,
      spotlights: true,
      complexAnimations: true,
    },
  },
};
