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
import { useEffect, useState } from "react";
import { authGetAPI, getAPI, loginVerifyAPI } from "@/lib/axios";

export interface FuncionalitiesProps {
  created_at: string;
  description: string;
  id: string;
  name: string;
  page_url: string;
  update_time: string;
  video_url: string;
}

export default function Home() {
  const [funcionalities, setFuncionalities] = useState<FuncionalitiesProps[]>(
    []
  );
  const [showSlider, setShowSlider] = useState(false);
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

  async function getFuncionalities() {
    const connect = await getAPI("/functionalities");
    if (connect.status === 200) {
      setFuncionalities(connect.body.functionalities);
      setShowSlider(true);
    }
  }

  useEffect(() => {
    handleVerify();
    getFuncionalities();
  }, []);

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: "auto",
      spacing: 38,
    },
  });

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
        {showSlider && (
          <SliderContainer ref={sliderRef}>
            {funcionalities.map((item) => (
              <div className="keen-slider__slide" key={item.id}>
                <SolutionsCard
                  id={item.id}
                  page_url={item.page_url}
                  description={item.description}
                  name={item.name}
                  video_url={item.video_url}
                  update_time={item.update_time}
                  created_at={item.created_at}
                />
              </div>
            ))}
          </SliderContainer>
        )}
        <WhatsApp />
      </Main>
    </Container>
  );
}
