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
import {  useChatFunctions } from "./ai";
import { WelcomeModal } from "@/components/ai/WelcomeModal";
import { TitleComponent } from "@/components/global/Title";
import Markdown from "react-markdown";
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
    handleCreatePetition();
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
                    .filter((item: any, index: any) => index >= startIndex+3) // Filtrar mensagens com role diferente de "system"
                    .map((item: any, index: any) => (
                      <>
                      {item.role === "assistant" ? (
                        <>
                          <IaMessage>
                            <Markdown components={{ 
                                h1: ({ node, ...props }) => <h1 style={{ fontSize: "1.5em" }} {...props} />,
                                h2: ({ node, ...props }) => <h2 style={{ fontSize: "1.3em" }} {...props} />, 
                                h3: ({ node, ...props }) => <h2 style={{ fontSize: "1.3em" }} {...props} />
                              }}
                            >
                              {item.content}
                            </Markdown>
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
