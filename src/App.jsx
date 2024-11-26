import "./styles/Global.css";
import Header from "./components/header/Header";
import Central from "./components/central/Central";
import Footer from "../src/components/footer/Footer";

function App() {
  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div className="main-content">
        <Central />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
