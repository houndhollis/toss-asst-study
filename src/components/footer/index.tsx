import {
  GalleryMilkBottles,
  GalleryOrange,
  GalleryCone,
  GallerySugarCubes,
} from "@/assets/images/desktop";

import * as S from "./footer.styles";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterImage src={GalleryMilkBottles} />
      <S.FooterImage src={GalleryOrange} />
      <S.FooterImage src={GalleryCone} />
      <S.FooterImage src={GallerySugarCubes} />
    </S.FooterContainer>
  );
}
