import { useRouter } from "next/router";
import { useState } from "react";
import {
  ArtSection,
  BackButton,
  Container,
  FormContainer,
  Main,
  NextButton,
  ProgressBar,
} from "./styles";
import { PostAPI } from "@/lib/axios";
import { Footer } from "@/components/register-account/Footer";
import { RegisterAccountHeader } from "@/components/register-account/Header";
import { BasicDataForm } from "@/components/register-account/BasicDataForm";
import { PersonalDataForm } from "@/components/register-account/PersonalDataForm";
import { CompanyDataForm } from "@/components/register-account/CompanyDataForm";

export default function RegisterAccount() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [cpfCnpj, setCpfCnpj] = useState<string>("");
  const [mobilePhone, setMobilePhone] = useState<string>("");
  const [termsChecked, setTermsChecked] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();

  async function handleRegister() {
    setDisabled(true);
    const connect = await PostAPI("/register", {
      name,
      email,
      password,
      cpfCnpj,
      mobilePhone,
    });
    console.log(
      "Nome",
      name,
      "Email:",
      email,
      "Senha:",
      password,
      "CPF/CNPJ:",
      cpfCnpj,
      "Telefone:",
      mobilePhone
    );
    if (connect.status !== 200) {
      setDisabled(false);
      return alert(connect.body);
    }
    setDisabled(true);
    alert("Conta criada com sucesso!");
    return router.push("/loginaxion");
  }
  return (
    <Container>
      <>
        <RegisterAccountHeader />
        <Main>
          <ProgressBar step={step} />
          <FormContainer>
            {step === 1 ? (
              <>
                <BasicDataForm
                  name={name}
                  email={email}
                  mobilePhone={mobilePhone}
                  password={password}
                  termsChecked={termsChecked}
                  onNameChange={setName}
                  onEmailChange={setEmail}
                  onMobilePhoneChange={setMobilePhone}
                  onPasswordChange={setPassword}
                  onTermsChange={setTermsChecked}
                />
              </>
            ) : step === 2 ? (
              <PersonalDataForm cpf={cpfCnpj} onCpfChange={setCpfCnpj} />
            ) : (
              <CompanyDataForm />
            )}

            {step === 1 ? (
              <NextButton
                onClick={() => setStep(step + 1)}
                disabled={!termsChecked}
              >
                Proximo
              </NextButton>
            ) : step === 2 ? (
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <BackButton onClick={() => setStep(step - 1)}>
                  Voltar
                </BackButton>
                <NextButton onClick={() => setStep(step + 1)}>
                  Continuar
                </NextButton>
              </div>
            ) : (
              <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                <BackButton onClick={() => setStep(step - 1)}>
                  Voltar
                </BackButton>
                <NextButton onClick={handleRegister} disabled={disabled}>
                  Finalizar Cadastro
                </NextButton>
              </div>
            )}
          </FormContainer>

          <ArtSection>{/* <img src="/4.svg" alt="" /> */}</ArtSection>
        </Main>
      </>
      <Footer />
    </Container>
  );
}
