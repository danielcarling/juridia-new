import { IaMessage } from "@/components/construction-tool/IaMessage";
import { ContractHeader } from "@/components/global/ContractHeader";
import { Select } from "@/components/global/Select";
import { Subtitle } from "@/components/global/Subtitle";
import { TitleComponent } from "@/components/global/Title";
import { WhatsApp } from "@/components/global/Whatsapp";
import {
  BuildContract,
  CaseDescription,
  CaseOptions,
  ChatBody,
  ChatContainer,
  ChatFooter,
  ChatHeader,
  ClientDataButton,
  Container,
  Main,
  PageTitle,
  SelectGroup,
} from "./styles";
import { UserMessage } from "@/components/construction-tool/UserMessage";
import { useState } from "react";
import { ClientInfoModal } from "@/components/construction-tool/ClientInfoModal";
import { AreaOptions, InterestOptions, ThemesOptions } from "@/utils/constants";
import { useRouter } from "next/router";
import { 
  handleClientDataSubmit,handleApiCall, handleStartConversation, handleUserMessageSubmit,StartMessage, handleReloadData, handleCreatePetition, handleTypingComplete  } from './ia';
export default function ConstructionTool() {
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();
  const [reload, setReload] = useState(false);
  const [areaResponse, setAreaResponse] = useState("");
  const [interestResponse, setInterestResponse] = useState("");
  const [themeResponse, setThemeResponse] = useState("");
  const [client_data, setClient_data] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([...StartMessage]);
  const [userMessage, setUserMessage] = useState("");
  const selectValues = ["Contrato", "Contrato", "Contrato"];
  const [selectedValue, setSelectedValue] = useState("selecione uma opção")
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault(); // Evita quebra de linha no input
      handleUserMessageSubmit( userMessage, setMessages, setUserMessage,handleApiCall, messages,setIsLoading); // Chama a função de envio de mensagem
    }
  }
  return (
    <Container>
      <ContractHeader />
      <Main>
        <PageTitle>
          <TitleComponent content="Ferramenta de Construção" />
        </PageTitle>
        <CaseOptions>
          <SelectGroup>
            <Subtitle content="1 - Escolha a área do Direito:" />
            <Select  
              values={AreaOptions}
              selectedValue={areaResponse}
              setSelectedValue={setAreaResponse}
            />
          </SelectGroup>
          <SelectGroup>
            <Subtitle content="2 - Escolha o Tema a ser Trabalhado:" />
            <Select 
              values={ThemesOptions[areaResponse as keyof typeof ThemesOptions] ||[]}
              selectedValue={themeResponse}
              setSelectedValue={setThemeResponse} 
            />
          </SelectGroup>
          <SelectGroup>
            <Subtitle content="3 - Escolha o interesse:" />
            <Select 
              values={InterestOptions} 
              selectedValue={interestResponse}
              setSelectedValue={setInterestResponse} 
            />
          </SelectGroup>
          <SelectGroup>
            <Subtitle content="4 - Informe os Dados do Cliente:" />

            <ClientDataButton onClick={() => setModalShow(true)}>
              <img src="/construction-tool/formPaper.svg" alt="" />
              <strong>Preencher Dados do Cliente</strong>
            </ClientDataButton>
          </SelectGroup>
        </CaseOptions>

        <CaseDescription>
          <div className="subtitle">
            <Subtitle content="5 - Informe Detalhes do caso do seu Cliente:" />
          </div>
          <ChatContainer>
            <ChatHeader>
              <img src="/juridiaLogo.svg" alt="" />
              <p>
                “Fale comigo como se estivesse falando com um colega Advogado,
                pode ser bem detalhista, coloque os anseios da petição,
                lembre-se que quanto mais informações eu tiver, mais fácil é
                para termos um resultado excelente”
              </p>
            </ChatHeader>
            <ChatBody>
            {messages
                    // .filter((item: any) => item.role !== "system")
                    // .filter((item: any, index) => index >= 3) 
                    .map((item: any, index: any) => (
                      <>
                      {item.role === "assistant" ? (
                        <>
                          <IaMessage message={item.content}/>
                        </>
                      ) : (
                        <>
                          <UserMessage message={item.content}/>
                        </>
                      )}
                      </>
                        ))}
            </ChatBody>
            <ChatFooter>
              <input type="text" />
              <button 
                onClick={() => handleUserMessageSubmit( userMessage, setMessages, setUserMessage,handleApiCall, messages,setIsLoading)}
              >
                <img src="/sendIcon.svg" alt="" />
              </button>
            </ChatFooter>
          </ChatContainer>
        </CaseDescription>
        <BuildContract>
          <button>Começar Construção</button>
        </BuildContract>
      </Main>
      <WhatsApp />
      <ClientInfoModal show={modalShow} onHide={() => setModalShow(false)}
        onClientDataSubmit={(data: any) =>
          handleClientDataSubmit(
            data,
            areaResponse,
            interestResponse,
            themeResponse,
            client_data,
            setReload,
            setClient_data,
            setMessages
          )
        }
      />
    </Container>
  );
}
