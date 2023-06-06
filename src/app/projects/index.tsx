import {
  AppText,
  CustomContainer,
  FlexRow,
  AppSpan,
  ImageWrapper,
  FlexColumn,
} from "../app-styles";
import "./index.scss";
import { FiEdit } from "react-icons/fi";
import HotRecipe from "../../assets/img/hotrecipe.png";
import Symbiote from "../../assets/img/symbiote.png";
const Projects: React.FC = () => {
  return (
    <CustomContainer topMargin="10" bottomMargin="4">
      <FlexRow justifyContent="flex-start" gap="2" bottomMargin="3">
        <AppText
          color="rgb(228, 146, 245)"
          textSize="4"
          fontWeight="400"
          className="projects-heading"
        >
          <AppSpan
            color="rgb(240, 196, 248)"
            textSize="3"
            fontWeight="500"
            rightMargin="1"
            className="projects-span"
          >
            03.
          </AppSpan>
          Somethings i've built
        </AppText>
        <CustomContainer
          width="50"
          height=".1"
          bgColor="rgb(240,196,248)"
          className="projects-divider"
        ></CustomContainer>
      </FlexRow>
      <FlexRow gap="3" className="projects-container" data-aos='zoom-in'>
        <FlexColumn gap="2" width="30" alignItems="flex-start" >
          <AppText
            color="rgb(240,196,248)"
            textSize="5"
            fontWeight="400"
            className="projects-title"
          >
            Hot Recipe
          </AppText>
          <CustomContainer
            className="text-wrapper"
            bgColor="rgb(50, 31, 86)"
            topPadding="1.5"
            leftPadding="1.5"
            rightPadding="1.5"
            bottomPadding="1.5"
            width="50"
            radius=".5"
          >
            <AppText
              color="rgb(240,196,248)"
              textSize="2"
              fontWeight="400"
              className="text-wrapper-text"
            >
              Want to learn cook but confused how to start? No need to worry
              again! A Website for over 1,000,000 recipes.
            </AppText>
          </CustomContainer>
          <FlexRow wrap="wrap" width="20" justifyContent="flex-start" gap="1" className="tools-wrapper">
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              React.js
            </AppText>
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              SCSS
            </AppText>
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              Redux
            </AppText>
            <a href="https://github.com/Jubril1464/hot-recipe">
            <FiEdit size={30} color="rgb(240,196,248)" className="edit-icon" />
            </a>
          </FlexRow>
        </FlexColumn>

        <ImageWrapper height="50" width="80">
          <a href="htpps://hot-recipe.netlify.com">
            <img src={HotRecipe} alt="" width="100%" height="100%" />
          </a>
        </ImageWrapper>
      </FlexRow>
      <FlexRow className="projects-container" topMargin="7" data-aos='zoom-in'>
        <FlexColumn gap="2" width="30" alignItems="flex-start" >
          <AppText
            color="rgb(240,196,248)"
            textSize="5"
            fontWeight="400"
            className="projects-title"
          >
            Symbiote
          </AppText>
          <CustomContainer
            className="text-wrapper"
            bgColor="rgb(50, 31, 86)"
            topPadding="1.5"
            leftPadding="1.5"
            rightPadding="1.5"
            bottomPadding="1.5"
            width="50"
            radius=".5"
          >
            <AppText
              color="rgb(240,196,248)"
              textSize="2"
              fontWeight="400"
              className="text-wrapper-text"
            >
              A Multi-Chain Launchpad like no other. Moonshots are all we do,
              Jump in
            </AppText>
          </CustomContainer>
          <FlexRow wrap="wrap" width="20" justifyContent="flex-start" gap="1" className="tools-wrapper">
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              React
            </AppText>
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              SCSS
            </AppText>
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              Typescript
            </AppText>
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              MUI
            </AppText>
            <AppText
              textSize="2.2"
              fontWeight="500"
              color="rgb(228, 146, 245)"
              className="tools-text"
            >
              Bootstrap
            </AppText>
            <a href="https://github.com/Jubril1464/genesis-shards-task">
            <FiEdit size={30} color="rgb(240,196,248)" className="edit-icon" />
            </a>
          </FlexRow>
        </FlexColumn>
        <ImageWrapper height="50" width="80" >
          <a href="https://symbiote-task.netlify.app/">
          <img src={Symbiote} alt="" width="100%" height="100%" />
         </a>
        </ImageWrapper>
      </FlexRow>
    </CustomContainer>
  );
};
export default Projects;
