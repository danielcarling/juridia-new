import { maskCard, maskCardValidity, maskCvc } from "@/utils/masks";
import { CreditCard } from "../CreditCard";
import { CreditCardForm, FormGroup, ValidityAndCvc } from "./styles";

interface Props {
  cardName: string;
  setCardName: (value: string) => void;
  cardNumber: string;
  setCardNumber: (value: string) => void;
  validity: string;
  setValidity: (value: string) => void;
  securityCode: string;
  setSecurityCode: (value: string) => void;
}

export function CardStep1({
  cardName,
  setCardName,
  cardNumber,
  setCardNumber,
  validity,
  setValidity,
  securityCode,
  setSecurityCode,
}: Props) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "1rem 0",
        }}
      >
        <CreditCard cardNumber={cardNumber} setCardNumber={setCardNumber} />
      </div>
      <CreditCardForm>
        <FormGroup>
          <label htmlFor="name">Nome do Cartão</label>
          <input
            type="text"
            id="cardName"
            placeholder="Digite o nome do cartão"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="cardNumber">Número do Cartao</label>
          <input
            type="text"
            id="cardNumber"
            placeholder="Digite o número do cartao"
            maxLength={19}
            value={cardNumber}
            onChange={(e) => setCardNumber(maskCard(e.target.value))}
          />
        </FormGroup>
        <ValidityAndCvc>
          <FormGroup className="validityAndCVC">
            <label htmlFor="validity">Data de vencimento</label>
            <input
              type="text"
              id="validity"
              placeholder="MM/AA"
              className="validity"
              value={validity}
              onChange={(e) => setValidity(maskCardValidity(e.target.value))}
            />
          </FormGroup>
          <FormGroup className="validityAndCVC">
            <label htmlFor="securityCode">CVC</label>
            <input
              type="text"
              id="securityCode"
              placeholder="XXX"
              className="securityCode"
              value={securityCode}
              onChange={(e) => setSecurityCode(maskCvc(e.target.value))}
            />
          </FormGroup>
        </ValidityAndCvc>
      </CreditCardForm>
    </>
  );
}
