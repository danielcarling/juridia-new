import { ContractHeader } from "@/components/global/ContractHeader";
import { WhatsApp } from "@/components/global/Whatsapp";
import { useEffect, useState } from "react";
import {
  ChatBody,
  ChatContainer,
  ChatFooter,
  Container,
  IaMessage,
  Main,
  PageTitle,
  UserMessage,
} from "./styles";
import { windowDimension } from "@/utils/windowDimensions";
import { useChatFunctions } from "./ia";
import { WelcomeModal } from "@/components/ai/WelcomeModal";
import { TitleComponent } from "@/components/global/Title";
export default function ContractImprovement() {
  const selectValues = ["Contrato", "Contrato", "Contrato"];
  const [fileName, setFileName] = useState("");
  const {
    messages,
    userMessage,
    isLoading,
    setUserMessage,
    handleUserMessageSubmit,
    handleTypingComplete,
    handleKeyDown
  } = useChatFunctions();
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    // Verifica se a chave 'FirstUse' já está no localStorage
    const isFirstUse = localStorage.getItem("FirstUse");
    if (isFirstUse) {
      setShowModal(true);
    }
  }, []);

  return (
    <Container>
      <ContractHeader />
      <Main>
        {!windowDimension(1024) && (
          <PageTitle>
            <TitleComponent content="Inteligência Artificial" />
          </PageTitle>
        )}
        <ChatContainer>
          <ChatBody>
          {messages
                    .filter((item: any, index: any) => index >= 2) // Filtrar mensagens com role diferente de "system"
                    .map((item: any, index: any) => (
                      <>
                      {item.role === "assistant" ? (
                        <>
                          <IaMessage>
                            {item.content}
                          </IaMessage>
                        </>
                      ) : (
                        <>
                          <UserMessage>
                            {item.content}
                          </UserMessage>
                        </>
                      )}
                      </>
                        ))}
          </ChatBody>
          <ChatFooter>
            <div className="send-message">
              <input type="text" 
                value={userMessage}
                onChange={(e: any) => setUserMessage(e.target.value)}
                placeholder={
                  isLoading ? "Gerando Resposta..." : "Digite sua mensagem..."
                }
                onKeyDown={isLoading ? undefined : handleKeyDown} // Desabilita o evento onKeyDown quando isLoading é verdadeiro
                disabled={isLoading}
              />
              <button onClick={handleUserMessageSubmit}>
                <img src="/sendIcon.svg" alt="" />
              </button>
            </div>
            {windowDimension(1024) && <div className="bottom-bar" />}
          </ChatFooter>
        </ChatContainer>
      </Main>
      <WhatsApp />
      <WelcomeModal show={showModal} onHide={() => setShowModal(false)} />
    </Container>
  );
}