import {animated, useSpring} from '@react-spring/web'

function Rectangle (props){

// affichage du composant
return (
  <div style={{
    backgroundColor:props.color,
    position : "absolute",
    top : props.top,
    left : props.left,
    height : props.height,
    width : props.width,
    }}>
  </div>
  );
};

export default Rectangle;