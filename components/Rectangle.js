import {animated, useSpring} from '@react-spring/web'

function Rectangle (props){
 
  const pictureAnimate= useSpring({
    from: { y: "10%"
          },
    to: { y : "0%"},
    config: { duration: 3000 },
    delay:10000,
    reset: false,
    loop : false,
});

 return (
 <animated.div style={{
    backgroundColor:props.color,
    position : "absolute",
    top : props.top,
    left : props.left,
    height : props.height,
    width : props.width,
    }}>
 </animated.div>
  );
};

export default Rectangle;