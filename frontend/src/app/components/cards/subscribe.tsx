import SubscribeForm from "../forms/subscribe"
import Card from "../styled/card"
import { CardFoot, CardHead } from "./parts"
const data = {
  header: "Subscribe for updates!",
  footer: "Email updates are sent out on a bi weekly basis."
}
function Subscribe() {
  return (
    <Card id="subscribe" className="subscribe--card">
      <CardHead text={data.header} />
      <SubscribeForm />
      <CardFoot text={data.footer} />
    </Card>
  )
};

export default Subscribe;