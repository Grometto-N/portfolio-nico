import { useEffect, useRef } from "react";

function Rectangle (){
 const canvasRef = useRef(null);

 const draw = ctx => {
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill()
  }

  useEffect(() => {
 if (canvasRef.current) {
 const context = canvasRef.current.getContext("2d");
    //   ctx?.strokeRect(10, 10, 400, 5);
    draw(context)
    }
  }, []);

 return (
 <canvas
      ref={canvasRef}
      width="40"
      height="20"
      style={{ border: "2px solid white"}}
    />
  );
};

export default Rectangle;