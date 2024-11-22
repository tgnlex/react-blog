import { Articles, ViewArticle} from "../../../pages"
const articles: any = {
    path: 'blog/articles',
    element: <Articles/>,
    children: [ 
      {
        path: 'blog/articles/:id',
        element: <ViewArticle />
      }
    ]
};

export default articles;