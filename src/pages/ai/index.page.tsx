import { ContractHeader } from "@/components/global/ContractHeader";
import { WhatsApp } from "@/components/global/Whatsapp";
import { useState } from "react";
import {
  ChatBody,
  ChatContainer,
  ChatFooter,
  Container,
  IaMessage,
  Main,
  UserMessage,
} from "./styles";
import { windowDimension } from "@/utils/windowDimensions";
import { useChatFunctions } from "./ia";

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

  return (
    <Container>
      <ContractHeader />
      <Main>
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
            {windowDimension(1024) && (
              <div className="bottom-bar" />
            )}
          </ChatFooter>
        </ChatContainer>
      </Main>
      <WhatsApp />
    </Container>
  );
}
