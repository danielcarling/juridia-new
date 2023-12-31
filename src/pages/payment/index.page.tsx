import { ErrorMessage } from "@/components/global/ErrorMessage";
import { CardStep1 } from "@/components/payment/CardStep1";
import { CardStep2 } from "@/components/payment/CardStep2";
import { Footer } from "@/components/register-account/Footer";
import { RegisterAccountHeader } from "@/components/register-account/Header";
import { AuthPostAPI, authGetAPI, getAPI, loginVerifyAPI } from "@/lib/axios";
import { onlyNumbers } from "@/utils/masks";
import { scrollToElement } from "@/utils/scrollToElement";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { CreditCardSvg } from "../../../public/payment/CreditCardIcon";
import { PixSvg } from "../../../public/payment/PixCardIcon";
import {
  stripeCardExpirValidation,
  stripeCardNumberValidation,
} from "../../utils/creditCardValidation";
import {
  Container,
  CopyPastePix,
  EndPurchase,
  FinishPix,
  GeneratePix,
  Main,
  NextStep,
  PayOptionCard,
  PayOptionsContainer,
  PaymentContainer,
  PaymentHeader,
  PixContainer,
  ProgressBar,
  QrCode,
  SalesArtContainer,
} from "./styles";

interface PlansProps {
  credit_value: number;
  id: string;
  pix_value: number;
  status: string;
}

