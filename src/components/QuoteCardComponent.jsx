import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HeartIcon,
  QuoteLeftIcon,
  QuoteRightIcon,
  CopyIcon,
  CheckIcon,
} from "./IconComponent";
import ButtonLink from "./ButtonComponent";

function QuoteCard({ quote, author, isFavorite, onToggleFavorite }) {
  const [copied, setCopied] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote}" — ${author}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      console.error("Copy failed");
    }
  };

  const handleSave = () => {
    onToggleFavorite();
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 1500);
  };

  return (
    <div className="flex flex-col justify-between gap-4 md:gap-6 w-full max-w-[500px] p-6 md:p-8 border border-b-8 rounded-xl shadow-sm hover:shadow-md transition bg-white relative h-full">
      <div className="flex justify-start text-gray-400">{QuoteLeftIcon}</div>

      <p className="text-lg md:text-[1.2rem] italic leading-relaxed text-gray-800 flex-grow">
        {quote}
      </p>

      <div className="flex justify-end text-gray-400">{QuoteRightIcon}</div>

      <div className="flex justify-end">
        <p className="text-right text-sm md:text-base font-medium py-1 px-3 bg-[#b7ff5e] rounded-lg text-black mt-2 inline-block shadow-sm">
          — {author}
        </p>
      </div>

      <div className="flex justify-end gap-3 items-center pt-2 border-t border-gray-100 mt-2">
        {/* COPY BUTTON */}
        <motion.div whileTap={{ scale: 0.9 }}>
          <ButtonLink
            icon={copied ? CheckIcon : CopyIcon}
            label={copied ? "Copied" : "Copy"}
            onClick={handleCopy}
            className={`transition-all text-sm ${
              copied
                ? "bg-green-500 text-white scale-105 shadow-md"
                : "hover:bg-gray-100"
            }`}
          />
        </motion.div>

        <motion.div whileTap={{ scale: 0.9 }}>
          <ButtonLink
            icon={HeartIcon}
            label={savedFeedback || isFavorite ? "Saved" : "Save"}
            onClick={handleSave}
            className={`transition-all text-sm ${
              savedFeedback || isFavorite
                ? "bg-red-500 text-white scale-105 shadow-md"
                : "hover:bg-gray-100"
            }`}
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-2 right-2 md:top-3 md:right-3 text-xs md:text-sm bg-green-600 text-white px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1"
          >
            {CheckIcon} Copied!
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {savedFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-2 left-2 md:top-3 md:left-3 text-xs md:text-sm bg-red-500 text-white px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1"
          >
            {HeartIcon} Saved!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuoteCard;
