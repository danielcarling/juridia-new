import { windowDimension } from "@/utils/windowDimensions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "./Link";
import {
  Body,
  Container,
  HeaderContainer,
  Nav,
  Title,
  UserInfo,
} from "./styles";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const path = router.pathname;

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        handleClose();
      }
    });
  });

  return (
    <>
      {windowDimension(1024) && (
        <HeaderContainer>
          <button onClick={handleShow}>
            <img src="/menuIcon.svg" alt="" />
          </button>
          <JuridiaTextSvg />

          <Container show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  gap: "2rem",
                }}
              >
                <img src="/juridiaLogo.svg" alt="" />
                <JuridiaTextSvg />
              </div>
            </Offcanvas.Header>
            <Body>
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
            </Body>
          </Container>
        </HeaderContainer>
      )}
    </>
  );
}
