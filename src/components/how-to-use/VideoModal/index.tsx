import { BackIconSvg } from "../../../../public/BackIcon";
import { ModalTitle } from "../ModalTitle";
import {
  BackButton,
  CloseButton,
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
  videoUrl?: string;
}

export function TutorialModal({ show, onHide, videoUrl }: ModalProps) {
  return (
    <StyledModal show={show} onHide={onHide} size="xl">
      <Content>
        <CloseButton onClick={onHide}>
          <BackIconSvg />
        </CloseButton>
        <ModalTitle
          content="Ferramenta de Construção"
          style={{ marginLeft: "3rem" }}
        />

        <IframeContainer>
          <iframe
            width="560"
            height="315"
            src={videoUrl}
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
            <button>
              <img src="/whatsLogo.svg" alt="" />
              <strong>Fale com nosso Time</strong>
            </button>
          </Contact>
        </FeedbackAndContact>
        <BackButton onClick={onHide}>
          <button>Voltar</button>
        </BackButton>
      </Content>
    </StyledModal>
  );
}
