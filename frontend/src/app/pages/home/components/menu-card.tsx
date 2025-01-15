import { CardHead } from "../../../components/parts";
import { Menu } from "../../../components/styled/lists";
import Card from "../../../components/styled/card";
import Link from "../../../components/atomic/items/link.tsx";
function MenuCard() {
  return (
    <Card className="menu--card">
      <CardHead text={"Home Directory"} />
      <Menu className="directory">
        <Link href="/" text="Home" />
        <Link href="/blog" text="Recent Articles" /> 
        <Link href="/info" text="Information and Resources"/>
        <Link href="/charity" text="Charity Funds" />
      </Menu>
    </Card>
  )
};

export default MenuCard;