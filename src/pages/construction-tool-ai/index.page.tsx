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
import { handleApiCall, useChatFunctions } from "./ai2";
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
    handleKeyDown,
    startIndex,
    handleCreatePetition,
  } = useChatFunctions();

  useEffect(() => {
    handleCreatePetition;
    console.log('chamandoapi')
  }, []);
 
  return (
    <Container>
      <ContractHeader routerPath="home" />
      <Main>
        {!windowDimension(1024) && (
          <PageTitle>
            <TitleComponent content="Inteligência Artificial" />
          </PageTitle>
        )}
        <ChatContainer>
          <ChatBody>
          {messages
                    .filter((item: any, index: any) => index >= startIndex+1) // Filtrar mensagens com role diferente de "system"
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
                <button onClick={()=>handleCreatePetition()}/>
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
    </Container>
  );
}
