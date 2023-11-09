import { windowDimension } from "@/utils/windowDimensions";
import { BackIconSvg } from "../../../../public/BackIcon";
import { JuridiaTextSvg } from "../../../../public/JuridiaTextLogo";
import { BackButton, HeaderContainer, UserInfo } from "./styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UserProps } from "../Header";
import { authGetAPI } from "@/lib/axios";

export function ContractHeader() {
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

  const router = useRouter();
  return (
    <HeaderContainer>
      <BackButton onClick={() => router.back()}>
        <BackIconSvg />
      </BackButton>
      <div className="logo">
        <JuridiaTextSvg width="13rem" />
      </div>
      {!windowDimension(1024) && (
        <UserInfo>
          <Image width={200} height={200} src="/userPhoto.png" alt={""} />
          <div className="nameAndEmail">
            <strong>{userData?.name}</strong>
            <span>{userData?.email}</span>
          </div>
        </UserInfo>
      )}
    </HeaderContainer>
  );
}
