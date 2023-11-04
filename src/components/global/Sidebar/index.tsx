import { windowDimension } from "@/utils/windowDimensions";
import { Link } from "./Link";
import { Container, Nav, SidebarHeader, UserInfo } from "./styles";
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
          <UserInfo>
            <div className="user-picture">
              <img src="/userPhoto.png" alt="" />
            </div>
            <div className="name-and-email">
              <strong>Gabriel Antonio</strong>
              <span>email@example.com</span>
            </div>
          </UserInfo>
        </Container>
      )}
    </>
  );
}
