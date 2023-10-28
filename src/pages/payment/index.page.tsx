import { RegisterAccountHeader } from "@/components/register-account/Header";
import { CreditCardSvg } from "../../../public/payment/CreditCardIcon";
import {
  Container,
  Main,
  PayOptionCard,
  PayOptionsContainer,
  PaymentHeader,
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

        {payOption === "pix" && <div>URUBU DO PIX</div>}
        {payOption === "creditCard" && <CreditCard />}
      </Main>
      <Footer />
    </Container>
  );
}
