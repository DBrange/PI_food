import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0eeed;
  position: relative;
`;

export const ContainerBox = styled.div`
  width: 1200px;
`;

export const ImgBox = styled.div`
  border-radius: 10px;
  width: 100%;
  text-align: center;
`;

export const Img = styled.img`
  margin: 50px 0 30px;
  object-fit: cover;
  width: 500px;
  border: 5px solid #eb455f;
  border-radius: 10px;
`;

export const InfoBox = styled.div`
  text-align: start;
  width: 100%;
`;

export const H2 = styled.h2`
  color: #eb455f;
  margin-bottom: 20px;
`;
export const H3 = styled.h3`
  margin-bottom: 10px;
  font-weight: 300;
  margin-bottom: 20px;
`;
export const Paragraph = styled.p`
  font-weight: 300;
  margin-bottom: 10px;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
