import { AppText, CustomContainer,FlexRow,AppSpan, ImageWrapper } from "../app-styles";
import './index.scss';

const Projects:React.FC = () => {
    return (
        <CustomContainer topMargin='10' bottomMargin='4'>
          <FlexRow justifyContent="flex-start" gap="2">
                    <AppText color="rgb(228, 146, 245)" textSize="4" fontWeight="400" className="projects-heading"><AppSpan color="rgb(240, 196, 248)" textSize="3" fontWeight="500" rightMargin="1" className="projects-span">03.</AppSpan>Somethings i've built</AppText>
                        <CustomContainer width='50' height='.1'bgColor='rgb(240,196,248)' className="projects-divider"></CustomContainer>
                    </FlexRow>
                    <FlexRow>
                        <CustomContainer className="text-wrapper" bgColor="rgb(50, 31, 86)" topPadding="1.5" leftPadding="1.5" rightPadding="1.5" bottomPadding="1.5" width="50" radius=".5">
                            <AppText color="rgb(240,196,248)" textSize="2" fontWeight="400">Want to learn cook but confused how to start? No need to worry again! A Website for over 1,000,000 recipes.</AppText>
                        </CustomContainer>
                        <ImageWrapper>
                            <img src="" alt="" />
                        </ImageWrapper>
                    </FlexRow>

        </CustomContainer>
    )
}
export default Projects