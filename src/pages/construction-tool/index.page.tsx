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

export default function ConstructionTool() {
  const selectValues = ["Contrato", "Contrato", "Contrato"];

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
            <Select values={selectValues} />
          </SelectGroup>
          <SelectGroup>
            <Subtitle content="2 - Escolha o Tema a ser Trabalhado:" />
            <Select values={selectValues} />
          </SelectGroup>
          <SelectGroup>
            <Subtitle content="3 - Escolha o interesse:" />
            <Select values={selectValues} />
          </SelectGroup>
          <SelectGroup>
            <Subtitle content="4 - Informe os Dados do Cliente:" />

            <ClientDataButton>
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
              <IaMessage
                message="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus nostrum debitis ullam ex sapiente corporis
                quibusdam ad placeat exercitationem facilis porro inventore
                perspiciatis ut rem, reiciendis sit incidunt esse sint!"
              />

              <UserMessage
                message="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus nostrum debitis ullam ex sapiente corporis
                quibusdam ad placeat exercitationem facilis porro inventore
                perspiciatis ut rem, reiciendis sit incidunt esse sint!"
              />
              <IaMessage
                message="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus nostrum debitis ullam ex sapiente corporis
                quibusdam ad placeat exercitationem facilis porro inventore
                perspiciatis ut rem, reiciendis sit incidunt esse sint!"
              />

              <UserMessage
                message="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Necessitatibus nostrum debitis ullam ex sapiente corporis
                quibusdam ad placeat exercitationem facilis porro inventore
                perspiciatis ut rem, reiciendis sit incidunt esse sint!"
              />
            </ChatBody>
            <ChatFooter>
              <input type="text" />
              <button>
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
    </Container>
  );
}
