import { DEFAULT_SIZE } from "../../../library/css/constants";
import styled from "styled-components";
type BoxProps = {
  width?: string | number;
  height?: string | number;
  size?: string | number;
  bg?: string;

}
const Box = styled.div<BoxProps>`
  --default-size: 1em;
  width: ${props => props.width || props.size || DEFAULT_SIZE}
  height: ${props => props.height || props.size || DEFAULT_SIZE}
`;

export default Box;