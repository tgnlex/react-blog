import Header from "./header";
import Navbar from "./navbar";
type Props = { children?: any };

function Layout(props: Props) {
  return (
    <>
      <Header />
      <Navbar />
      {props.children}
    </>
  )
};

export default Layout;