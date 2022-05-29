import "bootstrap/dist/css/bootstrap-grid.css";
import "feathercss/dist/feather.min.css";
import "./css/master.css";

import NavBar from "./NavBar2";
import Hero from "./Hero";
import Skills from "./Skills";
import Logros from "./Logros";
import Footer from "./Footer";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Menu />
      <Hero />
      <Skills />
      <Logros />
      <Footer />
    </div>
  );
}

export default App;
