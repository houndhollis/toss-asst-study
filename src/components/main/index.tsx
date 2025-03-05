import {
  TransformImage,
  StandOutImage,
  GraphicDesign,
  Photography,
} from "@/assets/images/desktop";

import * as S from "./main.styles";

export default function Main() {
  return (
    <S.GridContainer>
      <S.GridItem>
        <S.TextBox>
          <S.Title>
            Transform your <span>brand</span>
          </S.Title>
          <S.Description>
            we are a full-service creative agency specializing in
            <br />
            helping brands grow fast. Engage your clients through
            <br />
            compelling visuals that do most of the marketing for you.
          </S.Description>
          <S.BadgeTitle>
            <p>LEARN MORE</p>
            <S.BadgeColor />
          </S.BadgeTitle>
        </S.TextBox>
      </S.GridItem>

      <S.GridItem>
        <S.GridImage src={TransformImage} />
      </S.GridItem>

      <S.GridItem>
        <S.GridImage src={StandOutImage} />
      </S.GridItem>

      <S.GridItem>
        <S.TextBox>
          <S.Title>
            Stand out to the right<span>audience</span>
          </S.Title>
          <S.Description>
            Using a collaborative formula of designers, researchers,
            <br />
            photographers, videographers, and copywriters, we’ll
            <br />
            build and extend your brand in digital places.
          </S.Description>
          <S.BadgeTitle>
            <p>LEARN MORE</p>
            <S.BadgeColor color="pink" />
          </S.BadgeTitle>
        </S.TextBox>
      </S.GridItem>

      <S.GridItem>
        <S.GridImage src={GraphicDesign} />
        <S.TextBox top={30}>
          <S.Title textAlign="center" color="#27554e">
            Graphic design
          </S.Title>
          <S.Description textAlign="center" color="#27554e">
            Great design makes you memorable. We deliver
            <br />
            artwork that underscores your brand message
            <br />
            and captures potential clients’ attention
          </S.Description>
        </S.TextBox>
      </S.GridItem>

      <S.GridItem>
        <S.GridImage src={Photography} />
        <S.TextBox top={30}>
          <S.Title textAlign="center" color="#185473">
            Photography
          </S.Title>
          <S.Description textAlign="center" color="#185473">
            Increase your credibility by getting the most
            <br />
            stunning, high-quality photos that improve your
            <br />
            business image
          </S.Description>
        </S.TextBox>
      </S.GridItem>
    </S.GridContainer>
  );
}
