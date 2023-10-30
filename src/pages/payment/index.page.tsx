import { RegisterAccountHeader } from "@/components/register-account/Header";
import { CreditCardSvg } from "../../../public/payment/CreditCardIcon";
import {
  Container,
  CopyPastePix,
  FinishPix,
  Main,
  NextStep,
  PayOptionCard,
  PayOptionsContainer,
  PaymentContainer,
  PaymentHeader,
  PixContainer,
  QrCode,
  SalesArtContainer,
} from "./styles";
import { PixSvg } from "../../../public/payment/PixCardIcon";
import { useEffect, useState } from "react";
import { Footer } from "@/components/register-account/Footer";
import { CreditCard } from "@/components/payment/CreditCard";
import { scrollToElement } from "@/utils/scrollToElement";
import { CardStep1 } from "@/components/payment/CardStep1";

export default function Payment() {
  const [payOption, setPayOption] = useState("pix");
  const [cardStep, setCardStep] = useState(1);

  useEffect(() => {
    scrollToElement("payment");
  }, []);

  return (
    <Container>
      <RegisterAccountHeader />
      <Main>
        <SalesArtContainer>
          <img src="/payment/salesArt.png" alt="" />
        </SalesArtContainer>

        <PaymentContainer id="payment">
          <PaymentHeader>
            <strong>Realizar Assinatura</strong>
            <span>Finalize sua Assinatura e comece a usar</span>
          </PaymentHeader>
          <PayOptionsContainer>
            <PayOptionCard
              selected={payOption === "pix"}
              onClick={() => setPayOption("pix")}
            >
              <PixSvg />
              <strong>PIX</strong>
            </PayOptionCard>
            <PayOptionCard
              selected={payOption === "creditCard"}
              onClick={() => setPayOption("creditCard")}
            >
              <CreditCardSvg />
              <strong>Cartão</strong>
            </PayOptionCard>
          </PayOptionsContainer>
          {payOption === "pix" && (
            <PixContainer>
              <QrCode>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png"
                  alt=""
                />
              </QrCode>

              <CopyPastePix>
                <span>Clique aqui para</span>
                <strong>Copiar Pix Copia e Cola</strong>
              </CopyPastePix>

              <FinishPix>
                <span>Após efetuar o Pagamento</span>
                <strong>Clique aqui e Prossiga</strong>
              </FinishPix>
            </PixContainer>
          )}

          {payOption === "creditCard" && (
            <>
              {cardStep === 1 ? (
                <>
                  <CardStep1 />
                  <NextStep>
                    <button>Próximo</button>
                  </NextStep>
                </>
              ) : (
                <div>teste</div>
              )}
            </>
          )}
        </PaymentContainer>
      </Main>
      <Footer />
    </Container>
  );
}
