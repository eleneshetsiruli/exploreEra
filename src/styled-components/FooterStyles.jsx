import { styled } from "styled-components";

export const FooterExlpore = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  gap: 30px;
  p {
    font-size: 24px;
  }
  span {
    font-size: 32px;
  }
  div {
    display: flex;
    gap: 10px;
  }
`;
export const FooterNavstyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  a {
    font-size: 24px;
    color: #424244;
    text-decoration: none;
  }
  p {
    font-size: 32px;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  button {
    width: 225px;
    height: 54px;
    border-radius: 10px;
    border: 1px solid gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;
