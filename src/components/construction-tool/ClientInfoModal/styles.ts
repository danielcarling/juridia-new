import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  & * {
    font-family: "Lato", sans-serif;
  }

  .modal-content {
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  padding: 1.5rem 2rem;
  border-radius: 10px;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    img {
      width: 6.5rem;
      height: auto;
    }

    svg {
      width: 24.75rem;
    }
  }
`;

export const Title = styled.h1`
  position: relative;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 900;
  color: white;
  text-shadow: 1px 1px 1px black;
  margin: 2rem 0;

  .line {
    position: absolute;
    left: 0;
    bottom: -1rem;
    height: 0.25rem;
    width: 5rem;
    background-color: ${({ theme }) => theme.color.primary_100};
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  justify-items: center;
  justify-content: center;

  @media (min-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 20rem;

  label {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 900;
    color: white;
    text-shadow: 1px 1px 1px black;
  }

  input {
    background-color: ${({ theme }) => theme.color.primary_100};
    border: 0;
    border-radius: 5px;
    padding: 0.5rem;
    font-weight: 700;
    width: 18rem;
    color: white;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  @media (min-width: 991px) {
    flex-direction: row;
  }
`;

export const BackButton = styled.button`
  font-size: 1.5rem;
  color: white;
  font-weight: bold;
  font-style: italic;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.primary_100};
  border-radius: 10px;
  padding: 1rem 0;
  width: 12rem;
  transition: 0.3s;

  @media (min-width: 1200px) {
    width: 18.75rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.secondary_100_hover};
  }
`;

export const NextButton = styled(BackButton)`
  color: ${({ theme }) => theme.color.secondary_100};
  background-color: ${({ theme }) => theme.color.primary_100};

  &:hover {
    background-color: ${({ theme }) => theme.color.primary_100};
    opacity: 0.9;
  }
`;
