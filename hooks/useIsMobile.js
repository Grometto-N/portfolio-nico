import { useState, useEffect } from 'react';

// hook permettant de savoir si l'écran correspond à un mobile : <= 700

export default function useScreenWidth(){

    const [width, setWidth] = useState();

    useEffect(() => {
    
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 700);


}