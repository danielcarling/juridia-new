import { ContractHeader } from "@/components/global/ContractHeader";
import { Container, Main } from "./styles";
import { WhatsApp } from "@/components/global/Whatsapp";
import { Subtitle } from "@/components/global/Subtitle";
import { TitleComponent } from "@/components/global/Title";

export default function ContractImprovement() {
  return (
    <Container>
      <ContractHeader />
      <Main>
        <TitleComponent content="Melhoria de Contratos" />
        <Subtitle content="1 - Sobre qual área do Direito é o contrato?" style={{ margin: '2rem 0' }} />
      </Main>
      <WhatsApp />
    </Container>
  );
}
