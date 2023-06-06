import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { AppSpan, AppText, FlexColumn, FlexRow } from "../../style";
import './index.scss'

export const MobileFooter: React.FC = () => {
  return (
    <FlexColumn className="mobile-footer" topMargin="6" bottomMargin="4">
      <FlexRow gap="3" className="mobile-footer-icons">
        <a href="https://www.facebook.com/jubril.lukman.792">
          <FaFacebook color="rgb(240, 196, 248)" size={30} className="icon" />
        </a>
        <FaInstagram color="rgb(240, 196, 248)" size={30} className="icon" />
        <a href="https://www.linkedin.com/in/jubril-lukman">
          <FaLinkedin color="rgb(240, 196, 248)" size={30} className="icon" />
        </a>
        <a href="https://twitter.com/lukmanjubril2?t=8nnJp_0hf_oK1knay_uQOQ&s=08">
          <FaTwitter color="rgb(240, 196, 248)" size={30} className="icon" />
        </a>
        <a href="https://github.com/Jubril1464">
          <FaGithub color="rgb(240, 196, 248)" size={30} className="icon" />
        </a>
      </FlexRow>

      <AppText
        className="mobile-footer-text"
        color="rgb(228, 146, 245)"
        textSize="2"
        topMargin="6"
        align="center"
        fontWeight="400"
      >
        Design inspired by Ridwan Kolawole's portfolio. Redesigned and built by
        <AppSpan color="rgb(100, 255, 218)" textSize="2" fontWeight="400">
         &nbsp; Jubril
        </AppSpan>
        .
      </AppText>
    </FlexColumn>
  );
};
