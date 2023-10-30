import { CreditCard } from "../CreditCard";
import { CreditCardForm, FormGroup } from "./styles";

export function CardStep1() {
  return (
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
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
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
  );
}
