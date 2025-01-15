import Link from "../../components/link"

function HomePage() {
  return (
    <main>
      <h1>Welcome!</h1>
      <div className="menu--card">
        <h2 className="menu--heading">Click here to login</h2>
        <ul className="menu--list">
          <Link href="/" text="Home" />
          <Link href="/blog" text="Recent Articles" /> 
          <Link href="/info" text="Information and Resources"/>
          <Link href="/charity" text="Charity Funds" />
        </ul>
      </div>
    </main>
  )
}

export default HomePage;