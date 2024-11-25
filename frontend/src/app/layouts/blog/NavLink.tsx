import { Link } from "../../styled"
type Props = {
    children: any;
    href: string;
}
function NLink({children, href}: Props) {
  return (
      <li><Link to={href}>{children}</Link></li>
  )
}
export default NLink;