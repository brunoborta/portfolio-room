import { forwardRef, useRef } from "react";
import { Button, Reflection, Container, Shadow } from "./styles";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FancyButton = forwardRef(function Butt({ children, onClick }, ref) {
  const tl = useRef(gsap.timeline({ repeat: 16, yoyo: true }));
  useGSAP(() => {
    setInterval(() => {
      tl.current
        .to(ref.current, {
          rotateZ: 2,
          duration: 0.04,
        })
        .to(ref.current, {
          rotateZ: -2,
          duration: 0.04,
        })
        .to(ref.current, {
          rotateZ: 0,
          duration: 0.04,
        });
    }, 20000);
  });
  return (
    <Container ref={ref}>
      <Button onClick={onClick}>
        <Reflection />
        {children}
      </Button>
      <Shadow />
    </Container>
  );
});

export default FancyButton;
