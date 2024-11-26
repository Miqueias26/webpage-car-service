import "./Card.css";
import PropTypes from "prop-types";
import { IoLocationSharp } from "react-icons/io5";
import { FaCarBattery } from "react-icons/fa6";
import { FaCarAlt } from "react-icons/fa";

const CardContent = ({ link, text }) => {
  return (
    <>
      <div className="card-content">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </div>
    </>
  );
};
CardContent.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const Card = () => {
  return (
    <>
      <div className="cardOf">
        <div className="card1">
          <CardContent
            text={<>EV-OLUTION 2025</>}
            link="https://www.youtube.com/"
          />
        </div>
        <div className="card2">
          <FaCarAlt />
          <br />
          <CardContent link="https://www.youtube.com/" text="Build " />
        </div>
        <div className="card3">
          <FaCarBattery />
          <br />
          <CardContent link="https://www.youtube.com/" text="Maintenance" />
        </div>
        <div className="card4">
          <IoLocationSharp />
          <br />
          <CardContent link="https://www.youtube.com/" text="Business place" />
        </div>
        <div className="card5">
          <CardContent
            link="https://www.youtube.com/"
            text={<>TECHNOLOGY OF THE YEAR</>}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
