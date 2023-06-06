import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { FlexColumn, CustomContainer, AppText } from "../../style";
import "./index.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <FlexColumn width="10" gap="3" className="left-details">
          <a href="https://www.facebook.com/jubril.lukman.792">
        
            <FaFacebook
              color="rgb(240, 196, 248)"
              size={30}
              className="icon"
            />
          </a>
          <FaInstagram color="rgb(240, 196, 248)" size={30} className="icon" />
          <a href="https://www.linkedin.com/in/jubril-lukman">
            
            <FaLinkedin
              color="rgb(240, 196, 248)"
              size={30}
              className="icon"
            />
          </a>
          <a href="https://twitter.com/lukmanjubril2?t=8nnJp_0hf_oK1knay_uQOQ&s=08">
   
            <FaTwitter
              color="rgb(240, 196, 248)"
              size={30}
              className="icon"
            />
          </a>
          <a href="https://github.com/Jubril1464">
         
            <FaGithub
              color="rgb(240, 196, 248)"
              size={30}
              className="icon"
            />
          </a>
          <CustomContainer
            width=".1"
            height="20"
            bgColor="rgb(240,196,248)"
          ></CustomContainer>
        </FlexColumn>

        <FlexColumn width="10" gap="15" className="right-details">
          <AppText
            textSize="2"
            color="rgb(240, 196, 248)"
            className="footer-email"
          >
            Lukmanjubril2003@yahoo.com
          </AppText>
          <CustomContainer
            width=".1"
            height="20"
            bgColor="rgb(240,196,248)"
          ></CustomContainer>
        </FlexColumn>
      </div>
    </div>
  );
};
export default Footer;
