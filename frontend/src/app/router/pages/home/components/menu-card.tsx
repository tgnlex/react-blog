import { CardHead } from "@@/components/cards/parts";
import { Menu } from "@/app/ui/lists";
import Card from "@/app/ui/card";
import Link from "@@/components/atoms/items/link.tsx";
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