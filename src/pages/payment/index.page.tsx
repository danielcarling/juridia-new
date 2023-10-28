import { RegisterAccountHeader } from "@/components/register-account/Header";
import { CreditCardSvg } from "../../../public/payment/CreditCardIcon";
import {
  Container,
  CopyPastePix,
  CreditCardForm,
  FinishPix,
  FormGroup,
  Main,
  PayOptionCard,
  PayOptionsContainer,
  PaymentContainer,
  PaymentHeader,
  PixContainer,
  QrCode,
  SalesArtContainer,
} from "./styles";
import { PixSvg } from "../../../public/payment/PixCardIcon";
import { useState } from "react";
import { Footer } from "@/components/register-account/Footer";
import { CreditCard } from "@/components/payment/CreditCard";

export default function Payment() {
  const [payOption, setPayOption] = useState("pix");

  return (
    <Container>
      <RegisterAccountHeader />
      <Main>
        <SalesArtContainer>
          <img src="/payment/salesArt.png" alt="" />
        </SalesArtContainer>

        <PaymentContainer>
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
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem 0",
                }}
              >
                <CreditCard />
              </div>
              <CreditCardForm>
                <FormGroup>
                  <label htmlFor="name">Nome do Cartão</label>
                  <input
                    type="text"
                    id="cardName"
                    placeholder="Digite o nome do cartão"
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="cardNumber">Número do Cartao</label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="Digite o número do cartao"
                  />
                </FormGroup>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <FormGroup className="validityAndCVC">
                    <label htmlFor="validity">Data de vencimento</label>
                    <input
                      type="text"
                      id="validity"
                      placeholder="MM/AA"
                      className="validity"
                    />
                  </FormGroup>
                  <FormGroup className="validityAndCVC">
                    <label htmlFor="securityCode">CVC</label>
                    <input
                      type="text"
                      id="securityCode"
                      placeholder="XXX"
                      className="securityCode"
                    />
                  </FormGroup>
                </div>
              </CreditCardForm>
            </>
          )}
        </PaymentContainer>
      </Main>
      <Footer />
    </Container>
  );
}
