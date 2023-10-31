import { windowDimension } from "@/utils/windowDimensions";
import { Link } from "./Link";
import { Container, Nav, SidebarHeader } from "./styles";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";

export function Sidebar() {
  return (
    <>
      {!windowDimension(1024) && (
        <Container>
          <SidebarHeader>
            <img src="/juridiaLogo.svg" alt="" />
            <JuridiaTextSvg />
          </SidebarHeader>
          <Nav>
            <Link content="Tela Inicial" href="/" />
            <Link content="Como usar a Plataforma?" href="/how-to-use" />
          </Nav>
        </Container>
      )}
    </>
  );
}
