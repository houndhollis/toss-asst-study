import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  position: relative;
`;

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

export const HeaderSectionImage = styled.img`
  width: 100%;
`;

export const HeaderLogo = styled.a`
  cursor: pointer;
`;

export const HeaderTabMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
`;

export const HeaderList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const HeaderListItem = styled.li`
  font-size: 14px;
  font-weight: 600;
  list-style: none;
  color: white;
  cursor: pointer;
`;

export const HeaderContactBtn = styled.button`
  padding: 12px 24px;
  font-weight: 700;
  font-size: 12px;
  border-radius: 36px;
  letter-spacing: -0.5px;
  background-color: white;
  cursor: pointer;
`;
