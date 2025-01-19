import { BrowserRouter, Routes, Route } from 'react-router';
import {Home, Blog, About} from './pages';
import Layout from './layout';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/about" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;