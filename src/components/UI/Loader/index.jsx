import { useEffect, useRef } from "react";
import { Circle, Path, Spinner, Success } from "./styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEmailSuccess } from "../../../hooks/useEmailSuccess";

export const Loader = () => {
  const spinner = useRef();
  const { emailSuccess } = useEmailSuccess();

  useEffect(() => {
    if (emailSuccess) {
    }
  }, [emailSuccess]);

  return (
    <>
      <Success xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
        <Circle cx="26" cy="26" r="25" fill="none" />
        <Path
          className="checkmark__check"
          fill="none"
          d="M14.1 27.2l7.1 7.2 16.7-16.8"
        />
      </Success>
      {/* <Spinner
        ref={spinner}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
      </Spinner> */}
    </>
  );
};
