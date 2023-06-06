import {useState,useEffect} from 'react';
export const useWindowScroll = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(window.scrollY)
        };
        window.addEventListener('scroll', handleScroll);
         return () => {
            window.removeEventListener('scroll', handleScroll)
         }

    },[])

    return {scrollHeight}
}