import Page from "@/app/components/basic/page.tsx";
import Subscribe from "@/app/components/cards/subscribe/index.tsx";
import MenuCard from "./menu.tsx";
function HomePage() {
  return (
    <Page id="home" heading={"Welcome!"}>     
      <MenuCard />      
      <Subscribe />
    </Page>
  )
}

export default HomePage;