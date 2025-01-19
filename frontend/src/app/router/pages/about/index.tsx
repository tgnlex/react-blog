import Page from "@/app/components/page";
import Item from "@/app/components/atoms/items/basic";
import style from "./css/page.module.css"

function AboutPage() {
    return (
      <Page heading={"About This Site"}>
        <p className={"p-1"}>
          This is a blog im creating to talk about<br/>
          my experiences as a programmer, and discuss<br/>
          some of the thigns Ive learned along the way.<br/>
          To start, heres some of the technologies<br/>
          that I enjoy working with:
        </p>
        <div className="about--languages">
        <h3 className="languages--heading">Programming Languages:</h3> 
        <ul className={style.list}>
          <Item class="language-item">1. Typescript</Item> 
          <Item class="language-item">2. Zig</Item>
          <Item class="language-item">3. Lua</Item> 
          <Item class="language-item">3. C</Item>
          <Item class="language-item">4. Elixir</Item> 
          <Item class="language-item">5. Perl</Item> 
        </ul>
        </div>
      </Page>
    )
}

export default AboutPage;