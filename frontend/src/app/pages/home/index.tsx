import Subscribe from "../../components/cards/subscribe";
import MenuCard from "./components/menu-card";
function HomePage() {
  return (
    <main className="page">
      <h1 className="page--heading">Welcome!</h1>      
      <Subscribe />
      <MenuCard />
    </main>
  )
}

export default HomePage;