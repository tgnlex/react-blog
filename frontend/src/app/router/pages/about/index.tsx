import Page from "@/app/components/basic/page";
import Languages from "./components/languages";
import Introduction from "./components/intro";
function AboutPage() {
    return (
      <Page id="about" heading={"About This Site"}>
        <Introduction />
        <Languages />
      </Page>
    )
}

export default AboutPage;