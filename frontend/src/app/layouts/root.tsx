import { Outlet } from "react-router-dom";
import { H1 } from "../styled/base";
function RootLayout() {
    return (
      <>
          <Outlet />     
      </>
    )
}

export default RootLayout;