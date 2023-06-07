import { AppSpan, AppText, CustomContainer, FlexColumn, FlexRow, AbsoluteContainer} from "../app-styles"
import {BsPlay} from 'react-icons/bs'
import './index.scss'
const About:React.FC = () => {
               return(
                <CustomContainer topMargin="10" id="about">
                    <FlexRow justifyContent="flex-start" gap="2">
                    <AppText color="rgb(228, 146, 245)" textSize="4" fontWeight="400" className="about-heading"><AppSpan color="rgb(240, 196, 248)" textSize="3" fontWeight="500" rightMargin="1" className="about-span">01.</AppSpan>About</AppText>
                        <CustomContainer width='50' height='.1'bgColor='rgb(240,196,248)' className="about-divider"></CustomContainer>
                    </FlexRow>
                        
                   <FlexRow justifyContent="space-between" topMargin="3" className="about-flex">
                    <FlexColumn alignItems="flex-start" gap="2" width="50" className="about-text-container" data-aos='fade-right' data-aos-offset='300' data-aos-easing='ease-in-out' data-aos-duration='500'>
                        <AppText textSize="2.5" fontWeight="400" className="about-text">Hello! I'm Jubril  🤓, a Frontend Developer based in Nigeria 🇳🇬</AppText>
                        <AppText textSize="2.5" fontWeight="400" className="about-text">A dedicated and detail-oriented developer, who understands the importance of staying up-to-date with the latest industry trends and best practices.</AppText>
                        <AppText textSize="2.5" fontWeight="400" className="about-text">I currently work with the following technologies to address problems digitally:</AppText>
                    </FlexColumn>
                    <CustomContainer height="50" width="50" className="about-img-container" data-aos='fade-left' data-aos-duration='600'>

                        <AbsoluteContainer height="40" width="40" className="about__img-wrapper" radius="1">

                        </AbsoluteContainer>


                        <AbsoluteContainer height="40" width="40" radius="1" top="2" left="2" className="absolute-container"></AbsoluteContainer>


                    </CustomContainer>
                   </FlexRow>
                   <FlexRow>
                   

                   </FlexRow>
                 <div className="about-grid" data-aos='slide-up'>
                    <FlexRow gap="1" justifyContent="flex-start"><BsPlay color="rgb(228, 146, 245)" size={40} className='about-skills-icon'/> <AppText className="about-skills" color="rgb(100, 255, 218)" textSize="2.5" fontWeight="400">Javascript</AppText></FlexRow>
                    <FlexRow gap="1" justifyContent="flex-start"><BsPlay color="rgb(228, 146, 245)" size={40} className='about-skills-icon'/> <AppText className="about-skills" color="rgb(100, 255, 218)" textSize="2.5" fontWeight="400">Typescript</AppText></FlexRow>
                    <FlexRow gap="1" justifyContent="flex-start"><BsPlay color="rgb(228, 146, 245)"size={40} className='about-skills-icon'/> <AppText className="about-skills" color="rgb(100, 255, 218)" textSize="2.5" fontWeight="400">HTML & SCSS</AppText></FlexRow>
                    <FlexRow gap="1" justifyContent="flex-start"><BsPlay color="rgb(228, 146, 245)"size={40} className='about-skills-icon'/> <AppText className="about-skills" color="rgb(100, 255, 218)" textSize="2.5" fontWeight="400">React</AppText></FlexRow>
                    <FlexRow gap="1" justifyContent="flex-start"><BsPlay color="rgb(228, 146, 245)"size={40} className='about-skills-icon'/> <AppText className="about-skills" color="rgb(100, 255, 218)" textSize="2.5" fontWeight="400">Redux</AppText></FlexRow>
                    <FlexRow gap="1" justifyContent="flex-start"><BsPlay color="rgb(228, 146, 245)"size={40} className='about-skills-icon'/> <AppText className="about-skills" color="rgb(100, 255, 218)" textSize="2.5" fontWeight="400">Tailwind CSS</AppText></FlexRow>
                 </div>
                 <CustomContainer height="42" width="42"  className="about-img-container about-mobile-img" data-aos='zoom-in'>
                     <AbsoluteContainer height="40" width="40" className="about__img-wrapper" radius="1"></AbsoluteContainer>
                     <AbsoluteContainer height="40" width="40" radius="1" top="2" left="2" className="absolute-container"></AbsoluteContainer>
                   </CustomContainer>
                </CustomContainer>
               )
}
export  default About