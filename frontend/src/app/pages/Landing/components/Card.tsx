import {  Card } from "../../../styled";
import ItemLink from "../../../components/Link-Item";
import style from '@/style/modules/landing.module.css';

function LandingCard() {
  return (
    <Card className={style.card}>
    <ItemLink href="/blog" className={style.item}>
       Enter the site
    </ItemLink>
    <ItemLink href="/auth/login" className="item-login">
      User Login
    </ItemLink>
    <ItemLink 
      href="/auth/register" 
      className="item-register"
    >
      Create an Account!
    </ItemLink>
  </Card>
  )
}

export default LandingCard;