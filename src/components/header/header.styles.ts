import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  position: relative;
  margin-bottom: -5px;
`;

{
  /* 헤더 탭 영역 CSS */
}
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

export const HeaderHamburger = styled.img`
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
  background-color: red;
`;

{
  /* 헤더 텍스트 CSS */
}

export const HeaderTextContainer = styled.div`
  position: absolute;
  top: 14vw;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
`;

export const HeaderText = styled.h1`
  font-size: 3.6vw;
  font-weight: 700;
  color: white;
  letter-spacing: 8px;
  white-space: nowrap;
`;

export const ArrowIcon = styled.img`
  margin-top: 7vw;
  width: 2vw;
  height: auto;
  animation: bounce 1.2s infinite ease-in-out;

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(16px);
    }
  }
`;
