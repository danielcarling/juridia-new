import { Header } from "@/components/global/Header";
import { Sidebar } from "@/components/global/Sidebar";
import { WhatsApp } from "@/components/global/Whatsapp";
import { Container, Main, PrincipalBanner, SliderContainer } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import { VideoCard } from "@/components/how-to-use/Cards";
import { TutorialModal } from "@/components/how-to-use/VideoModal";
import { useEffect, useState } from "react";
import { TitleComponent } from "@/components/global/Title";
import { useRouter } from "next/router";
import { authGetAPI, loginVerifyAPI } from "@/lib/axios";

export default function HowToUse() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: "auto",
      spacing: 38,
    },
  });

  const router = useRouter();

  async function handleVerify() {
    const connect = await loginVerifyAPI();

    if (connect !== 200) {
      alert("Login necessário");
      return router.push("/login");
    } else if (connect === 200) {
      const connect2 = await authGetAPI("/user/validation");
      if (connect2.status !== 200) {
        alert("Assinatura necessária");
        return router.push("/payment");
      }
    }
  }

  useEffect(() => {
    handleVerify();
  }, []);

  const cardsInfo = [1, 2, 3, 4, 5, 6, 7];

  const [showTutorialModal, setShowTutorialModal] = useState(false);
  return (
    <Container>
      <Sidebar />
      <Header />
      <Main>
        <PrincipalBanner>
          <img src="/home/homeBanner.png" alt="" />
        </PrincipalBanner>

        <TitleComponent
          content="Clique no Card para  extrair o máximo de cada funcionalidade:"
          style={{ marginLeft: "1rem" }}
        />
        <SliderContainer ref={sliderRef}>
          {cardsInfo.map((card) => (
            <div className="keen-slider__slide">
              <VideoCard
                imgSrc="/home/solutionCardImg1.svg"
                onClick={() => setShowTutorialModal(true)}
              />
            </div>
          ))}
        </SliderContainer>
        <WhatsApp />
      </Main>
      <TutorialModal
        show={showTutorialModal}
        onHide={() => setShowTutorialModal(false)}
      />
    </Container>
  );
}
