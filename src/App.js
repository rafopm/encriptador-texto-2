import "./App.css";
import Encriptador from "./components/encriptador";
import LogoAlura from "./images/logo-aluraespanhol.svg";
import LogoONE from "./images/logo_one.webp";

function App() {
  return (
    <div className="App">
      <div className="navigator">
        <img className="logo-alura" src={LogoAlura} alt="Logo Alura" />
        <img className="logo-one" src={LogoONE} alt="Logo ONE" />
      </div>
      <Encriptador />

    </div>
  );
}

export default App;
