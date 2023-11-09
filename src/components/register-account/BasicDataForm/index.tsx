import { maskPhone } from "@/utils/masks";
import {
  FormGroup,
  RegisterForm,
  RegisterFormHeader,
  TermsContainer,
} from "./styles";

interface Props {
  name: string;
  email: string;
  mobilePhone: string;
  password: string;
  termsChecked: boolean;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onMobilePhoneChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTermsChange: (checked: boolean) => void;
}
export function BasicDataForm({
  name,
  email,
  mobilePhone,
  password,
  termsChecked,
  onNameChange,
  onEmailChange,
  onMobilePhoneChange,
  onPasswordChange,
  onTermsChange,
}: Props) {
  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados Básicos</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="phoneNumber">Telefone</label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="Digite seu telefone"
          value={mobilePhone}
          onChange={(e) => onMobilePhoneChange(maskPhone(e.target.value))}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Crie uma senha</label>
        <input
          type="password"
          placeholder="Crie uma senha segura"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
        />
      </FormGroup>

      <TermsContainer>
        <input
          type="checkbox"
          id="terms"
          checked={termsChecked}
          onChange={(e) => onTermsChange(e.target.checked)}
        />
        <label htmlFor="terms">
          Ao informar meus dados, tenho ciência dos <span>Termos de Uso</span> e
          da <span>Política de Privacidade</span>.
        </label>
      </TermsContainer>
    </RegisterForm>
  );
}
