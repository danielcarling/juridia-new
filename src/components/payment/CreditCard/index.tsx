import { useEffect } from "react";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { Container, Content, CreditCardInfo } from "./styles";

export function CreditCard() {
  return (
    <Container>
      <div className="logoContainer">
        <img src="/juridiaLogo.svg" alt="" />
      </div>
      <Content>
        <div className="textLogo">
          <JuridiaTextSvg />
        </div>
        <CreditCardInfo>
          <strong>XXXX XXXX XXXX XXXX</strong>
          <span>Cartão de Crédito Jurid IA</span>
        </CreditCardInfo>
      </Content>
    </Container>
  );
}
