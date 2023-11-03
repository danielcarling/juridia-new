import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 15px;
  }

  * {
    font-family: "Lato", sans-serif;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  padding: 1.5rem;
  border-radius: 15px;
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
`;

export const TextAndVideo = styled.div`
  display: flex;
  color: white;
  font-style: italic;
  font-size: 1.25rem;
  line-height: normal;
  font-weight: 900;
  text-shadow: 1px 1px 1px black;
  text-align: justify;

  .text {
    width: 5rem;
  }
`;

export const VideoContainer = styled.div`
  width: 80%;
  margin-top: 1rem;

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
`;
