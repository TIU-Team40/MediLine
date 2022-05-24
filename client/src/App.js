import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import './styles/global.css'
import ProductListing from "./pages/ProductListing/ProductListing";
function App() {
  return (
    <div className="container">
      <Navbar />
         {/* <Home/> */}
          <ProductListing/>
      <Footer/> 
    </div>
  );
}

export default App;