export default function Payment() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [validity, setValidity] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [residencialNumber, setResidencialNumber] = useState("");
  const [installments, setInstallments] = useState<string | number>(
    "Número de parcelas"
  );
  const [saveCreditCard, setSaveCreditCard] = useState(false);
  const installmentsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [pixInfo, setPixInfo] = useState({
    encodedImage: "",
    expirationDate: "",
    payLoad: "",
    payment_id: "",
    value: 0,
  });

  const [selectedPlan, setSelectedPlan] = useState<PlansProps>();

  const [payOption, setPayOption] = useState("pix");
  const [pixStep, setPixStep] = useState(1);
  const [cardStep, setCardStep] = useState(1);
  const [progressBarStep, setProgressBarStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const router = useRouter();

  async function handleVerify() {
    const connect = await loginVerifyAPI();

    if (connect !== 200) {
      alert("Login necessário");
      return router.push("/login");
    } else if (connect === 200) {
      const connect2 = await authGetAPI("/user/validation");
      if (connect2.status === 200) {
        return router.push("/");
      }
    }
  }

  async function getPlans() {
    const connect = await getAPI("/plans");
    if (connect.status === 200) {
      setSelectedPlan(connect.body.plans[0]);
    }
  }

  async function finishPixBuy() {
    setLoading(true);
    const connect = await AuthPostAPI(`/pix/${selectedPlan?.id}`, {});

    if (connect.status === 200) {
      setLoading(false);
      setPixInfo({
        encodedImage: connect.body.payment.encodedImage,
        expirationDate: connect.body.payment.expirationDate,
        payLoad: connect.body.payment.payload,
        payment_id: connect.body.payment.payment_id,
        value: connect.body.payment.value,
      });
      setPixStep(2);
    } else {
      setLoading(false);
      alert("Algo deu errado, tente novamente.");
    }
  }

  async function finishCardBuy() {
    validateCard();
    setLoading(true);

    const data = {
      creditCard: {
        holderName: cardName,
        number: cardNumber,
        expiryMonth: validity.split("/")[0],
        expiryYear: validity.split("/")[1],
        ccv: securityCode,
      },
      creditCardHolderInfo: {
        name: name,
        email: email,
        cpfCnpj: cpfCnpj,
        postalCode: cep,
        addressNumber: residencialNumber,
        addressComplement: "",
        phone: phoneNumber,
        mobilePhone: phoneNumber,
      },
      installmentCount: Number(installments),
      saveCreditCard: saveCreditCard,
    };

    const connect = await AuthPostAPI(
      `/new-credit-card/${selectedPlan?.id}`,
      data
    );

    if (connect.status === 200) {
      alert("Compra realizada com sucesso");
      setLoading(false);
      return router.push("/");
    } else {
      setLoading(false);
      return alert("Algo deu errado");
    }
  }

  useEffect(() => {
    handleVerify();
    getPlans();
    scrollToElement("payment");
  }, []);

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

  function validateCard() {
    if (cardStep === 1) {
      if (!cardName) {
        return setErrorMessage("Nome do Cartão é obrigatório");
      } else if (!stripeCardNumberValidation(cardNumber)) {
        return setErrorMessage("Insira um número de cartão válido");
      } else if (!stripeCardExpirValidation(validity)) {
        return setErrorMessage("Insira uma data de vencimento válida");
      } else if (!securityCode || securityCode.length < 3) {
        return setErrorMessage("Insira um CVC válido");
      } else {
        setErrorMessage("");
        setCardStep(2);
      }
    } else if (cardStep === 2) {
      if (!name) {
        return setErrorMessage("Insira um nome");
      } else if (!validateEmail(email)) {
        return setErrorMessage("Insira um e-mail válido");
      } else if (phoneNumber.replace(/\D/g, "").length < 11) {
        return setErrorMessage("Insira um telefone válido");
      } else if (
        onlyNumbers(cpfCnpj).length < 11 ||
        (onlyNumbers(cpfCnpj).length > 11 && onlyNumbers(cpfCnpj).length < 14)
      ) {
        return setErrorMessage("Insira um CPF ou Cnpj válido");
      } else if (onlyNumbers(cep).length < 8) {
        return setErrorMessage("Insira um CEP válido");
      } else if (!residencialNumber) {
        return setErrorMessage("Insira um número");
      } else if (installments === "Número de parcelas") {
        return setErrorMessage("Selecione o número de parcelas");
      } else {
        setErrorMessage("");
      }
    }
  }

  useEffect(() => {
    if (payOption === "pix") {
      setProgressBarStep(pixStep);
    } else if (payOption === "creditCard") {
      setProgressBarStep(cardStep);
    }
  }, [payOption, pixStep, cardStep]);

  return (
    <Container>
      <RegisterAccountHeader />
      <Main>
        <ProgressBar step={progressBarStep} />
        <SalesArtContainer>
          <img src="/payment/salesArt.png" alt="" />
        </SalesArtContainer>

        <PaymentContainer id="payment">
          <PaymentHeader>
            <strong>Realizar Assinatura</strong>
            <span>Finalize sua Assinatura e comece a usar</span>
          </PaymentHeader>
          <PayOptionsContainer>
            <PayOptionCard
              selected={payOption === "pix"}
              onClick={() => setPayOption("pix")}
            >
              <PixSvg />
              <strong>PIX</strong>
            </PayOptionCard>
            <PayOptionCard
              selected={payOption === "creditCard"}
              onClick={() => setPayOption("creditCard")}
            >
              <CreditCardSvg />
              <strong>Cartão</strong>
            </PayOptionCard>
          </PayOptionsContainer>
          {payOption === "pix" && (
            <>
              {pixStep === 1 ? (
                <GeneratePix onClick={finishPixBuy}>
                  {loading ? (
                    <Spinner />
                  ) : (
                    <>
                      <span>Clique aqui para</span>
                      <strong>Gerar o Pix Copia e Cola</strong>
                    </>
                  )}
                </GeneratePix>
              ) : (
                <PixContainer>
                  <QrCode>
                    {pixInfo.encodedImage !== "" && (
                      <img
                        src={"data:image/png;base64," + pixInfo.encodedImage}
                        alt=""
                      />
                    )}
                  </QrCode>

                  <CopyPastePix
                    onClick={() => {
                      navigator.clipboard.writeText(pixInfo.payLoad);
                      setShowAlert(true);
                    }}
                  >
                    <span>Clique aqui para</span>
                    <strong>Copiar Pix Copia e Cola</strong>
                  </CopyPastePix>

                  <FinishPix onClick={() => router.push("/")}>
                    <span>Após efetuar o Pagamento</span>
                    <strong>Clique aqui e Prossiga</strong>
                  </FinishPix>
                </PixContainer>
              )}
            </>
          )}

          {payOption === "creditCard" && (
            <>
              {cardStep === 1 ? (
                <>
                  <CardStep1
                    {...{
                      cardName,
                      setCardName,
                      cardNumber,
                      setCardNumber,
                      validity,
                      setValidity,
                      securityCode,
                      setSecurityCode,
                    }}
                  />
                  <ErrorMessage message={errorMessage} />
                  <NextStep onClick={validateCard}>
                    <button>Próximo</button>
                  </NextStep>
                </>
              ) : (
                <>
                  <CardStep2
                    name={name}
                    email={email}
                    phoneNumber={phoneNumber}
                    cpfCnpj={cpfCnpj}
                    cep={cep}
                    residencialNumber={residencialNumber}
                    installments={installments}
                    saveCreditCard={saveCreditCard}
                    setInstallments={setInstallments}
                    installmentsValues={installmentsValues}
                    setName={setName}
                    setEmail={setEmail}
                    setPhoneNumber={setPhoneNumber}
                    setCpfCnpj={setCpfCnpj}
                    setCep={setCep}
                    setResidencialNumber={setResidencialNumber}
                    setSaveCreditCard={setSaveCreditCard}
                    creditValue={selectedPlan?.credit_value}
                  />
                  <ErrorMessage message={errorMessage} />
                  <EndPurchase>
                    <button onClick={finishCardBuy} disabled={loading}>
                      {loading ? <Spinner /> : "Finalizar Compra"}
                    </button>
                  </EndPurchase>
                </>
              )}
            </>
          )}

          <Alert
            show={showAlert}
            variant="dark"
            style={{
              position: "fixed",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Alert.Heading>Código copiado</Alert.Heading>
            <p>O Pix Copia e Cola foi copiado para a área de transferência.</p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShowAlert(false)} variant="dark">
                Fechar
              </Button>
            </div>
          </Alert>
        </PaymentContainer>
      </Main>
      <Footer />
    </Container>
  );
}
