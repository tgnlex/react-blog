import type { Pad } from "@/library/types";
import { DEFAULT_COLOR, DEFAULT_PAD } from "@/library/css/constants";
import styled from "styled-components";
import mixins from "@/library/css/mixins";
type ListProps = { pad?: Pad; inline?: boolean };
type MenuProps = { color?: string };

const List = styled.ul<ListProps>`
  ${props => props.inline ? mixins.inline : mixins.column }
  padding: ${props => props.pad || DEFAULT_PAD};
  ${mixins.list};
`;

const Menu = styled.ul<MenuProps>`
  color: ${props => props.color || DEFAULT_COLOR }
  display: flex;
  flex-direction: column;
  padding: ${DEFAULT_PAD}
`;

export {List, Menu}