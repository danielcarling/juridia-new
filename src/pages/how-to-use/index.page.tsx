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
import { authGetAPI, getAPI, loginVerifyAPI } from "@/lib/axios";

interface CardProps {
  id: string;
  imgSrc: string;
  name: string;
  description: string;
  update_time: string;
  video_url: string;
}

export default function HowToUse() {
  const [tutorials, setTutorials] = useState<CardProps[]>([]);
  const [modalVideoUrl, setModalVideoUrl] = useState("");

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

  async function getTutorials() {
    const connect = await getAPI("/tutorial");
    if (connect.status === 200) {
      console.log(connect);
      setTutorials(connect.body.tutorials);
    }
  }

  function handleShowTutorial(videoUrl: string) {
    setModalVideoUrl(videoUrl);
    setShowTutorialModal(true);
  }

  useEffect(() => {
    handleVerify();
    getTutorials();
  }, []);

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
          {tutorials &&
            tutorials.map((card) => (
              <div className="keen-slider__slide">
                <VideoCard
                  imgSrc="/home/solutionCardImg1.svg"
                  name={card.name}
                  description={card.description}
                  updateTime={card.update_time}
                  onClick={() => handleShowTutorial(card.video_url)}
                />
              </div>
            ))}
        </SliderContainer>
        <WhatsApp />
      </Main>
      <TutorialModal
        show={showTutorialModal}
        onHide={() => setShowTutorialModal(false)}
        videoUrl={modalVideoUrl}
      />
    </Container>
  );
}
