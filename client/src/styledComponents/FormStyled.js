import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0eeed;
  position: relative;
`;

export const FormComplete = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 30px;
`;

export const FormBox = styled.form`
  margin: 30px;
  padding: 30px;
  border: 3px solid #eb455f;
  border-radius: 10px;
`;

export const FormLeft = styled.div``;

export const FormRight = styled.div`
  width: 500px;
  flex-wrap: wrap;
`;

export const BtnBox = styled.div`
  margin-top: 30px;
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  margin-top: 30px;
  outline: none;
  border-radius: 5px;
  border: 2px solid #000;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background-color: #eb455f;
  &:hover {
    background-color: #f16767;
  }
`;

export const H2 = styled.h2`
  color: #eb455f;
`;

export const H4 = styled.h4`
  font-weight: 500;
  margin-bottom: 15px;
`;

export const Span = styled.span`
  margin-top: 15px;
  background-color: #03c98833;
  padding: 10px;
  border-radius: 5px;
  display: block;
  color: #03c988;
`;

export const Arrow = styled.button`
  position: absolute;
  left: 70px;
  top: 70px;
  font-size: 2rem;
  color: #0004;
  line-height: 25px;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  &:hover {
    color: #f16767;
  }
`;
