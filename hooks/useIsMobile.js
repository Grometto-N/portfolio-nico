import { useState, useEffect } from 'react';

// hook permettant de savoir si l'écran correspond à un mobile : <= 700

// export default function useScreenWidth(y){

//     const [width, setWidth] = useState();

//     useEffect(() => {
    
//         function handleWindowSizeChange() {
//             setWidth(window.innerWidth);
//         }

//         function mobilecheck() {
//             return (typeof window.orientation !== "undefined") 
//               || (navigator.userAgent.indexOf('IEMobile') !== -1
//               );
//         };
    
//         window.addEventListener('resize', handleWindowSizeChange);
//         return () => {
//             window.removeEventListener('resize', handleWindowSizeChange);
//         }
//     }, [y]);

//     // return (width <= 740);
//     return width;
// }


export default function useIsMobile() {
    const [deviceType, setDeviceType] = useState("");
  
    useEffect(() => {
      let hasTouchScreen = false;
      if ("maxTouchPoints" in navigator) {
        hasTouchScreen = navigator.maxTouchPoints > 0;
      } else if ("msMaxTouchPoints" in navigator) {
        hasTouchScreen = navigator.msMaxTouchPoints > 0;
      } else {
        const mQ = window.matchMedia && matchMedia("(pointer:coarse)");
        if (mQ && mQ.media === "(pointer:coarse)") {
          hasTouchScreen = !!mQ.matches;
        } else if ("orientation" in window) {
          hasTouchScreen = true; 
        } else {
          var UA = navigator.userAgent;
          hasTouchScreen =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
      }
      if (hasTouchScreen) {
        setDeviceType("Mobile");
      } else {
        setDeviceType("Desktop");
      }
    }, []);
  
    return deviceType === "Mobile";
  };
  