import { ModalTitle } from "../ModalTitle";
import {
  BackButton,
  Contact,
  Content,
  DislikeButton,
  Feedback,
  FeedbackAndContact,
  IframeContainer,
  LikeButton,
  StyledModal,
} from "./styles";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function TutorialModal({ show, onHide }: ModalProps) {
  return (
    <StyledModal show={show} onHide={onHide} size="lg">
      <Content>
        <BackButton onClick={onHide}>
          <img src="/how-to-use/back.svg" alt="" />
        </BackButton>
        <ModalTitle
          content="Ferramenta de Construção"
          style={{ marginLeft: "3rem" }}
        />

        <IframeContainer>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2J7xlDH4QkA?si=-eOeTCPtH7Rq4S2A"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </IframeContainer>

        <FeedbackAndContact>
          <Feedback>
            <ModalTitle content="Esse Vídeo te ajudou?" priority="secondary" />
            <div style={{ display: "flex", gap: "2.5rem", marginTop: "1rem" }}>
              <div className="buttons-container">
                <DislikeButton>
                  <img src="/how-to-use/dislikeIcon.svg" alt="" />
                </DislikeButton>
                <LikeButton>
                  <img src="/how-to-use/likeIcon.svg" alt="" />
                </LikeButton>
              </div>
            </div>
          </Feedback>
          <Contact>
            <ModalTitle
              content="Ficou com alguma dúvida?"
              priority="secondary"
            />
          </Contact>
        </FeedbackAndContact>
      </Content>
    </StyledModal>
  );
}
