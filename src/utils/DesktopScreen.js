import React, {useEffect, useState} from "react";

const useCheckMobileScreen = (screenType) => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
            setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    if(screenType === 'tablet') return (width <= 1024);
    if(screenType === 'medium') return (width <= 1318);

    return (width <= 768);
}

export default useCheckMobileScreen