import { Header } from "@/components/global/Header";
import {
  Container,
  Main,
  PrincipalBanner,
  SecondaryBanners,
  SliderContainer,
} from "./styles";
import { Sidebar } from "@/components/global/Sidebar";
import { TitleComponent } from "@/components/contract-improvement/Title";
import { SolutionsCard } from "@/components/home/SolutionsCard";
import { useKeenSlider } from "keen-slider/react";
import { WhatsApp } from "@/components/global/Whatsapp";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: "auto",
      spacing: 38,
    },
  });

  const slides = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Container>
      <Sidebar />
      <Header />
      <Main>
        <PrincipalBanner>
          <img src="/home/homeBanner.png" alt="" />
        </PrincipalBanner>

        <SecondaryBanners>
          <TitleComponent content="Utilize a Jurid IA e tenha mais Produtividade:" />
          <div className="banners">
            <img src="/home/secondaryBanner1.png" alt="" />
            <img src="/home/secondaryBanner2.png" alt="" />
          </div>
        </SecondaryBanners>

        <TitleComponent
          content="Soluções Frequentes:"
          style={{ marginLeft: "1rem" }}
        />
        <SliderContainer ref={sliderRef}>
          {slides.map((slide) => (
            <div className="keen-slider__slide">
              <SolutionsCard imgSrc="/home/solutionCardImg1.svg" />
            </div>
          ))}
        </SliderContainer>
        <WhatsApp />
      </Main>
    </Container>
  );
}
