import { motion } from "framer-motion";

function ButtonLink({
  href,
  label,
  onClick,
  disabled = false,
  download = false,
  newTab = false,
  icon,
  className = "",
}) {
  const MotionButton = (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.9, y: 1 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`
    max-[426px]:px-2
    max-[426px]:py-2
    flex items-center justify-center gap-1
    border bg-black 
    text-sm md:text-[1rem] font-medium
    text-white
    px-3 py-2 md:px-4 md:py-2 rounded-3xl
    transition-colors duration-200
    hover:bg-[#b7ff5e] hover:text-black hover:border-black
    disabled:opacity-50 disabled:cursor-not-allowed
    whitespace-nowrap
    ${className} 
      `}
    >
      {icon && (
        <span className="flex items-center justify-center text-current">
          {icon}
        </span>
      )}
      {label}
    </motion.button>
  );

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

  return MotionButton;
}

export default ButtonLink;
