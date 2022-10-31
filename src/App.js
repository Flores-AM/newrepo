// import logo from "./logo.svg";
// import "./App.scss";
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Info from "./components/Info";
import Portafolio from "./components/Portafolio";
import Contacto from "./components/Contacto";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Info />
      <Portafolio />
      <Contacto />
    </div>
  );
}

export default App;
