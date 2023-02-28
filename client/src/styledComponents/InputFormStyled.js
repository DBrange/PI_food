import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const InputBox = styled.div``;

export const Label = styled.label`
  padding-bottom: 10px;
`;

export const Input = styled.input`
  display: block;
  padding: 10px 10px;
  font-size: 0.8;
  width: 500px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 3px;
  &:focus {
    border: 2px solid #1c82ad;
  }
`;

export const Span = styled.span`
  color: #cf0a0a;
  font-size: 12px;
`;

export const InputErr = styled.input`
  display: block;
  padding: 10px 10px;
  font-size: 0.8;
  width: 500px;
  outline: none;
  border: 2px solid #cf0a0a;
  border-radius: 5px;
  margin-top: 3px;
`;

export const LabelErr = styled.label`
  padding-bottom: 10px;
  color: #cf0a0a;
`;
