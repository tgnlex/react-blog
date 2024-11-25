import sample from './lib/sample-data';
import { Main, List } from '../../../styled';
import Preview from '@/app/components/Preview';
import style from '@/style/modules/posts.module.css';
function Articles() {
  return (
    <Main>
        <h2>Recent Posts</h2>
        <section className="posts">
          <List className={style.list}>
            {sample.map((post) => (
              <Preview post={post} />
            ))}
          </List>
        </section>
    </Main>
  )
};

export default Articles;