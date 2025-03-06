import Logo from "@/assets/images/svg/logo.svg";
import ArrowIcon from "@/assets/images/svg/icon-arrow-down.svg";
import Hamburger from "@/assets/images/svg/icon-hamburger.svg";
import { HeaderImage } from "@/assets/images/desktop";
import * as S from "./header.styles";

import { HEADER_LIST } from "@/constant";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 640);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <S.HeaderWrap>
      <S.HeaderSectionImage src={HeaderImage} />

      {/* 헤더 탭 영역 */}
      <S.HeaderContainer>
        <S.HeaderLogo href="/">
          <img src={Logo} />
        </S.HeaderLogo>
        {isMobile ? (
          <S.HeaderHamburger src={Hamburger} />
        ) : (
          <S.HeaderTabMenu>
            <S.HeaderList>
              {HEADER_LIST.map((text) => (
                <S.HeaderListItem key={text}>{text}</S.HeaderListItem>
              ))}
            </S.HeaderList>
            <S.HeaderContactBtn role="button">CONTACT</S.HeaderContactBtn>
          </S.HeaderTabMenu>
        )}
      </S.HeaderContainer>

      {/* 헤더 텍스트 영역 */}
      <S.HeaderTextContainer>
        <S.HeaderText>WE ARE CREATIVES</S.HeaderText>
        <S.ArrowIcon src={ArrowIcon} />
      </S.HeaderTextContainer>
    </S.HeaderWrap>
  );
}
