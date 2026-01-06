import Lottie from "lottie-react";
import DiceRollAnimation from "../assets/lottie/Dice Roll Purple.json"

function DiceRoll({width = 500, height = 500}) {
  return (
    <>
      <Lottie 
      animationData={DiceRollAnimation}
      loop={true}
      autoPlay={true}
      style={{ width: width, height: height }}
      />
    </>
  );
}

export default DiceRoll;