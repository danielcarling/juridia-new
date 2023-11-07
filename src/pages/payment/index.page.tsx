import { RegisterAccountHeader } from "@/components/register-account/Header";
import { CreditCardSvg } from "../../../public/payment/CreditCardIcon";
import {
  Container,
  CopyPastePix,
  EndPurchase,
  FinishPix,
  GeneratePix,
  Main,
  NextStep,
  PayOptionCard,
  PayOptionsContainer,
  PaymentContainer,
  PaymentHeader,
  PixContainer,
  ProgressBar,
  QrCode,
  SalesArtContainer,
} from "./styles";
import { PixSvg } from "../../../public/payment/PixCardIcon";
import { useEffect, useState } from "react";
import { Footer } from "@/components/register-account/Footer";
import { scrollToElement } from "@/utils/scrollToElement";
import { CardStep1 } from "@/components/payment/CardStep1";
import { CardStep2 } from "@/components/payment/CardStep2";

export default function Payment() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const [payOption, setPayOption] = useState("pix");
  const [pixStep, setPixStep] = useState(1);
  const [cardStep, setCardStep] = useState(1);
  const [progressBarStep, setProgressBarStep] = useState(1);

  useEffect(() => {
    scrollToElement("payment");
  }, []);

  useEffect(() => {
    if (payOption === "pix") {
      setProgressBarStep(pixStep);
    } else if (payOption === "creditCard") {
      setProgressBarStep(cardStep);
    }
  }, [payOption, pixStep, cardStep]);

  return (
    <Container>
      <RegisterAccountHeader />
      <Main>
        <ProgressBar step={progressBarStep} />
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
            <>
              {pixStep === 1 ? (
                <GeneratePix onClick={() => setPixStep(2)}>
                  <span>Clique aqui para</span>
                  <strong>Gerar o Pix Copia e Cola</strong>
                </GeneratePix>
              ) : (
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
            </>
          )}

          {payOption === "creditCard" && (
            <>
              {cardStep === 1 ? (
                <>
                  <CardStep1
                    {...{
                      cardName,
                      setCardName,
                      cardNumber,
                      setCardNumber,
                      validity,
                      setValidity,
                      securityCode,
                      setSecurityCode,
                    }}
                  />
                  <NextStep onClick={() => setCardStep(2)}>
                    <button>Próximo</button>
                  </NextStep>
                </>
              ) : (
                <>
                  <CardStep2 />
                  <EndPurchase>
                    <button>Finalizar Compra</button>
                  </EndPurchase>
                </>
              )}
            </>
          )}
        </PaymentContainer>
      </Main>
      <Footer />
    </Container>
  );
}
