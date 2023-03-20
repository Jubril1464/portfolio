import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaGithub} from 'react-icons/fa'
import { FlexColumn,CustomContainer, AppText } from '../../style'
import './index.scss';
const Footer = () => {
    return(
        <div className='footer'>
          <div className='footer-container'>
          <FlexColumn width='10' gap='3' className='left-details'>
    <FaFacebook  color="rgb(240, 196, 248)" size={30} className='icon' />
    <FaInstagram  color="rgb(240, 196, 248)" size={30} className='icon'/>
    <FaLinkedin  color="rgb(240, 196, 248)" size={30} className='icon'/>
    <FaTwitter  color="rgb(240, 196, 248)" size={30} className='icon'/>
    <FaGithub  color="rgb(240, 196, 248)" size={30} className='icon'/>
<CustomContainer width='.1' height='20'bgColor='rgb(240,196,248)' ></CustomContainer>
   </FlexColumn>

   <FlexColumn width='10' gap='15' className='right-details'>
    <AppText textSize='2' color='rgb(240, 196, 248)' className='footer-email'>Lukmanjubril2003@yahoo.com</AppText>
    <CustomContainer width='.1' height='20'bgColor='rgb(240,196,248)' ></CustomContainer>

   </FlexColumn>
            </div> 
        
  
        </div>
    )
}
export default Footer