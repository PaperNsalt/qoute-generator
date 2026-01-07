import Lottie from "lottie-react";
import RunningManAnimation from "../assets/lottie/Running Man.json"

function RunningMan({width = 500, height = 500}) {
  return (
    <>
      <Lottie 
      animationData={RunningManAnimation}
      loop={true}
      autoPlay={true}
      style={{ width: width, height: height }}
      />
    </>
  );
}

export default RunningMan;