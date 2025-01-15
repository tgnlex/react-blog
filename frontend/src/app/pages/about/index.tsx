

function AboutPage() {
    return (
      <main className={"about"}>
        <h1>About This Site</h1>
        <p>
          This is a blog im creating to talk about<br/>
          my experiences as a programmer, and discuss<br/>
          some of the thigns Ive learned along the way.
          To start, heres some of the technologies
          that I enjoy working with:
        </p>
        <div className="about--languages">
        <h3 className="languages--heading">Programming Languages:</h3> 
        <ul className="languages--list">
          <li className="language-item">1. Typescript</li> 
          <li className="language-item">2. Zig</li>
          <li className="language-item">3. Lua</li> 
          <li className="language-item">3. C</li>
          <li className="language-item">4. Elixir</li> 
          <li className="language-item">5. Perl</li> 
        </ul>
        </div>
      </main>
    )
}

export default AboutPage;