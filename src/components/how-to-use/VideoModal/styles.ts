import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const StyledModal = styled(Modal)`
  .modal-content {
    border-radius: 50px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  border: 0;
  background: transparent;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.secondary_100};
  padding: 1.5rem;
  border-radius: 50px;
`;

export const IframeContainer = styled.div`
  position: relative;
  margin-top: 2rem;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const FeedbackAndContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.25rem;
  align-items: center;
  gap: 1rem;
`;

export const Feedback = styled.div`
  .buttons-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

export const Contact = styled.div``;

export const DislikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.625rem;
  height: 3.625rem;
  background-color: #d30000;
  border: 1px solid white;
  border-radius: 50%;
  transition: 0.2s;
`;

export const LikeButton = styled(DislikeButton)`
  background-color: #20b038;
  border: 1px solid black;
`;
