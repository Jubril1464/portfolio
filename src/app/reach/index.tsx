import {
  AppLink,
  AppSpan,
  AppText,
  CustomContainer,
  FlexColumn,
  ScreenTitle,
} from "../app-styles";
import "./index.scss";
const Reach: React.FC = () => {
  return (
    <FlexColumn className="reach" topMargin="15" gap="2" data-aos='zoom-in'>
      <AppText
        color="rgb(228, 146, 245)"
        className="reach-title"
        textSize="3.5"
        fontWeight="400"
      >
        <AppSpan
          color="rgb(240, 196, 248)"
          textSize="3"
          className="reach-title-span"
          fontWeight="500"
        >
          04.&nbsp;
        </AppSpan>
        Wanna reach me?
      </AppText>
      <ScreenTitle
        color="rgb(240, 196, 248)"
        textSize="8"
        fontWeight="600"
        className="reach-title-2"
      >
        Get In Touch
      </ScreenTitle>
      <AppText
        color="rgb(228, 146, 245)"
        textSize="2.7"
        fontWeight="400"
        width="100"
        align="center"
        className="reach-description"
      >
        I am currently open to job opportunities. If you wanna reach me, be part
        of your team or just say hi, click the button below or send an email to
        <AppSpan
          color="rgb(100, 255, 218)"
          textSize="2.7"
          fontWeight="400"
          className="reach-description-span"
        >
          &nbsp;lukmanjubril2003@yahoo.com&nbsp;
        </AppSpan>
        and ~let's make the world a better place to live!
      </AppText>

      <AppLink href="mailto:lukmanjubril2003@yahoo.com" borderColor="rgb(228, 146, 245)" decoration="none" textSize="3.5" fontWeight="300" color="rgb(240, 196, 248)" topPadding="1.2" leftPadding="2" rightPadding="2" bottomPadding="1.2" bottomMargin="2" className="btn-hello" topMargin="3">Say Hello</AppLink>
    </FlexColumn>
  );
};

export default Reach;
