import { useEffect, useState } from "react";
import ModalButton from "../../../utils/ModalButton";
import "./HeaderCentral.css";

const HeaderCentral = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className="header-down"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        <h1>TOP MODELS KIA</h1>
        <div className="buttons">
          <div className="buttons-left">
            <ModalButton />
            <a
              className="test-drive"
              href="https://www.kia.com/es/prueba-un-kia/#/"
            >
              Discovery
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderCentral;
