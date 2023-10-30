import { Header } from "@/components/global/Header";
import {
  Container,
  Main,
  PrincipalBanner,
  SecondaryBanners,
  SliderContainer,
} from "./styles";
import { Sidebar } from "@/components/global/Sidebar";
import { TitleComponent } from "@/components/global/Title";
import { SolutionsCard } from "@/components/home/SolutionsCard";

export default function Home() {
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

        <div style={{ marginLeft: "1rem" }}>
          <TitleComponent content="Soluções Frequentes:" />
          <SliderContainer>
            <SolutionsCard imgSrc="/home/solutionCardImg1.svg" />
          </SliderContainer>
        </div>
      </Main>
    </Container>
  );
}
