import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;

export const GridItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1 /1;
  background-color: #fff;
`;

export const GridImage = styled.img`
  inset: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
`;

export const TextBox = styled.div<{ top?: number }>`
  z-index: 1;
  position: relative;
  top: ${(props) => props.top || 0}%;
`;

export const Title = styled.p<{ textAlign?: string; color?: string }>`
  font-size: 3vw;
  font-weight: 700;
  text-align: ${(props) => props.textAlign || "start"};
  color: ${(props) => props.color || "black"};
  span {
    display: block;
  }

  @media (max-width: 640px) {
    font-size: 8vw;
    text-align: center;
  }
`;

export const Description = styled.p<{ textAlign?: string; color?: string }>`
  font-size: 1.5vw;
  font-weight: 400;
  color: #808298;
  margin: 20px 0;
  text-align: ${(props) => props.textAlign || "start"};
  color: ${(props) => props.color || "black"};

  @media (max-width: 640px) {
    font-size: 3vw;
    text-align: center;
    color: #808298;
    margin-bottom: 6vw;
    line-height: 4.5vw;
  }
`;

export const BadgeContainer = styled.div`
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;

export const BadgeTitle = styled.div`
  position: relative;
  display: inline;

  p {
    position: relative;
    display: inline;
    width: 100%;
    font-size: 1.4vw;
    font-weight: 700;
    letter-spacing: 1px;
    color: black;
    z-index: 2;
  }

  @media (max-width: 640px) {
    text-align: center;
    p {
      font-size: 4vw;
    }
  }
`;

export const BadgeColor = styled.div<{ color?: string }>`
  position: absolute;
  top: 60%;
  left: -2px;
  right: -2px;
  height: 6px;
  background-color: ${(props) => props.color || "yellow"};
  z-index: 1;
`;
