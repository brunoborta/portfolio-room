import { forwardRef } from "react";
import { Button, Reflection, Container, Shadow } from "./styles";
import { useTheme } from "../../../hooks/useTheme";

const FancyButton = forwardRef(function Butt(
  { children, onClick, isVisible = true, marginTop = "2rem", type = "button" },
  ref
) {
  const { isLight } = useTheme();
  return (
    <Container $isVisible={isVisible} $marginTop={marginTop} ref={ref}>
      <Button onClick={onClick} type={type} $isLight={isLight}>
        <Reflection />
        {children}
      </Button>
      <Shadow $isLight={isLight} />
    </Container>
  );
});

export default FancyButton;
