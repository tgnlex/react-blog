type PageProps = { 
  heading: string;
  children?: any; 
}
function Page(props: PageProps) {
  return (
    <main className="page">
      <h1 className="page--heading">{props.heading}</h1>
      {props.children}
    </main>
  )
};
export default Page;