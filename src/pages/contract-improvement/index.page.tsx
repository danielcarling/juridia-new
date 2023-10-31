import { ContractHeader } from "@/components/global/ContractHeader";
import { Container, Main } from "./styles";
import { WhatsApp } from "@/components/global/Whatsapp";
import { TitleComponent } from "@/components/contract-improvement/Title";
import { Subtitle } from "@/components/contract-improvement/Title";

export default function ContractImprovement() {
  return (
    <Container>
      <ContractHeader />
      <Main>
        <TitleComponent content="Melhoria de Contratos" />
        <Subtitle content="Sobre qual área do Direito é o contrato?" />
      </Main>
      <WhatsApp />
    </Container>
  );
}
