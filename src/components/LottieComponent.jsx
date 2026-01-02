import Lottie from "lottie-react";
import MegaPhoneAnimation from '../assets/lottie/MegaphoneAnimation.json';

function QouteAnimation() {
  return (
    <>
      <Lottie 
      animationData={MegaPhoneAnimation}
      loop={true}
      autoPlay={true}
      />
    </>
  );
}

export default QouteAnimation;