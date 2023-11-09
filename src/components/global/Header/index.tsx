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
import { authGetAPI } from "@/lib/axios";

export interface UserProps {
  cpfCnpf: string;
  name: string;
  email: string;
  enterprise: string | null;
  enterpriseCnpj: string | null;
  mobilePhone: string;
}

export function Header() {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState<UserProps>();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const router = useRouter();

  const path = router.pathname;

  async function getUserData() {
    const connect = await authGetAPI("/user/profile");
    if (connect.status === 200) {
      setUserData(connect.body.user);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        handleClose();
      }
    });
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

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
                  <strong>{userData?.name}</strong>
                  <span>{userData?.email}</span>
                </div>
              </UserInfo>
            </Body>
          </Container>
        </HeaderContainer>
      )}
    </>
  );
}
