import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { Container, CreditCardInfo } from "./styles";

export function CreditCard() {
  return (
    <Container>
      <div className="logoContainer">
        <img src="/juridiaLogo.svg" alt="" />
      </div>
      <div
        style={{
          color: "white",
          marginLeft: "4rem",
          padding: "2.75rem 0 1.5rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="textLogo">
          <JuridiaTextSvg />
        </div>
        <CreditCardInfo>
          <strong>XXXX XXXX XXXX XXXX</strong>
          <span>Cartão de Crédito Jurid IA</span>
        </CreditCardInfo>
      </div>
    </Container>
  );
}
