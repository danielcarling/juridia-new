import { RoleSelect } from "../RoleSelect";
import {
  FormGroup,
  RegisterForm,
  RegisterFormHeader,
} from "./styles";

export function CompanyDataForm() {
  return (
    <RegisterForm>
      <RegisterFormHeader>
        <strong>Dados da Empresa</strong>
        <span>Preencha os campos logo abaixo</span>
      </RegisterFormHeader>

      <FormGroup>
        <label htmlFor="companyName">Nome da Empresa</label>
        <input
          type="text"
          id="companyName"
          placeholder="Digite o nome da empresa"
        />
      </FormGroup>

      <FormGroup>
        <label htmlFor="cnpj">CNPJ</label>
        <input type="text" placeholder="Digite o CNPJ" />
      </FormGroup>

      <FormGroup>
        <label htmlFor="role">Seu Cargo</label>
        <RoleSelect values={["Advogado", "Advogada"]} />
      </FormGroup>
    </RegisterForm>
  );
}