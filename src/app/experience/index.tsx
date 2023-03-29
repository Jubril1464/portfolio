import {useState} from 'react'
import './index.scss'
import { AppSpan, AppText, CustomContainer, FlexRow } from '../../style'
import Tabs from '../../components/Tabs'

 const Experience = () => {
    return(
        <CustomContainer className='expe' topMargin='10' bottomMargin='4'>
            <FlexRow justifyContent="flex-start" gap="2">
                    <AppText color="rgb(228, 146, 245)" textSize="4" fontWeight="400" className="expe-heading"><AppSpan color="rgb(240, 196, 248)" textSize="3" fontWeight="500" rightMargin="1" className="expe-span">02.</AppSpan>Where i've worked</AppText>
                        <CustomContainer width='50' height='.1'bgColor='rgb(240,196,248)' className="expe-divider"></CustomContainer>
                    </FlexRow>
             <Tabs />
        </CustomContainer>
    )
 }
 export default Experience