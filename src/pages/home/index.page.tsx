import { Header } from "@/components/global/Header";
import {
  Container,
  Main,
  PrincipalBanner,
  SecondaryBanners,
  SliderContainer,
} from "./styles";
import { Sidebar } from "@/components/global/Sidebar";
import { SolutionsCard } from "@/components/home/SolutionsCard";
import { useKeenSlider } from "keen-slider/react";
import { WhatsApp } from "@/components/global/Whatsapp";
import { TitleComponent } from "@/components/global/Title";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { loginVerifyAPI } from "@/lib/axios";

export default function Home() {
  const router = useRouter();

  async function handleVerifyLogin() {
    const connect = await loginVerifyAPI();
    if (connect !== 200) {
      alert("Login necessário");
      return router.push("/login");
    }
  }

  async function handleVerifySubscription() {
    
  }

  useEffect(() => {
    handleVerifyLogin();
  });

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: "auto",
      spacing: 38,
    },
  });

  const SliderCards = [
    { index: 0, name: "Componente 1", routerSrc: "/ai" },
    { index: 1, name: "Componente 2", routerSrc: "/construction-tool" },
    { index: 2, name: "Componente 3", routerSrc: "/contract-improvement" },
    { index: 3, name: "Componente 4", routerSrc: "/componente4" },
    { index: 4, name: "Componente 5", routerSrc: "/componente5" },
  ];

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
            <img
              src="/home/secondaryBanner1.png"
              alt=""
              onClick={() => router.push("/construction-tool")}
            />
            <img
              src="/home/secondaryBanner2.png"
              alt=""
              onClick={() => router.push("/ai")}
            />
          </div>
        </SecondaryBanners>

        <TitleComponent
          content="Soluções Frequentes:"
          style={{ marginLeft: "1rem" }}
        />
        <SliderContainer ref={sliderRef}>
          {SliderCards.map((item) => (
            <div className="keen-slider__slide" key={item.index}>
              <SolutionsCard
                imgSrc="/home/solutionCardImg1.svg"
                routerPath={item.routerSrc}
              />
            </div>
          ))}
        </SliderContainer>
        <WhatsApp />
      </Main>
    </Container>
  );
}
