import { ContractHeader } from "@/components/global/ContractHeader";
import { TitleComponent } from "@/components/global/Title";
import { WhatsApp } from "@/components/global/Whatsapp";
import {
  CaseDescription,
  CaseOptions,
  ChatContainer,
  ChatHeader,
  ClientDataButton,
  Container,
  Main,
  PageTitle,
  SelectGroup,
} from "./styles";
import { Subtitle } from "@/components/global/Subtitle";
import { Select } from "@/components/global/Select";

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
          </ChatContainer>
        </CaseDescription>
      </Main>
      <WhatsApp />
    </Container>
  );
}
