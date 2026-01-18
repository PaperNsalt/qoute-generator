import { motion } from "framer-motion";

function ContactCardComponent({ label, icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block h-full"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.95, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="
          flex flex-col gap-4 justify-center items-center 
          bg-white border border-gray-200 border-b-8 
          rounded-3xl p-6 md:p-10 
          cursor-pointer h-full transition-colors duration-300
          hover:border-black
          max[426px]:border-black
        "
      >
        <div className="scale-90 md:scale-100">{icon}</div>

        <p className="text-xl md:text-[1.6rem] font-medium text-center">
          {label}
        </p>
      </motion.div>
    </a>
  );
}

export default ContactCardComponent;
