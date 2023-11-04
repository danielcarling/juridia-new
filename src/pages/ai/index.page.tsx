import { ContractHeader } from "@/components/global/ContractHeader";
import { WhatsApp } from "@/components/global/Whatsapp";
import { useEffect, useState } from "react";
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
import { WelcomeModal } from "@/components/ai/WelcomeModal";
import { TitleComponent } from "@/components/global/Title";

export default function ContractImprovement() {
  const [showModal, setShowModal] = useState(false);
  

  useEffect(() => {
    // Verifica se a chave 'FirstUse' já está no localStorage
    const isFirstUse = localStorage.getItem("FirstUse");
    if (isFirstUse) {
      setShowModal(true);
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
            <IaMessage>
              CONTRATO DE DISSOLUÇÃO DE QUOTAS Este contrato de dissolução de
              quotas (doravante denominado "Contrato") é celebrado entre: [Seu
              nome completo e dados de identificação] (doravante denominado
              "Sócio A"), e [Nome completo e dados de identificação do outro
              sócio] (doravante denominado "Sócio B"). OBJETO 1.1 O Sócio A
              concorda em vender e transferir suas [porcentagem]% de quotas
              (doravante denominadas "Quotas") na empresa [nome completo da
              empresa] (doravante denominada "Empresa") para o Sócio B. 1.2 A
              venda e transferência das Quotas serão realizadas mediante o
              pagamento de R$300.000,00 (trezentos mil reais), conforme acordado
              entre as partes. RETIRADA DO NOME FANTASIA 2.1 O Sócio A concorda
              em renunciar a qualquer direito ou interesse relacionado ao nome
              fantasia atualmente utilizado pela Empresa.
            </IaMessage>
            <UserMessage>
              CONTRATO DE DISSOLUÇÃO DE QUOTAS Este contrato de dissolução de
              quotas (doravante denominado "Contrato") é celebrado entre: [Seu
              nome completo e dados de identificação] (doravante denominado
              "Sócio A"), e [Nome completo e dados de identificação do outro
              sócio] (doravante denominado "Sócio B"). OBJETO
            </UserMessage>
            <IaMessage>
              CONTRATO DE DISSOLUÇÃO DE QUOTAS Este contrato de dissolução de
              quotas (doravante denominado "Contrato") é celebrado entre: [Seu
              nome completo e dados de identificação] (doravante denominado
              "Sócio A"), e [Nome completo e dados de identificação do outro
              sócio] (doravante denominado "Sócio B"). OBJETO 1.1 O Sócio A
              concorda em vender e transferir suas [porcentagem]% de quotas
              (doravante denominadas "Quotas") na empresa [nome completo da
              empresa] (doravante denominada "Empresa") para o Sócio B. 1.2 A
              venda e transferência das Quotas serão realizadas mediante o
              pagamento de R$300.000,00 (trezentos mil reais), conforme acordado
              entre as partes. RETIRADA DO NOME FANTASIA 2.1 O Sócio A concorda
              em renunciar a qualquer direito ou interesse relacionado ao nome
              fantasia atualmente utilizado pela Empresa.
            </IaMessage>
            <UserMessage>
              CONTRATO DE DISSOLUÇÃO DE QUOTAS Este contrato de dissolução de
              quotas (doravante denominado "Contrato") é celebrado entre: [Seu
              nome completo e dados de identificação] (doravante denominado
              "Sócio A"), e [Nome completo e dados de identificação do outro
              sócio] (doravante denominado "Sócio B"). OBJETO
            </UserMessage>
            <IaMessage>
              CONTRATO DE DISSOLUÇÃO DE QUOTAS Este contrato de dissolução de
              quotas (doravante denominado "Contrato") é celebrado entre: [Seu
              nome completo e dados de identificação] (doravante denominado
              "Sócio A"), e [Nome completo e dados de identificação do outro
              sócio] (doravante denominado "Sócio B"). OBJETO 1.1 O Sócio A
              concorda em vender e transferir suas [porcentagem]% de quotas
              (doravante denominadas "Quotas") na empresa [nome completo da
              empresa] (doravante denominada "Empresa") para o Sócio B. 1.2 A
              venda e transferência das Quotas serão realizadas mediante o
              pagamento de R$300.000,00 (trezentos mil reais), conforme acordado
              entre as partes. RETIRADA DO NOME FANTASIA 2.1 O Sócio A concorda
              em renunciar a qualquer direito ou interesse relacionado ao nome
              fantasia atualmente utilizado pela Empresa.
            </IaMessage>
            <UserMessage>
              CONTRATO DE DISSOLUÇÃO DE QUOTAS Este contrato de dissolução de
              quotas (doravante denominado "Contrato") é celebrado entre: [Seu
              nome completo e dados de identificação] (doravante denominado
              "Sócio A"), e [Nome completo e dados de identificação do outro
              sócio] (doravante denominado "Sócio B"). OBJETO
            </UserMessage>
            <IaMessage>
              CONTRATO DE DISSOLUÇÃO DE QUOTAS Este contrato de dissolução de
              quotas (doravante denominado "Contrato") é celebrado entre: [Seu
              nome completo e dados de identificação] (doravante denominado
              "Sócio A"), e [Nome completo e dados de identificação do outro
              sócio] (doravante denominado "Sócio B"). OBJETO 1.1 O Sócio A
              concorda em vender e transferir suas [porcentagem]% de quotas
              (doravante denominadas "Quotas") na empresa [nome completo da
              empresa] (doravante denominada "Empresa") para o Sócio B. 1.2 A
              venda e transferência das Quotas serão realizadas mediante o
              pagamento de R$300.000,00 (trezentos mil reais), conforme acordado
              entre as partes. RETIRADA DO NOME FANTASIA 2.1 O Sócio A concorda
              em renunciar a qualquer direito ou interesse relacionado ao nome
              fantasia atualmente utilizado pela Empresa.
            </IaMessage>
          </ChatBody>
          <ChatFooter>
            <div className="send-message">
              <input type="text" placeholder="Escreva sua mensagem" />
              <button onClick={() => setShowModal(true)}>
                <img src="/sendIcon.svg" alt="" />
              </button>
            </div>
            {windowDimension(1024) && <div className="bottom-bar" />}
          </ChatFooter>
        </ChatContainer>
      </Main>
      <WhatsApp />
      <WelcomeModal show={showModal} onHide={() => setShowModal(false)} />
    </Container>
  );
}
