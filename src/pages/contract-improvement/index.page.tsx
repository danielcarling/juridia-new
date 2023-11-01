import { ContractHeader } from "@/components/global/ContractHeader";
import {
  Container,
  ContractDetails,
  ContractForm,
  ExtraInfo,
  Main,
  SelectContract,
  SolutionInfo,
  SubmitContract,
} from "./styles";
import { WhatsApp } from "@/components/global/Whatsapp";
import { Subtitle } from "@/components/global/Subtitle";
import { TitleComponent } from "@/components/global/Title";
import { Select } from "@/components/global/Select";
import { useState } from "react";

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
        <ContractForm>
          <TitleComponent content="Melhoria de Contratos" />
          <Subtitle
            content="1 - Sobre qual área do Direito é o contrato?"
            style={{ margin: "2rem 0" }}
          />

          <Select values={selectValues} />

          <Subtitle
            content="2 - Descreva os detalhes do contrato:"
            style={{ margin: "2rem 0 1rem" }}
          />

          <ContractDetails>
            <textarea placeholder="Descreva seu contrato aqui..." />
          </ContractDetails>

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

          <SubmitContract>
            <button>Melhorar Contrato</button>
          </SubmitContract>
        </ContractForm>

        <ExtraInfo>
          <Subtitle
            content="1 - Mais informações sobre essa solução:"
            variant="secondary"
            style={{ margin: "2rem 0 1.5rem" }}
          />

          <SolutionInfo>

          </SolutionInfo>
        </ExtraInfo>
      </Main>
      <WhatsApp />
    </Container>
  );
}
