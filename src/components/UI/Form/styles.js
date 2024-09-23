import styled from "styled-components";

export const Container = styled.form`
  margin-top: 1rem;
`;

const basicValidationStyles = `
background-size: 1.2rem;
    background-repeat: no-repeat;
    background-position: calc(100% - 1rem) center;
`;

export const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  margin: 0.5rem 0;
  padding: 0 2.5rem 0 1rem;
  border: 2px solid black;
  border-radius: 2rem;
  font-size: medium;
  font-family: "Poppins", sans-serif;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:invalid:not(:placeholder-shown) {
    border-color: firebrick;
    background-image: url(/media/checked_red.png);
    ${basicValidationStyles};
  }
  &:valid {
    background-image: url(/media/checked_green.png);
    ${basicValidationStyles};
  }
  &:focus {
    outline-color: var(--navy-blue);
    outline-width: 2px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 8rem;
  margin: 0.5rem 0;
  padding: 1rem;
  border: 2px solid black;
  border-radius: 2rem;
  font-size: large;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  &:invalid:not(:placeholder-shown) {
    border-color: firebrick;
    background-image: url(/media/checked_red.png);
    ${basicValidationStyles};
  }
  &:valid {
    background-image: url(/media/checked_green.png);
    ${basicValidationStyles};
  }
  &:focus {
    outline-color: var(--navy-blue);
    outline-width: 2px;
  }
`;
