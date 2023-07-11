import { useState } from "react";
import { AppLink, FlexRow, ImageWrapper, ScreenTitle } from "../../style";
import "./index.scss";
import DownloadButton from "../download";
import { useWindowScroll } from "../../hooks/useWindowScroll";
import { Link } from "react-scroll";
import Logo from '../../assets/img/logo.png'

const Navigation: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const { scrollHeight } = useWindowScroll();

  function handleClose() {
     setChecked(false)
  }

  return (
    <div className={`nav-bar ${scrollHeight > 700 ? "show-nav" : ""}`}>
      <FlexRow
        justifyContent="space-between"
        leftPadding="10"
        rightPadding="10"
        topPadding="3"
        bottomPadding="3"
        bgColor="rgb(20 9 40)"
        className="nav-container"
        height="8"
      >
        <div  className="logo-wrapper">
       <img src={Logo} alt="" />
        </div>
       
        <ul className={`nav-items ${checked && "active"}`}>
        <Link
              activeClass="activ"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
            >
          <li className="nav-item">
            
              <AppLink
                textSize="2.5"
                color="rgb(240, 196, 248)"
                fontWeight="400"
                decoration="none"
              >
                01. About
              </AppLink>
              </li>
            </Link>
            <Link
              activeClass="activ"
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}

            >
          <li className="nav-item">
           
              <AppLink
                textSize="2.5"
                color="rgb(240, 196, 248)"
                fontWeight="400"
                decoration="none"
              >
                02. Experience
              </AppLink>
              </li>
            </Link>
            <Link
              activeClass="activ"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}

            >
          <li className="nav-item">
            
              <AppLink
                textSize="2.5"
                color="rgb(240, 196, 248)"
                fontWeight="400"
                decoration="none"
              >
                03. Projects
              </AppLink>
              </li>
            </Link>
            <Link
              activeClass="activ"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={handleClose}
              >
          <li className="nav-item">
            
              <AppLink
                textSize="2.5"
                color="rgb(240, 196, 248)"
                fontWeight="400"
                decoration="none"
              >
                04. Contact
              </AppLink>
              </li>
            </Link>
         
          <li className="nav-item resume">
            <DownloadButton />
          </li>
        </ul>
        <div className="nav__icon">
          <input
            type="checkbox"
            className={`navigation__checkbox`}
            id="navi-toggle"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label
            htmlFor="navi-toggle"
            className={`navigation__button ${
              scrollHeight > 700 ? "show-bar" : ""
            }`}
          >
            <span className={`navigation__icon`}>&nbsp;</span>
          </label>
        </div>
      </FlexRow>
    </div>
  );
};
export default Navigation;
