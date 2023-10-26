import { RegisterAccountHeader } from "@/components/register-account/Header";
import {
  CreditCardSvg
} from "../../../public/payment/CreditCardIcon";
import {
  Container,
  Main,
  PayOptionCard,
  PaymentHeader,
  SalesArtContainer,
} from "./styles";

export default function Payment() {
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

        <PayOptionCard>
          <CreditCardSvg />
          <strong>Cartão</strong>
        </PayOptionCard>
      </Main>
    </Container>
  );
}
