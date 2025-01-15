import type { Pad } from "../../../library/css/types";
import { DEFAULT } from "../../../library/css/constants";
import styled from "styled-components";
import mixins from "../../../library/css/mixins";
type ListProps = { pad?: Pad; inline?: boolean };
type MenuProps = { color?: string };

const List = styled.ul<ListProps>`
  --default: ${props => props.pad || 0};
  ${props => props.inline ? mixins.inline : mixins.column }
  ${mixins.list};
  padding: ${DEFAULT};

`;

const Menu = styled.ul<MenuProps>`
  --default: rgba(255, 255, 255, 1);
  color: ${props => props.color || DEFAULT }
  display: flex;
  flex-direction: column;
`;

export {List, Menu}