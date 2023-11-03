import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 20px;
  }

  * {
    font-family: "Lato", sans-serif;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.secondary_100};
  background-image: url("/ai/modalBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;

  img {
    width: 4.375rem;
  }

  .svg {
    width: 8.125rem;
  }

  @media (min-width: 991px) {
    margin-left: 40%;
  }
`;

export const TextAndVideo = styled.div`
  /* display: flex; */
  color: white;
  font-style: italic;
  font-size: 1.25rem;
  line-height: normal;
  font-weight: 900;
  text-shadow: 1px 1px 1px black;
  text-align: justify;

  .text {
    /* width: 5rem; */
  }

  @media (min-width: 991px) {
    display: flex;

    .text {
      font-size: 1.5rem;
      align-self: center;
      width: 40%;
    }
  }
`;

export const VideoContainer = styled.div`
  margin: 1rem auto 0;
  .iframe-container {
    position: relative;
    overflow: hidden;
    padding-bottom: 56.25%;
  }

  iframe {
    border-radius: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 991px) {
    margin: 0 auto;
    width: 55%;
  }
`;

export const CheckBoxGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin: 1rem 0 3rem;

  label {
    font-size: 1.3rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  gap: 1rem;

  @media (min-width: 991px) {
    flex-direction: row;
    gap: 3rem;
  }
`;

export const Button1 = styled.button`
  width: 16rem;
  padding: 0.5rem 0;
  background-color: white;
  border: 1px solid #1d1f2e;
  color: #1d1f2e;
  font-style: italic;
  font-weight: 900;
  border-radius: 75px;
  transition: 0.3s;

  &:hover {
    background-color: lightgray;
  }
`;

export const Button2 = styled(Button1)`
  background-color: transparent;

  &:hover {
    background-color: rgba(173, 143, 88, 0.7);
  }
`;
