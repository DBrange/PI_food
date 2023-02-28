import styled from "styled-components";

const Div = styled.div`
  color: #fff;
  padding: 30px 60px;
  border-radius: 10px;
  background-color: #cf0a0a;
  margin: 50px 0;
`;

export default function MessageError({ error }) {
  return <Div>{error}</Div>;
}
