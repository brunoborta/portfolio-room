import { Title } from "./styles";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

// Register the ScrambleText plugin
gsap.registerPlugin(ScrambleTextPlugin);

const Interface = () => {
  return (
    <>
      <Title>Testeeeeee</Title>
    </>
  );
};

export default Interface;
