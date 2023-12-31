import { ContractHeader } from "@/components/global/ContractHeader";
import { WhatsApp } from "@/components/global/Whatsapp";
import { useEffect, useRef, useState } from "react";
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
import { authGetAPI, loginVerifyAPI } from "@/lib/axios";
import { useRouter } from "next/router";

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
    receivedChunks,
    handleKeyDown,
  } = useChatFunctions();
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  async function handleVerify() {
    const connect = await loginVerifyAPI();

    if (connect !== 200) {
      alert("Login necessário");
      return router.push("/login");
    } else if (connect === 200) {
      const connect2 = await authGetAPI("/user/validation");
      if (connect2.status !== 200) {
        alert("Assinatura necessária");
        return router.push("/payment");
      }
    }
  }

  useEffect(() => {
    handleVerify();
    if (localStorage.getItem("DontShowAgain") === null) {
      localStorage.setItem("DontShowAgain", "false");
    }
    if (localStorage.getItem("DontShowAgain") === "false") {
      return setShowModal(true);
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
                      <IaMessage>{item.content}</IaMessage>
                    </>
                  ) : (
                    <>
                      <UserMessage>
                        <pre>{item.content}</pre>
                      </UserMessage>
                    </>
                  )}
                  {/* {isLoading && (
                    <IaMessage>
                      <pre>...</pre>
                    </IaMessage>
                  )} */}
                </>
              ))}
          </ChatBody>
          <ChatFooter>
            <div className="send-message">
              <textarea
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
      {!windowDimension(1024) && <WhatsApp />}
      <WelcomeModal show={showModal} onHide={() => setShowModal(false)} />
    </Container>
  );
}
