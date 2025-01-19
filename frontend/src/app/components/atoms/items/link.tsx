import ListItem from "../../styled/item";

type Props = { href: string; text: string; css?: string; class?: string; };
let item: string = "item"
let css: any = {};

function Link (props: Props) {
  if (props.class) item = props.class;
  if (props.css) css = props.css;
  return (
    <ListItem link style={css} className={item}>
        <a className="link" href={props.href}>{props.text}</a>
    </ListItem>
  )
};

export default Link