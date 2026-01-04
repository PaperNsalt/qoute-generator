import Lottie from "lottie-react";
import MegaPhoneAnimation from '../assets/lottie/MegaphoneAnimation.json';

function QouteAnimation({width = 500, height = 500}) {
  return (
    <>
      <Lottie 
      animationData={MegaPhoneAnimation}
      loop={true}
      autoPlay={true}
      style={{ width: width, height: height }}
      />
    </>
  );
}

export default QouteAnimation;