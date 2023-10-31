import { Header } from "@/components/global/Header";
import { Sidebar } from "@/components/global/Sidebar";
import { TitleComponent } from "@/components/global/Title";
import { WhatsApp } from "@/components/global/Whatsapp";
import { Container, Main, PrincipalBanner, SliderContainer } from "./styles";
import { useKeenSlider } from "keen-slider/react";
import { VideoCard } from "@/components/how-to-use/Cards";

export default function HowToUse() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: "auto",
      spacing: 38,
    },
  });

  const cardsInfo = [1, 2, 3, 4, 5, 6, 7];
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
              <VideoCard imgSrc="/home/solutionCardImg1.svg" />
            </div>
          ))}
        </SliderContainer>
        <WhatsApp />
      </Main>
    </Container>
  );
}
