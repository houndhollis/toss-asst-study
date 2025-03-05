import styled from "@emotion/styled";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
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
`;

export const Description = styled.p<{ textAlign?: string; color?: string }>`
  font-size: 1.5vw;
  font-weight: 400;
  color: gray;
  margin: 20px 0;
  text-align: ${(props) => props.textAlign || "start"};
  color: ${(props) => props.color || "black"};
`;

export const BadgeTitle = styled.span`
  position: relative;

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
`;

export const BadgeColor = styled.div<{ color?: string }>`
  position: absolute;
  top: 60%;
  left: -2px;
  right: -2px;
  height: 5px;
  background-color: ${(props) => props.color || "yellow"};
  z-index: 1;
`;
