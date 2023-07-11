import {useState} from 'react'
import { AppSpan, AppText, CustomContainer, FlexColumn, FlexRow } from '../../style';
import TabContent from '../TabContent';
import TabItem from '../TabItem';
import {BsPlay} from 'react-icons/bs'
import './index.scss';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")

   
    return(
        <CustomContainer topMargin='10' className='container'>
            <FlexRow justifyContent='flex-start' gap='20' alignItems='flex-start' className='tabs-wrapper'>
            <FlexColumn width='10' className='tabs-container' gap='2' topPadding='2' bottomPadding='2'>
           
            <TabItem title="USA" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabItem title="VSprouts" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabItem title="ApnaDevelopers" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabItem title="NewCore" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>

            </FlexColumn> 
            <div className="outlet">
            <TabContent id="tab1" activeTab={activeTab}>
          <AppText textSize='3.5' fontWeight='400' color='rgb(240,196,248)' className='expe-title'>Frontend Developer @ <AppSpan color="rgb(228, 146, 245)" textSize='3.5' fontWeight='400' className='expe-title span'>United States Of Africa</AppSpan></AppText>
          <AppText  textSize='2'  fontWeight='400' color='rgb(240,196,248)' className='expe-text'>Jun 2023 - Current</AppText>
          <FlexRow justifyContent='flex-start' gap='1'>
            <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon'/>
              <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'>I collaborate with backend and front-end teammates in developing the Zumaridi Communication web application</AppText>

          </FlexRow>
          <FlexRow justifyContent='flex-start' gap='1'>
          <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon'/>
          <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'>Collaborated in the building the web application according to the proposed UI/UX design</AppText>
          </FlexRow>
        </TabContent>
            <TabContent id="tab2" activeTab={activeTab}>
          <AppText textSize='3.5' fontWeight='400' color='rgb(240,196,248)' className='expe-title'>Frontend Developer @ <AppSpan color="rgb(228, 146, 245)" textSize='3.5' fontWeight='400' className='expe-title span'>Virtuous Sprouts</AppSpan></AppText>
          <AppText  textSize='2'  fontWeight='400' color='rgb(240,196,248)' className='expe-text'>Nov 2022 - Jun 2023 </AppText>
          <FlexRow justifyContent='flex-start' gap='1'>
            <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon'/>
              <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'> Collaborated with teammates  in developing Virtuous Sprouts school portal.</AppText>

          </FlexRow>
          <FlexRow justifyContent='flex-start' gap='1'>
          <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon'/>
          <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'>Reviewed proposed UI and UX designs for technical feasibility by collaborating with back-end development personnel.</AppText>
          </FlexRow>
        </TabContent>
      <TabContent id="tab3" activeTab={activeTab}>
          <AppText textSize='3.5' fontWeight='400' color='rgb(240,196,248)' className='expe-title'>Frontend Developer Intern @ <AppSpan color="rgb(228, 146, 245)" textSize='3.5' fontWeight='400' className='expe-title span'>ApnaDevs</AppSpan></AppText>
          <AppText  textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'>October 2022 - December 2022</AppText>
          <FlexRow justifyContent='flex-start' gap='1'>
            <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon'/>
              <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'> I interned at ApnaDeveloper to implement Frontend technical solutions to meet projects requirements.</AppText>

          </FlexRow>
          <FlexRow justifyContent='flex-start' gap='1'>
          <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon'/>
          <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'>Conducted research about new tools used in Frontend Developement.</AppText>


          </FlexRow>
        </TabContent>

        <TabContent id="tab4" activeTab={activeTab}>
        <AppText textSize='3.5' fontWeight='400' color='rgb(240,196,248)' className='expe-title'>Frontend Developer @ <AppSpan color="rgb(228, 146, 245)" textSize='3.5' fontWeight='400' className='expe-title span'>NewCore Technologies</AppSpan></AppText>
          <AppText  textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'>Feb 2021 - April 2022</AppText>
          <FlexRow justifyContent='flex-start' gap='1'>
            <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon'/>
              <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'> Collaborated with teammates to improve processes and produce better tools.</AppText>

          </FlexRow>
          <FlexRow justifyContent='flex-start' gap='1'>
          <BsPlay color='rgb(228, 146, 245)' size={40} className='play-icon' />
          <AppText textSize='2'  fontWeight='400' color='rgb(240,196,248)'  className='expe-text'>Continuously studied and improved abilities with wide range of web technologies, design tools and programming practices</AppText>
          </FlexRow>
        </TabContent>
       </div> 
         </FlexRow>
       </CustomContainer>
    )
}
export default Tabs