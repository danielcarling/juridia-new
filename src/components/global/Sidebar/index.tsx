import { windowDimension } from "@/utils/windowDimensions";
import { Link } from "./Link";
import { Container, Nav, SidebarHeader, UserInfo } from "./styles";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { authGetAPI } from "@/lib/axios";
import { UserProps } from "../Header";
import { useEffect, useState } from "react";

export function Sidebar() {
  const [userData, setUserData] = useState<UserProps>();

  async function getUserData() {
    const connect = await authGetAPI("/user/profile");
    if (connect.status === 200) {
      setUserData(connect.body.user);
    }
  }

  useEffect(() => {
    getUserData();
  });

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
              <strong>{userData?.name}</strong>
              <span>{userData?.email}</span>
            </div>
          </UserInfo>
        </Container>
      )}
    </>
  );
}
