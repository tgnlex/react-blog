import { BrowserRouter, Routes, Route } from 'react-router';
import {Home, Blog} from './pages';
import Layout from './layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route index path="/" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;