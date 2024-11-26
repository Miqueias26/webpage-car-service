import "./Header.css";
import NavOf from "./navbar/navbar";
import backgroundVideo from "../../../src/assets/video/Kia2.webm";
import HeaderCentral from "./headerCentral/HeaderCentral";

// Caminho para subpasta
// Adiciona o arquivo diretamente no mesmo diretório
// Caminho correto para o mesmo diretório

const Header = () => {
  return (
    <>
      <header className="Header">
        <video className="background-video" autoPlay muted>
          <source src={backgroundVideo} type="video/webm" />
          Seu navegador não suporta este formato de vídeo.
        </video>
        <div>
          <NavOf />
        </div>
        <div>
          <HeaderCentral />
        </div>
      </header>
    </>
  );
};

export default Header;
