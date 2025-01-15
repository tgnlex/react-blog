import type { Pad } from "../../../library/types";
import { DEFAULT_COLOR, DEFAULT_PAD } from "../../../library/css/constants";
import styled from "styled-components";
import mixins from "../../../library/css/mixins";
type ListProps = { pad?: Pad; inline?: boolean };
type MenuProps = { color?: string };

const List = styled.ul<ListProps>`
  --default-pad: ${props => props.pad || 0};
  ${props => props.inline ? mixins.inline : mixins.column }
  ${mixins.list};
  padding: ${DEFAULT_PAD};

`;

const Menu = styled.ul<MenuProps>`
  --default-color: rgba(255, 255, 255, 1);
  color: ${props => props.color || DEFAULT_COLOR }
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export {List, Menu}