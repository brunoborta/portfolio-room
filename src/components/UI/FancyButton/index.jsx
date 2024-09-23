import { forwardRef } from "react";
import { Button, Reflection, Container, Shadow } from "./styles";

const FancyButton = forwardRef(function Butt(
  { children, onClick, isVisible = true, marginTop = "2rem", type = "button" },
  ref
) {
  return (
    <Container $isVisible={isVisible} $marginTop={marginTop} ref={ref}>
      <Button onClick={onClick} type={type}>
        <Reflection />
        {children}
      </Button>
      <Shadow />
    </Container>
  );
});

export default FancyButton;
