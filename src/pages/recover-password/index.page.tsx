import Theme from "@/styles/themes";
import { useEffect, useState } from "react";
import {
  ArtSection,
  BackButton,
  Container,
  EyeSlashContainer,
  FormGroup,
  Guide,
  IframeContainer,
  JuridiaLogo,
  LoginForm,
  Main,
  RecoverButton,
  RecoverFormHeader,
} from "./styles";

import { Footer } from "@/components/register-account/Footer";
import { PostAPI } from "@/lib/axios";
import { scrollToElement } from "@/utils/scrollToElement";
import { useRouter } from "next/router";
import { Alert, Button, Modal, Spinner } from "react-bootstrap";
import { ErrorMessage } from "@/components/global/ErrorMessage";
import { EyeSlashSVG } from "../../../public/login/EyeSlash";

export default function Login() {
  const router = useRouter();
  // const [showPassword, setShowPassword] = useState("password");
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  function toggleShowPassword() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  function validateEmail(email: string) {
    if (!email) {
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  }

  async function handleRecover() {
    setDisabled(true);

    if (!validateEmail(recoveryEmail)) {
      setErrorMessage("Email inválido");
      setDisabled(false);
      return;
    }

    const connect = await PostAPI("/user/recover-code", {
      email: recoveryEmail,
    });
    console.log(connect);

    if (connect.status === 200) {
      setErrorMessage("");
      setDisabled(false);
      return setStep(2);
    } else {
      setDisabled(false);
      setErrorMessage(connect.body);
    }
  }

  async function handleChangePassword() {
    setDisabled(true);

    if (!recoveryCode) {
      setDisabled(false);
      return setErrorMessage("Insira um código de recuperação");
    } else if (newPassword.length < 6) {
      setDisabled(false);
      return setErrorMessage("A senha deve ter pelo menos 6 digitos");
    } else if (newPassword !== confirmPassword) {
      setDisabled(false);
      return setErrorMessage("As senhas devem ser iguais");
    }

    const connect = await PostAPI("/user/recover-password", {
      code: recoveryCode,
      password: newPassword,
    });

    if (connect.status !== 200) {
      setDisabled(false);
      setErrorMessage("Algo deu errado, tente novamente");
    } else {
      setDisabled(false);
      return setShowSuccessModal(true);
    }
  }

  useEffect(() => {
    scrollToElement("recoverForm");
  }, []);

  return (
    <Container>
      <Main>
        <ArtSection />
        <LoginForm id="recoverForm">
          <JuridiaLogo>
            <img src="/login/juridiaTextLogo.svg" alt="" />
          </JuridiaLogo>
          {step === 1 ? (
            <>
              <RecoverFormHeader>
                <strong>Esqueceu a senha?</strong>
                <span>Digite seu email e receba um novo acesso por email.</span>
              </RecoverFormHeader>

              <FormGroup>
                <label htmlFor="recoverEmail">Digite o e-mail cadastrado</label>
                <input
                  type="email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  placeholder="Seu e-mail cadastrado"
                />
              </FormGroup>
            </>
          ) : (
            <>
              <RecoverFormHeader>
                <strong>
                  Enviamos um código no e-mail{" "}
                  <em style={{ textDecoration: "underline" }}>
                    {recoveryEmail}
                  </em>
                  .
                </strong>
              </RecoverFormHeader>

              <FormGroup>
                <label htmlFor="recoverCode">
                  Digite o código de recuperação
                </label>
                <input
                  type="text"
                  value={recoveryCode}
                  onChange={(e) => setRecoveryCode(e.target.value)}
                  placeholder="Código de verificação"
                />
              </FormGroup>

              <div>
                <FormGroup style={{ position: "relative" }}>
                  <label htmlFor="newPassword">Nova senha</label>
                  <input
                    type={showPassword}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Digite sua nova senha"
                  />

                  <EyeSlashContainer
                    showPassword={showPassword === "password"}
                    onClick={toggleShowPassword}
                  >
                    <EyeSlashSVG />
                  </EyeSlashContainer>
                </FormGroup>

                <FormGroup>
                  <label htmlFor="confirmPassowrd">
                    Confirme sua nova senha
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirme sua nova senha"
                  />
                </FormGroup>
              </div>
            </>
          )}

          <div>
            <ErrorMessage message={errorMessage} />

            {step === 1 ? (
              <RecoverButton disabled={disabled} onClick={handleRecover}>
                {disabled ? (
                  <Spinner style={{ width: "1.2rem", height: "1.2rem" }} />
                ) : (
                  "Recuperar Senha"
                )}
              </RecoverButton>
            ) : (
              <>
                <div
                  style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
                >
                  <BackButton onClick={() => setStep(1)}>Voltar</BackButton>
                  <RecoverButton onClick={handleChangePassword}>
                    {disabled ? (
                      <Spinner style={{ width: "1.2rem", height: "1.2rem" }} />
                    ) : (
                      "Redefinir Senha"
                    )}
                  </RecoverButton>
                </div>
              </>
            )}
          </div>

          <p
            style={{
              fontSize: "0.9rem",
              fontWeight: "bold",
              color: Theme.color.gray_20,
            }}
          >
            Lembrou a senha?{" "}
            <span
              style={{ color: Theme.color.blue_100, cursor: "pointer" }}
              onClick={() => router.push("/login")}
            >
              Faça login agora
            </span>
          </p>

          {step === 1 && (
            <>
              <Guide>
                <strong>Veja o passo a passo:</strong>
                <span>
                  O vídeo abaixo vai te ajudar a resolver em poucos minutos.
                </span>
              </Guide>

              <IframeContainer>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/LXb3EKWsInQ?si=aD2Nlsj93iw4cQgB"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </IframeContainer>
            </>
          )}
          <Modal
            show={showSuccessModal}
            onHide={() => setShowSuccessModal(false)}
          >
            <div className="bg-dark" style={{ color: "white" }}>
              <Modal.Header closeButton>
                <Modal.Title>Senha alterada com sucesso</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Sua senha foi alterada com sucesso. Clique no botão abaixo
                  para ir para a tela de login.
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    style={{ margin: "2rem auto" }}
                    onClick={() => router.push("/login")}
                    className="btn-secondary"
                  >
                    Ir para o Login
                  </Button>
                </div>
              </Modal.Body>
            </div>
          </Modal>
        </LoginForm>
      </Main>
      <Footer />
    </Container>
  );
}
