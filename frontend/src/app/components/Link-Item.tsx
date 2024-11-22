import {Item, Link} from '../styled';
interface LinkProps {
  href: string;
  id?: string;
  className?: string;
  linkclass?: string;
  linkstyle?: any;
  style?: any;
  children?: any;
}

function ItemLink({id, style, children, className, linkstyle, linkclass, href}: LinkProps) {
  return (
    <Item id={id} style={style} className={className}>
      <Link to={href} style={linkstyle} className={linkclass}>
       {children}
      </Link>
    </Item>
  )
};

export default ItemLink;