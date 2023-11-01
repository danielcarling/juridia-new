import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import {
  BackButton,
  ButtonsContainer,
  Content,
  FormContainer,
  FormGroup,
  ModalHeader,
  NextButton,
  StyledModal,
  Title,
} from "./styles";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}

export function ClientInfoModal({ show, onHide }: ModalProps) {
  return (
    <StyledModal show={show} onHide={onHide} size="xl" centered>
      <Content>
        <ModalHeader>
          <img src="/juridiaLogo.svg" alt="" />
          <JuridiaTextSvg />
        </ModalHeader>
        <Title>
          Sobre seu Cliente: <div className="line" />
        </Title>

        <FormContainer>
          <FormGroup>
            <label htmlFor="clientName">Qual o Nome do Cliente:</label>
            <input
              type="text"
              id="clientName"
              placeholder='"Exemplo: João da Silva Santos"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientCpf">Qual o CPF do Cliente:</label>
            <input
              type="text"
              id="clientCpf"
              placeholder='"Exemplo: 000.000.000-00"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientRg">Qual o RG do Cliente:</label>
            <input
              type="text"
              id="clientRg"
              placeholder='"Exemplo: 0000000000"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientAge">Qual a Idade do Cliente:</label>
            <input type="text" id="clientAge" placeholder='"Exemplo: 20"' />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientBirthDate">
              Data de Nascimento do Cliente:
            </label>
            <input
              type="text"
              id="clientBirthDate"
              placeholder='"Exemplo: 00/00/0000"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="civilStatus">Qual o Estado Civil do Cliente:</label>
            <input
              type="text"
              id="civilStatus"
              placeholder='"Exemplo: Solteiro"'
            />
          </FormGroup>
        </FormContainer>

        <ButtonsContainer>
          <BackButton onClick={onHide}>Retornar</BackButton>
          <NextButton>Continuar</NextButton>
        </ButtonsContainer>
      </Content>
    </StyledModal>
  );
}
