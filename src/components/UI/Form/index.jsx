import FancyButton from "../FancyButton";
import { PiSpinnerBallFill } from "react-icons/pi";
import { Container, Input, TextArea } from "./styles";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Loader } from "../Loader";
import { useEmailSuccess } from "../../../hooks/useEmailSuccess";

const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const { setEmailSuccess } = useEmailSuccess();

  const onSubmit = async (data) => {
    const params = {
      from_name: data.name,
      email: data.email,
      message: data.message,
    };
    setLoading(true);
    // const response = await emailjs.send(
    //   import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //   import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //   params,
    //   import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    // );
    // if (response.status === 200) {
    setEmailSuccess(true);
    // } else {
    //   console.log("error");
    // }
    setTimeout(() => {
      reset();
      setLoading(false);
    }, 3000);
  };
  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Input type="text" placeholder="Name" {...register("name")} />
      <Input type="email" {...register("email")} placeholder="Email" />
      <TextArea placeholder="Message" {...register("message")} />
      <FancyButton type="submit" marginTop="0">
        {loading ? <Loader /> : "Send me!"}
      </FancyButton>
    </Container>
  );
};

export default Form;
