import styled from "styled-components";
import { DEFAULT_PAD } from "@/library/css/constants";
import type { Pad } from "@/library/types";
const Card = styled.div<{pad?: Pad}>`
  --default-pad: 1em;
  padding: ${props => props.pad || DEFAULT_PAD };
  max-width: fit-content;
  margin-inline: auto;
`;

export default Card;