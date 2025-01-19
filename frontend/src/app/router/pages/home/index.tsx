import Page from "@/app/components/page.tsx";
import Subscribe from "@@/components/cards/subscribe";
import MenuCard from "./components/menu-card.tsx";
function HomePage() {
  return (
    <Page heading={"Welcome!"}>     
      <MenuCard />      
      <Subscribe />
    </Page>
  )
}

export default HomePage;