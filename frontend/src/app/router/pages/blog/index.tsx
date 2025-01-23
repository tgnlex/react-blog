import Page from "@/app/components/basic/page";
import { List } from "@@/ui";


function BlogPage() {
  return (
    <Page id="blog" heading="Recent Posts">
      <List className={"posts"}>
          
      </List>
    </Page>
  )
};

export default BlogPage;