 import React from "react"
 import resume from '../../assets/pdf/resume.pdf';
import { Button } from "../../style";

 
 const DownloadButton = () => {
    
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.setAttribute('download', 'MyResume.pdf');
        link.click()
    }
    return (
        <Button onClick={handleDownload}  bgColor="transparent" color="rgb(240, 196, 248)" titleSize="2.5" fontWeight="400" height="3" >
        Resume
        </Button>
    )
}
export default DownloadButton