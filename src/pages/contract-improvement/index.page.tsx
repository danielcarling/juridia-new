import { ContractHeader } from "@/components/global/ContractHeader";
import { Select } from "@/components/global/Select";
import { Subtitle } from "@/components/global/Subtitle";
import { TitleComponent } from "@/components/global/Title";
import { WhatsApp } from "@/components/global/Whatsapp";
import { useState } from "react";
import {
  Container,
  Content,
  ContractDetails,
  ContractForm,
  ExtraInfo,
  Main,
  PageTitle,
  SelectContract,
  SolutionInfo,
  SubmitContract,
  VideoContainer,
} from "./styles";

export default function ContractImprovement() {
  const selectValues = ["Contrato", "Contrato", "Contrato"];
  const [fileName, setFileName] = useState("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      setFileName(selectedFile.name);
    } else {
      alert("Por favor, selecione um arquivo PDF.");
    }
  }

  return (
    <Container>
      <ContractHeader />
      <Main>
        <PageTitle>
          <TitleComponent content="Melhoria de Contratos" />
        </PageTitle>
        <Content>
          <ContractForm>
            <div>
              <Subtitle
                content="1 - Sobre qual área do Direito é o contrato?"
                style={{ marginBottom: "2rem" }}
              />
              <Select values={selectValues} />
            </div>

            <div>
              <Subtitle
                content="2 - Descreva os detalhes do contrato:"
                style={{ margin: "2rem 0 1rem" }}
              />
              <ContractDetails>
                <textarea placeholder="Descreva seu contrato aqui..." />
              </ContractDetails>
            </div>

            <div>
              <Subtitle
                content="3 - Insira aqui seu contrato:"
                style={{ margin: "2rem 0 1rem" }}
              />
              <SelectContract>
                <img src="/contract-improvement/file.svg" alt="" />
                <span>Ou</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                  }}
                >
                  <label htmlFor="select-document">Selecionar Documento</label>
                  <input
                    type="file"
                    name="select-document"
                    id="select-document"
                    onChange={handleFileChange}
                  />
                  {fileName && <strong>{fileName}</strong>}
                </div>
              </SelectContract>
            </div>

            <SubmitContract>
              <button>Melhorar Contrato</button>
            </SubmitContract>
          </ContractForm>

          <ExtraInfo>
            <Subtitle
              content="1 - Mais informações sobre essa solução:"
              variant="secondary"
              style={{ marginBottom: "1.5rem" }}
            />

            <SolutionInfo></SolutionInfo>

            <Subtitle
              content="2 - Assista o vídeo abaixo caso tenha alguma dúvida:"
              variant="secondary"
              style={{ margin: "2rem 0 1.5rem" }}
            />

            <div>
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
            </div>
          </ExtraInfo>
        </Content>
      </Main>
      <WhatsApp />
    </Container>
  );
}
