import { useState, useEffect } from 'react';

// hook permettant de savoir si l'écran correspond à un mobile : <= 700

export default function useScreenWidth(y){

    const [width, setWidth] = useState();

    useEffect(() => {
    
        function handleWindowSizeChange() {
            setWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [y]);

    // return (width <= 740);
    return width;


}