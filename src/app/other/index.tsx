import { CustomContainer, AppText, FlexRow, FlexColumn } from "../../style";
import Stack from "../../assets/svg/stack.svg";
import "./index.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { projects } from "../../utils/utility";

const Other = () => {
  return (
    <CustomContainer topMargin="10" bottomMargin="4">
      <AppText
        color="rgb(240, 196, 248)"
        textSize="5"
        align="center"
        fontWeight="500"
        className="other-heading"
      >
        Other NoteWorthy Projects
      </AppText>
      <FlexRow gap="1" topMargin="2">
        <AppText
          color="rgb(228, 146, 245)"
          textSize="2.2"
          className="sub-text text-1"
          fontWeight="400"
        >
          Projects
        </AppText>
        <AppText
          color="rgb(228, 146, 245)"
          textSize="2.2"
          className="sub-text text-2"
          fontWeight="400"
        >
          Articles
        </AppText>
        <AppText
          color="rgb(228, 146, 245)"
          textSize="2.2"
          className="sub-text text-3"
          fontWeight="400"
        >
          Open Source
        </AppText>
      </FlexRow>

      <FlexRow gap="3" topMargin="6" wrap="wrap">
        {projects.map((item: any, index: number) => (
          <FlexColumn
            topPadding="2"
            bottomPadding="2"
            leftPadding="2"
            rightPadding="2"
            bgColor="rgb(50, 31, 86)"
            width="30"
            radius="1"
            alignItems="flex-start"
            justifyContent="flex-start"
            gap="3"
            height="50"
            className="other-cards"
            key={index}
            data-aos="zoom-in"
          >
            <FlexRow justifyContent="space-between">
              <a href={item.github}>
                <AiOutlineGithub size={30} color="rgb(240, 196, 248)" />
              </a>
              {/* <img src={Stack} alt="stack" height="30px" width="30px" /> */}
              <a href={item.link}>
                <BiLinkExternal size={30} color="rgb(240, 196, 248)" />
              </a>
            </FlexRow>
            <AppText
              textSize="4"
              fontWeight="400"
              color="rgb(240, 196, 248)"
              className="other-cards-name"
            >
              {item.name}
            </AppText>
            <AppText
              textSize="2.5"
              color="rgb(228, 146, 245)"
              fontWeight="300"
              className="other-cards-description"
            >
              {item.description}
            </AppText>
            <FlexRow justifyContent="flex-start" gap="2">
              {item.tools.map((skills: any, index: number) => (
                <AppText
                  color="rgb(240, 196, 248)"
                  textSize="2.5"
                  fontWeight="400"
                  key={index}
                  className="card-skills"
                >
                  {skills}
                </AppText>
              ))}
            </FlexRow>
          </FlexColumn>
        ))}
      </FlexRow>
    </CustomContainer>
  );
};
export default Other;
