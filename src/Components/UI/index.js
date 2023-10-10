import styled from "styled-components";
import { fontFira, colorWhite, fontPlay } from "./variables";

export const Title = styled.p`
  font-family: ${fontFira};
  color: ${colorWhite};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 90px;
  letter-spacing: 4px;
`;

export const SubTitle = styled.p`
  font-family: ${fontPlay};
  color: ${colorWhite};
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-size: 24px;
  line-height: normal;
`;




