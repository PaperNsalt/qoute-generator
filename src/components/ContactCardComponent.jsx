import { motion } from "motion/react";

function ContactCardComponent({ label, icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <motion.div
        whileHover={{ scale: 1, y: -2 }}
        transition={{ type: "spring", stiffness: 500 }}
        whileTap={{ scale: 0.9, y: 1 }}
        className="flex flex-col gap-0 justify-center items-center border rounded-3xl p-10 border-b-8 cursor-pointer"
      >
        {icon}
        <p className="text-[1.6rem]">{label}</p>
      </motion.div>
    </a>
  );
}

export default ContactCardComponent;
