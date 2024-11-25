import styled from "styled-components";
import { Link  as ReactLink} from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  height: 100%; 
`
const H1 = styled.h1`
  margin-top: 0;
`;
const Link = styled(ReactLink)`
  color: var(--rgb-white);
`
export {
  Main,
  H1,
  Link
}