import { useState } from "react";
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
import { maskAge, maskCpf, maskDate, maskRg } from "@/utils/masks";

interface ModalProps {
  show: boolean;
  onHide: () => void;
}
interface ClientDataProps extends ModalProps {
  onClientDataSubmit: (data: any) => void; // Função para lidar com os dados do cliente
}

export function ClientInfoModal({ show, onHide, onClientDataSubmit }: ClientDataProps) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [age, setAge] = useState(""); 
  const [birthDate, setBirthDate] = useState(""); 
  const [maritalStatus, setMaritalStatus] = useState(""); 
  const clientData = {
    name,
    cpf,
    rg,
    age,
    birthDate,
    maritalStatus,
  };
  const validateInfo = () => {
    if (!name) {
      alert("Por favor, preencha o nome.");
      return false;
    } else if (!cpf) {
      alert("Por favor, preencha o cpf.");
      return false;
    } else if (!rg) {
      alert("Por favor, preencha rg");
      return false;
    } else if (!age) {
      alert("Por favor, preencha a idade.");
      return false;
    } else if (!birthDate) {
      alert("Por favor, preencha a data de nascimento.");
      return false;
    } else if (!maritalStatus) {
      alert("Por favor, preencha o estado civil.");
      return false;
    }
    return true;
  };
  const handleFormSubmit = () => {
    if (validateInfo()) {
      onClientDataSubmit(clientData);
      onHide();
    }
  };
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
              value={name}
              onChange={(e: any) => setName(e.target.value)}
              type="text"
              id="clientName"
              placeholder='"Exemplo: João da Silva Santos"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientCpf">Qual o CPF do Cliente:</label>
            <input
              value={cpf}
              onChange={(e: any) => setCpf(maskCpf(e.target.value))}
              type="text"
              id="clientCpf"
              placeholder='"Exemplo: 000.000.000-00"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientRg">Qual o RG do Cliente:</label>
            <input
              value={rg}
              onChange={(e: any) => setRg(maskRg(e.target.value))}
              type="text"
              id="clientRg"
              placeholder='"Exemplo: 0000000000"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientAge">Qual a Idade do Cliente:</label>
            <input 
              value={age}
              onChange={(e: any) => setAge(maskAge(e.target.value))}
              type="text" 
              id="clientAge" 
              placeholder='"Exemplo: 20"' 
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="clientBirthDate">
              Data de Nascimento do Cliente:
            </label>
            <input
              value={birthDate}
              onChange={(e: any) => setBirthDate(maskDate(e.target.value))}
              type="text"
              id="clientBirthDate"
              placeholder='"Exemplo: 00/00/0000"'
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="civilStatus">Qual o Estado Civil do Cliente:</label>
            <input
              value={maritalStatus}
              onChange={(e: any) => setMaritalStatus(e.target.value)}
              type="text"
              id="civilStatus"
              placeholder='"Exemplo: Solteiro"'
            />
          </FormGroup>
        </FormContainer>

        <ButtonsContainer>
          <BackButton onClick={onHide}>Retornar</BackButton>
          <NextButton onClick={handleFormSubmit}>Continuar</NextButton>
        </ButtonsContainer>
      </Content>
    </StyledModal>
  );
}
