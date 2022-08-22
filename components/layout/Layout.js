import MainFooter from "./MainFooter";
import MainNav from "./MainNav";

function Layout(props) {
  return (
    <>
      <MainNav />
      <main>{props.children}</main>
      <MainFooter />
    </>
  );
}

export default Layout;
