import { useState } from "react";
import { AppLink, FlexRow, ScreenTitle } from "../../style";
import "./index.scss";
import DownloadButton from "../download";
import { useWindowScroll } from "../../hooks/useWindowScroll";

const Navigation: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const {scrollHeight} = useWindowScroll()

  return (
    <div className={`nav-bar ${scrollHeight > 700 ? 'show-nav': ''}`}>
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
        <ScreenTitle
          textSize="5"
          color="rgb(100, 255, 218)"
          fontWeight="600"
          className="nav-title"
        >
          Jubril
        </ScreenTitle>
        <ul className={`nav-items ${checked && "active"}`}>
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
          <label htmlFor="navi-toggle" className={`navigation__button ${scrollHeight > 700 ? 'show-bar':''}`}>
            <span className={`navigation__icon`}>&nbsp;</span>
          </label>
        </div>
      </FlexRow>
    </div>
  );
};
export default Navigation;
