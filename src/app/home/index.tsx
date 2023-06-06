import { useEffect } from "react"
import { AppLink, AppText, CustomContainer, FlexColumn, FlexRow, ImageWrapper, ScreenTitle } from "../app-styles"
import './index.scss'
import Homellis from '../../assets/img/homeills.png'
import About from "../about"
import Experience from "../experience"
import Projects from "../projects"
import Other from "../other"
import Reach from "../reach"
import { MobileFooter } from "../../components/mobile-footer"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Home:React.FC = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    },[])
    return(
        <CustomContainer className="hero-container" rightPadding="18" leftPadding="18">
           <div className="flex-container" data-aos='zoom-in-up' data-aos-duration='600'>
           <FlexColumn width="50" gap="5" className="flex">
            <CustomContainer>
            <AppText color="rgb(228, 146, 245)" textSize="2" fontWeight="600">Hi, my name is</AppText>
            <AppText color="rgb(240, 196, 248)" textSize="5" fontWeight="400" className="hero-name" >Lukman Jubril</AppText>
            <ScreenTitle color="rgb(240, 196, 248)" textSize="4" fontWeight="300" className="hero-title">I use technology to build for humans.</ScreenTitle>

            </CustomContainer>
            

            <AppText textSize="3" fontWeight="400" color="rgb(228, 146, 245)" className="hero-text">I'm a Frontend Software Developer with years of experience using different tools to build software platforms and applications providing solutions to client's problems digitally.</AppText>
            <AppText textSize="3" fontWeight="400" color="rgb(228, 146, 245)" className="hero-text">A computer programming enthusiast that loves being challenged while enjoying my journey towards making the world a better place through my technological skills in addressing problems with  web softwares.</AppText>
            <CustomContainer >
            <AppLink color="rgb(240, 196, 248)" href="mailto:lukmanjubril2003@yahoo.com" textSize="2" fontWeight="400" decoration="none" className="hero-link" topPadding="1.5" leftPadding="2" rightPadding="2" bottomPadding="1.5">Get In Touch</AppLink> 
            </CustomContainer>
            </FlexColumn>

            <ImageWrapper height="65" width="70" className="img-wrapper">
             <img src={Homellis} alt="" width='100%' height='100%' />
            </ImageWrapper>
            
           </div>
           
           

         <About />
         <Experience />
         <Projects />
         <Other />
         <Reach />
         <MobileFooter />
        </CustomContainer>

       
    )
}
export default Home