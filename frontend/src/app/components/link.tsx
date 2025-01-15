interface ItemProps {
  href: string;
  text: string;
  class?: string;
  style?: any;
}
function Link (props: ItemProps) {
  const item = props.class || "item"
  let styles: any = {};
  if (props.style) styles = props.style;

  return (
    <li style={styles} className={item}>
        <a href={props.href}>{props.text}</a>
    </li>
  )
};

export default Link