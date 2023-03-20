import { AppText } from "../../style";
import { NavItem } from "../type";
import './index.scss';
const TabItem = ({ id, title, activeTab, setActiveTab }: NavItem) => {
 
    const handleClick = () => {
      setActiveTab(id);
    };
    
   return (
    <div  className={`tabs-item-container ${activeTab === id ? 'active' : ""}`}  onClick={handleClick}>
    <AppText color="rgb(228, 146, 245)" textSize='2' fontWeight='400' className='tabs-item' >
        { title }
      </AppText>
    </div>
     
    );
   };
   export default TabItem;