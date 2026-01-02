import { motion } from "motion/react";

function ButtonLink({
  href,
  label,
  download = true,
  newTab = false,
  icon,
}) {
  return (
    <>
      <a
        href={href}
        download={download}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        <motion.button
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.9, y: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="
          flex items-center gap-2
          border bg-black text-[1rem]
          text-white
          px-3 py-2 rounded-2xl
          transition-colors duration-200
          hover:bg-[#f2f2f2]/80 hover:text-black hover:border-black

          max-[426px]:text-[1.2rem]
        "
        >
          {icon && <span className="">{icon}</span>}
          {label}
        </motion.button>
      </a>
    </>
  );
}

export default ButtonLink;