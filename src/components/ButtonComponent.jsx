import { motion } from "motion/react";

function ButtonLink({
  href,
  label,
  onClick,
  disabled = false,
  download = false,
  newTab = false,
  icon,
}) {
  const MotionButton = (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.9, y: 1 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`
        flex items-center gap-2
        border bg-black text-[1rem]
        text-white
        px-4 py-2 rounded-3xl
        transition-colors duration-200
        hover:bg-[#b7ff5e] hover:text-black hover:border-black
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {icon && <span>{icon}</span>}
      {label}
    </motion.button>
  );

  // 🔹 If it's a link
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="inline-block"
      >
        {MotionButton}
      </a>
    );
  }

  // 🔹 If it's a normal button
  return MotionButton;
}

export default ButtonLink;
