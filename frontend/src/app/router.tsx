import { BrowserRouter, Routes, Route } from 'react-router';
import {Home} from './pages';
import Layout from './layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;