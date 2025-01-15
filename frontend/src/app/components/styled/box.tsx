import { DEFAULT } from "../../../library/css/constants";
import styled from "styled-components";
type BoxProps = {
  width?: string | number;
  height?: string | number;
  size?: string | number;
  bg?: string;

}
const Box = styled.div<BoxProps>`
  --default: 1em;
  --width: ${props => props.width || props.size || DEFAULT}
  --height: ${props => props.height || props.size || DEFAULT}
  width: var(--width);
  height: var(--height);
`;

export default Box;