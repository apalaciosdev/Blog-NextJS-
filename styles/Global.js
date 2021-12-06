import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";
import styled from "styled-components";


export const BodyGen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`


export const GeneralDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: ${px2vw(600, 320)};
  min-height: ${px2vw(200, 320)};
  padding: ${px2vw(20)};
  /* background-color: ${props => props.bgColor}; */
  height: 100%;

  @media (min-width: 1024px) {
    width: ${px2vw(600, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 168px) {
    width: ${px2vw(900)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;


export const BodyDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #f4f4f2;
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .1);
  width: ${px2vw(600, 320)};
  padding: 40px;

  @media (min-width: 1024px) {
  width: ${px2vw(600, 768)};
  min-height: ${px2vw(200, 768)};
  height: 100%;
  padding: ${px2vw(50)};
  }

  @media (min-width: 168px) {
    width: ${px2vw(900)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

