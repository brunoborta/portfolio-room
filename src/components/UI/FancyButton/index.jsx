import { forwardRef, useEffect } from "react";
import { Button, Reflection, Container, Shadow } from "./styles";
import gsap from "gsap";

const FancyButton = forwardRef(function Butt({ children, onClick }, ref) {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: 16, yoyo: true });
    setInterval(() => {
      tl.to(ref.current, {
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
    () => tl.kill();
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
