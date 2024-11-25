import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/root";
import routes from './route';


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      routes.landing,
      routes.blog,
      routes.auth,
    ]
  }
]);

export default router;