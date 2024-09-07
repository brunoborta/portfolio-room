import gsap from "gsap";

export const useShowBadge = () => {
  return (ref, condition, callback) => {
    gsap.to(ref, {
      duration: 0.5,
      top: condition ? "-16dvh" : "2dvh",
      ease: "power2.out",
    });
    callback();
  };
};
