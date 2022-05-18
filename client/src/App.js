import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import HeroBanner from "./components/HeroBanner";
import './styles/global.css'
function App() {
  return (
    <div className="container">
      <Navbar />
        <Home/>
     
      <Footer/>
    </div>
  );
}

export default App;
