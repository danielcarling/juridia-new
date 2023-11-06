import { useState } from "react";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import {
  Button1,
  Button2,
  ButtonsContainer,
  CheckBoxGroup,
  Content,
  Header,
  StyledModal,
  TextAndVideo,
  VideoContainer,
} from "./styles";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function WelcomeModal({ show, onHide }: ModalProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  function handleUserClick() {
    if (dontShowAgain) {
      localStorage.setItem("DontShowAgain", "true");
    }
    onHide();
  }

  return (
    <StyledModal show={show} onHide={onHide} size="xl">
      <Content>
        <Header>
          <img src="/juridiaLogo.svg" alt="" />
          <JuridiaTextSvg />
        </Header>

        <TextAndVideo>
          <div className="text">
            <p>
              Seja Muito Bem Vindo à Jurid IA, plataforma desenvolvida com o
              intuito de ser a Melhor Amiga do Advogado(a) e contamos com você
              para Aprimorarmos cada vez mais a Plataforma
            </p>
          </div>
          <VideoContainer>
            <div className="iframe-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/2J7xlDH4QkA?si=-eOeTCPtH7Rq4S2A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </VideoContainer>
        </TextAndVideo>
        <CheckBoxGroup>
          <input
            type="checkbox"
            name="dontShowAgain"
            id="dontShowAgain"
            checked={dontShowAgain}
            onChange={() => setDontShowAgain(!dontShowAgain)}
          />
          <label htmlFor="dontShowAgain">Não ver novamente</label>
        </CheckBoxGroup>

        <ButtonsContainer>
          <Button1>Aprenda como usar</Button1>

          <Button2 onClick={handleUserClick}>Começar a utilizar</Button2>
        </ButtonsContainer>
      </Content>
    </StyledModal>
  );
}
