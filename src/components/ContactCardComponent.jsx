import { motion } from "motion/react";

function ContactCardComponent( {label, icon}){
  return(
    <>
    <motion.div
            whileHover={{ scale: 1, y: -2 }}
            transition={{ type: "spring", stiffness: 500 }}
            whileTap={{ scale: 0.9, y: 1 }}
            className="flex flex-col justify-center items-center border rounded-3xl p-10 border-b-8"
          >
            {icon}
            <p>{label}</p>
          </motion.div>
    </>
  );
}

export default ContactCardComponent;