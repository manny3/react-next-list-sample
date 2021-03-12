import Navar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return ( 
    <div className="content">
      <Navar />
      { children }
      <Footer />
    </div>  
  );
}
 
export default Layout;