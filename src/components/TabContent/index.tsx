import { NavContent } from "../type";
import { FlexColumn } from "../../style";

const TabContent = ({id, activeTab, children}: NavContent) => {
    return (
      activeTab === id ? <FlexColumn gap="2" alignItems="flex-start">
        { children }
      </FlexColumn>
      : null
    );
   };
    
   export default TabContent;