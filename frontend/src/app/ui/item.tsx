import styled from "styled-components";
const ListItem  = styled.li<{link?: boolean}>`
  text-decoration: ${props => props.link ? "underline" : "none"}
`;

export default ListItem;