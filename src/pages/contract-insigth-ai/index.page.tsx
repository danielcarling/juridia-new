import { ContractHeader } from "@/components/global/ContractHeader";
import { WhatsApp } from "@/components/global/Whatsapp";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Balancer from "react-wrap-balancer";
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
import { useChatFunctions } from "./ai";
import { WelcomeModal } from "@/components/ai/WelcomeModal";
import { TitleComponent } from "@/components/global/Title";
import { sanitizeAndFormatText } from "@/utils/masks";
import { useRouter } from "next/router";
import { authGetAPI, loginVerifyAPI } from "@/lib/axios";
export default function ContractInsightAi() {
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
  } = useChatFunctions();

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
              .filter((item: any, index: any) => index >= 5) // Filtrar mensagens com role diferente de "system"
              .map((item: any, index: any) => (
                <>
                  {item.role === "assistant" ? (
                    <IaMessage style={{ whiteSpace: "pre-wrap" }}>
                      <ReactMarkdown
                        components={{
                          h1: ({ node, ...props }) => (
                            <h1 style={{ fontSize: "1.5em" }} {...props} />
                          ),
                          h2: ({ node, ...props }) => (
                            <h2 style={{ fontSize: "1.3em" }} {...props} />
                          ),
                        }}
                      >
                        {item.content}
                      </ReactMarkdown>
                    </IaMessage>
                  ) : (
                    <UserMessage>{item.content}</UserMessage>
                  )}
                </>
              ))}
          </ChatBody>
          <ChatFooter>
            <div className="send-message">
              <input
                type="text"
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
