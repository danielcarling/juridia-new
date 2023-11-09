import { ContractHeader } from "@/components/global/ContractHeader";
import { Select } from "@/components/global/Select";
import { Subtitle } from "@/components/global/Subtitle";
import { TitleComponent } from "@/components/global/Title";
import { WhatsApp } from "@/components/global/Whatsapp";
import { useEffect, useState } from "react";
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
import { AreaOptions } from "@/utils/constants";
import { usePdfUpload } from "../../lib/pdfUploader";
import { Spinner } from "react-bootstrap";
import { authGetAPI, loginVerifyAPI } from "@/lib/axios";
import { useRouter } from "next/router";

export default function ContractImprovement() {
  const [fileName, setFileName] = useState("");
  const [areaResponse, setAreaResponse] = useState("Selecione uma opção");
  const { handleUpload, fullText } = usePdfUpload();
  const [loading, setLoading] = useState(false);
  const [aboutContractText, setAboutContractText] = useState("Escreva aqui");
  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile && selectedFile.type === "application/pdf") {
      handleUpload(selectedFile);
      setFileName(selectedFile.name);
    } else {
      alert("Por favor, selecione um arquivo PDF.");
    }
  }
  const [data, setData] = useState<any>("");
  const handleClickImproveContract = async () => {
    setLoading(true); // Ativa o loading
    if (!areaResponse || !aboutContractText || !fullText) {
      console.log(areaResponse, aboutContractText, fullText);
      alert("Preencha todos os campos antes de melhorar o contrato.");
      setLoading(false); // Desativa o loading
      return;
    }
    try {
      localStorage.setItem("areaResponseInsights", JSON.stringify(areaResponse));
      localStorage.setItem("aboutContractTextInsights", JSON.stringify(aboutContractText));
      localStorage.setItem("fullTextInsights", JSON.stringify(fullText));

      setLoading(false);
      router.push('/contract-insigth-ai') // Desativa o loading após receber a resposta
    } catch (error) {
      console.error("Error: " + error);
      setLoading(false); // Desativa o loading em caso de erro
    }
  };

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
        <PageTitle>
          <TitleComponent content="Insights de Contratos" />
        </PageTitle>
        <Content>
          <ContractForm>
            <div>
              <Subtitle
                content="1 - Sobre qual área do Direito é o contrato?"
                style={{ marginBottom: "2rem" }}
              />
              <Select
                values={AreaOptions}
                selectedValue={areaResponse}
                setSelectedValue={setAreaResponse}
              />
            </div>

            <div>
              <Subtitle
                content="2 - Descreva os detalhes do contrato:"
                style={{ margin: "2rem 0 1rem" }}
              />
              <ContractDetails>
                <textarea
                  placeholder="Descreva seu contrato aqui..."
                  value={aboutContractText}
                  onChange={(e: any) => setAboutContractText(e.target.value)}
                />
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
              <button onClick={handleClickImproveContract}>
                Melhorar Contrato
              </button>
            </SubmitContract>
          </ContractForm>

          <ExtraInfo>
            <Subtitle
              content="1 - Mais informações sobre essa solução:"
              variant="secondary"
              style={{ marginBottom: "1.5rem" }}
            />

            <SolutionInfo>
              {loading ? (
                <Spinner /> // Substitua com o componente de spinner desejado
              ) : (
                <>{data}</>
              )}
            </SolutionInfo>

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
