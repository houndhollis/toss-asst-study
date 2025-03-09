import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

export const FooterImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
