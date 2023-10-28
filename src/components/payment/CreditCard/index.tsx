import { Container, CreditCardInfo } from "./styles";

export function CreditCard() {
  return (
    <Container>
      <div>
        <img src="/juridiaLogo.svg" alt="" />
      </div>
      <div>
        <img src="/juridiaText.svg" alt="" />
        <CreditCardInfo>
          <strong>XXXX XXXX XXXX XXXX</strong>
          <span>Cartão de Crédito Jurid IA</span>
        </CreditCardInfo>
      </div>
    </Container>
  );
}
