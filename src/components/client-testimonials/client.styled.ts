import styled from "@emotion/styled";

export const ClientTestimonialsContainer = styled.section`
  text-align: center;
  padding: 100px 20px;
`;

export const ClientTestimonialsTitle = styled.h2`
  font-size: 1.7vw;
  font-weight: bold;
  letter-spacing: 2px;
  color: #c5c5c5;
  margin-bottom: 4.2vw;

  @media (max-width: 640px) {
    font-size: 5vw;
    margin-bottom: 10vw;
  }
`;

export const ClientTestimonialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ClientProfile = styled.div`
  text-align: center;
`;

export const ClientImage = styled.img`
  width: 5vw;
  height: 5vw;
  object-fit: cover;
  border-radius: 100%;
  margin-bottom: 3.5vw;

  @media (max-width: 640px) {
    width: 10vw;
    height: 10vw;
    margin-bottom: 5.2vw;
  }
`;

export const ClientDescription = styled.p`
  font-size: 1.3vw;
  line-height: 2.1vw;
  margin-bottom: 4vw;
  color: #5f656e;

  @media (max-width: 640px) {
    font-size: 3vw;
    line-height: 5vw;
    margin-bottom: 5.2vw;
  }
`;

export const ClientName = styled.p`
  font-size: 1.25vw;
  font-weight: bold;
  margin-bottom: 6px;

  @media (max-width: 640px) {
    font-size: 3vw;
  }
`;

export const ClientRole = styled.p`
  font-size: 0.9vw;
  color: #c5c5c5;
  @media (max-width: 640px) {
    font-size: 2vw;
  }
`;
