import ListItem from "../../styled/item"
type ItemProps = { children: any; class: string }
function Item(props: ItemProps) {
  return (
    <ListItem className={props.class}>
      {props.children}
    </ListItem>
  )
};

export default Item;