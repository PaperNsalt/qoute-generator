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
    <div className="flex flex-col justify-between gap-6 max-w-500 min-w-60 p-8 border border-b-8 rounded-xl shadow-sm hover:shadow-md transition bg-white relative">
      {/* QUOTE ICON */}
      <div className="flex justify-start">{QuoteLeftIcon}</div>

      {/* QUOTE TEXT */}
      <p className="text-[1.2rem] italic">{quote}</p>

      <div className="flex justify-end">{QuoteRightIcon}</div>

      {/* AUTHOR */}
      <div className="flex justify-end">
        <p className="text-right text-[1rem] py-1 px-2 bg-[#b7ff5e] rounded-lg text-black mt-2">
          — {author}
        </p>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex justify-end gap-3 items-center">
        {/* COPY BUTTON */}
        <motion.div whileTap={{ scale: 0.9 }}>
          <ButtonLink
            icon={copied ? CheckIcon : CopyIcon}
            label={copied ? "Copied" : "Copy"}
            onClick={handleCopy}
            className={`transition-all ${
              copied ? "bg-green-500 text-white scale-105" : ""
            }`}
          />
        </motion.div>

        {/* SAVE BUTTON */}
        <motion.div whileTap={{ scale: 0.9 }}>
          <ButtonLink
            icon={HeartIcon}
            label={savedFeedback || isFavorite ? "Saved" : "Save"}
            onClick={handleSave}
            className={`transition-all ${
              savedFeedback || isFavorite
                ? "bg-red-500 text-white scale-105"
                : ""
            }`}
          />
        </motion.div>
      </div>

      {/* COPY FEEDBACK BADGE */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-3 right-3 text-sm bg-green-500 text-white px-3 py-1 rounded-full shadow"
          >
            Copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>

      {/* SAVE FEEDBACK BADGE */}
      <AnimatePresence>
        {savedFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-3 left-3 text-sm bg-green-500 text-white px-3 py-1 rounded-full shadow"
          >
            Added to favorites
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default QuoteCard;
