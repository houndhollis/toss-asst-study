import Logo from "@/assets/images/svg/logo.svg";
import { HeaderImage } from "@/assets/images/desktop";
import * as S from "./header.styles";

import { HEADER_LIST } from "@/constant";

export default function Header() {
  return (
    <S.HeaderWrap>
      <S.HeaderSectionImage src={HeaderImage} />
      <S.HeaderContainer>
        <S.HeaderLogo href="/">
          <img src={Logo} />
        </S.HeaderLogo>
        <S.HeaderTabMenu>
          <S.HeaderList>
            {HEADER_LIST.map((text) => (
              <S.HeaderListItem key={text}>{text}</S.HeaderListItem>
            ))}
          </S.HeaderList>
          <S.HeaderContactBtn role="button">CONTACT</S.HeaderContactBtn>
        </S.HeaderTabMenu>
      </S.HeaderContainer>
    </S.HeaderWrap>
  );
}
