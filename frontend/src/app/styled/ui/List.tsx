import styled from "styled-components";

const Base = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0.4em;
`

const List = styled(Base)`
  flex-direction: column;
`

const InlineList = styled(Base)`
  flex-direction: row;
`
export {List, InlineList};