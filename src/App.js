import "./css/bootstrap.css";
import "./css/master.css";

import NavBar from "./NavBar";
import Hero from "./Hero";
import Skills from "./Skills";
import Logros from "./Logros";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Skills />
      <Logros />
      <Footer />
    </div>
  );
}

export default App;
