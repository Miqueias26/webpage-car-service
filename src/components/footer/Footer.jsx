import "./Footer.css";
import Kialogo from "../../assets/img/Logo.png";
import PropTypes from "prop-types";

const FooterContent = ({ title, link1, link2, link3, text1, text2, text3 }) => {
  return (
    <>
      <div className="footer-content">
        <p>{title}</p>
        <a href={link1}>{text1}</a>
        <a href={link2}>{text2}</a>
        <a href={link3}>{text3}</a>
      </div>
    </>
  );
};
FooterContent.propTypes = {
  title: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
  link3: PropTypes.string.isRequired,
  text1: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
  text3: PropTypes.string.isRequired,
};

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="kia">
          <img src={Kialogo} alt="Kia logo" />
          <p className="moviment-text">Mooviment that inspires.</p>
          <p className="copyright">&copy; Kia USA</p>
        </div>
        <div className="footer-contents">
          <FooterContent
            title="Business"
            link1="#"
            text1="Kia Business"
            link2="#"
            text2="Customer Your Kia"
            link3="#"
            text3="Contact"
          />
        </div>
        <div className="footer-contents">
          <FooterContent
            title="Mobility Solutions"
            link1="#"
            text1="New Vehicle"
            link2="#"
            text2="Pre-Owned Kia"
            link3="#"
            text3="Kia Renting"
          />
        </div>
        <div className="footer-contents">
          <FooterContent
            title="Services"
            link1="#"
            text1="Kia Service"
            link2="#"
            text2="Technical Service "
            link3="#"
            text3="Kia EV Services"
          />
        </div>

        <div className="footer-contents">
          <FooterContent
            title="All about Us"
            link1="#"
            text1="Electrify News"
            link2="#"
            text2="Contact"
            link3="#"
            text3="Find Your Dealer"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
