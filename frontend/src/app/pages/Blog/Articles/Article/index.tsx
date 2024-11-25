import { useState } from "react";
import sample from "../lib/sample-data";
import { Link } from "react-router-dom";
import { Main } from "../../../../styled";
interface ArticleType {
  id:  number; 
  title: string;
  content: string;
  views: number;
  likes: number;
}

function ViewArticle() {
  const [article, setArticle] = useState<ArticleType | null>(null);
  setArticle(sample[1]);

  if (article) {  
    let prev = article.id - 1;
    let next = article.id + 1;
    return (
      <Main>
        <article className='article-container'>
          <h2 className="articleh-title">
            {article.title}
          </h2>
          <p className="article-content">
            {article.content}
          </p>
        </article>
        <section id="post-navigator"> 
           <div style={{display: 'flex', flexDirection: 'row'}}>
              <div id="link-wrapper" className="link-wrapper">
                <Link className="link" to="/blog/posts">Go Back</Link>
              </div> 
              <div id="article-nav-btns" className="row" style={{display: 'flex', flexDirection: 'row'}}>
                <button id="article-prev" type="button" onClick={() => setArticle(sample[prev])}>Previous Post</button>
                <button id="article-next" type="button" onClick={() => setArticle(sample[next])}>Next Post</button>
              </div>
          </div>
        </section>
      </Main> 
    )   
  }
};

export default ViewArticle;