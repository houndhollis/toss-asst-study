import Emily from "@/assets/images/image-emily.jpg";
import Jennie from "@/assets/images/image-jennie.jpg";
import Thomas from "@/assets/images/image-thomas.jpg";

import * as S from "./client.styled";

export default function ClientTestimonials() {
  return (
    <S.ClientTestimonialsContainer>
      <S.ClientTestimonialsTitle>CLIENT TESTIMONIALS</S.ClientTestimonialsTitle>

      {/* 개별 프로필 섹션 */}
      <S.ClientTestimonialsWrapper>
        <S.ClientProfile>
          <S.ClientImage src={Emily} alt="프로필" />
          <S.ClientDescription>
            We put our trust in Sunnyside and they
            <br /> delivered, making sure our needs were met
            <br />
            and deadlines were always hit.
          </S.ClientDescription>
          <S.ClientName>Emily R.</S.ClientName>
          <S.ClientRole>Marketing Director</S.ClientRole>
        </S.ClientProfile>

        <S.ClientProfile>
          <S.ClientImage src={Thomas} alt="프로필" />
          <S.ClientDescription>
            Sunnyside’s enthusiasm coupled with their
            <br />
            keen interest in our brand’s success made it
            <br />a satisfying and enjoyable experience.
          </S.ClientDescription>
          <S.ClientName>Thomas S.</S.ClientName>
          <S.ClientRole>Chief Operating Officer</S.ClientRole>
        </S.ClientProfile>

        <S.ClientProfile>
          <S.ClientImage src={Jennie} alt="프로필" />
          <S.ClientDescription>
            Incredible end result! Our sales increased
            <br />
            over 400% when we worked with Sunnyside.
            <br />
            Highly recommended!
          </S.ClientDescription>
          <S.ClientName>Jennie F.</S.ClientName>
          <S.ClientRole>Business Owner</S.ClientRole>
        </S.ClientProfile>
      </S.ClientTestimonialsWrapper>
    </S.ClientTestimonialsContainer>
  );
}
