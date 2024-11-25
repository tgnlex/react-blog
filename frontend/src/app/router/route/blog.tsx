import { BlogHome, About, Info, Charity, } from "../../pages";
import BlogLayout from "../../layouts/blog";
import articles from "./blog/articles";

const blog: any = {
    element: <BlogLayout/>,
    children: [
      {
        path: "blog",
        element: <BlogHome />
      },
      articles,
      {
        path: "about",
        element: <About/>,
      },
      {
        path: 'info',
        element: <Info/>
      },
      {
        path: 'charity',
        element: <Charity />
      },      
      articles
    ]
  }

  export default blog;