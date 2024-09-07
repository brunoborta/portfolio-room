import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr;
  position: fixed;
  top: -16dvh;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  max-height: 15dvh;
  width: 40dvw;
  z-index: 10;

  box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  // Ensure the image doesn't overflow the container
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 100%;
`;

export const Gramophone = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 15px;
`;

export const TopWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  font-size: 1.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;

export const SongTime = styled.p`
  font-size: 0.75rem;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  color: #aaa;
  margin-top: 2px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  font-size: 1.5rem;
  border: none;
  background: #b69fc0;
  border-radius: 50%;
  cursor: pointer;
`;
