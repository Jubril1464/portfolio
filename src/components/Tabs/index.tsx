import {useState} from 'react'
import { AppSpan, AppText, CustomContainer, FlexColumn, FlexRow } from '../../style';
import TabContent from '../TabContent';
import TabItem from '../TabItem';
import './index.scss';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1")

    const handleTab =(tab:string) => {
        const tabCase = tab.toLowerCase()
        setActiveTab(tabCase)

    }
    return(
        <CustomContainer topMargin='10'>
            <FlexRow justifyContent='flex-start' gap='20' alignItems='flex-start'>
            <FlexColumn width='10' className='tabs-container' gap='2' topPadding='2' bottomPadding='2'>
            {/* <div className={`tabs-item-container ${activeTab === 'tab1'? 'active' : ""}`} onClick={() =>handleTab('tab1')}>
            <AppText color="rgb(228, 146, 245)" textSize='2' fontWeight='400' className='tabs-item' >Nexahive</AppText>

            </div>
            <div className={`tabs-item-container ${activeTab === 'tab2'? 'active' : ""}`} onClick={() =>handleTab('tab2')}>
            <AppText color="rgb(228, 146, 245)" textSize='2' fontWeight='400' className='tabs-item' >Nexahive</AppText>

            </div>
            <div className={`tabs-item-container ${activeTab === 'tab3'? 'active' : ""}`} onClick={() =>handleTab('tab3')}>
            <AppText color="rgb(228, 146, 245)" textSize='2' fontWeight='400' className='tabs-item' >Nexahive</AppText>

            </div> */}
            <TabItem title="ApnaDevelopers" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <TabItem title="NewCore " id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <TabItem title="VSprouts" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>

            </FlexColumn> 
            <div className="outlet">
      <TabContent id="tab1" activeTab={activeTab}>
          <AppText textSize='3.5' fontWeight='400' color='rgb(240,196,248)'>Frontend Developer Intern @ <AppSpan color="rgb(228, 146, 245)" textSize='3.5' fontWeight='400'>ApnaDevs</AppSpan></AppText>
          <AppText  textSize='2'  fontWeight='400' color='rgb(240,196,248)'>October 2022 - December 2022</AppText>
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <AppText>Tab 2 works!</AppText>
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <AppText>Tab 3 works!</AppText>
        </TabContent>
   
    
      </div> 

            </FlexRow>
           
        
        </CustomContainer>
    )
}
export default Tabs