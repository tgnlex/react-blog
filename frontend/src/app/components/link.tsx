import Item from "./styled/item";

type Props = { href: string; text: string; css?: string; class?: string; };
let item: string = "item"
let styles: any = {};

function Link (props: Props) {
  if (props.class) item = props.class;
  if (props.css) styles = props.css;
  return (
    <Item style={styles} className={item}>
        <a className="link" href={props.href}>{props.text}</a>
    </Item>
  )
};

export default Link