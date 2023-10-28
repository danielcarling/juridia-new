import { Link } from "./Link";
import { Container, Nav, SidebarHeader } from "./styles";

export function Sidebar() {
  return (
    <Container>
      <SidebarHeader>
        <img src="/juridiaLogo.svg" alt="" />
        <img src="juridiaTextLogo.svg" alt="" />
      </SidebarHeader>
      <Nav>
        <Link content="Tela Inicial" href="/" />
        <Link content="Como usar a Plataforma?" href="/tutorial" />
      </Nav>
    </Container>
  );
}
