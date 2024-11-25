import type { Post } from "@/types/post"
import { Row } from "../styled"
import style from '@/style/modules/preview.module.css';
interface Props {
  post: Post
}

function Preview({post}: Props) {
  return (
    <li id="preview" className={style.preview} key={post.id}>
      <h3 id="title" className={style.title}>{post.title}</h3>
      <Row className={style.row}>
        <p id="views">views: {post.views}</p>
        <p id="likes">likes: {post.likes}</p>
      </Row>
    </li>
  )
}

export default Preview;