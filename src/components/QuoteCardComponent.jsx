import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toPng } from "html-to-image";

import {
  HeartIcon,
  QuoteLeftIcon,
  QuoteRightIcon,
  CopyIcon,
  CheckIcon,
  DownloadIcon,
} from "./IconComponent";
import ButtonLink from "./ButtonComponent";

function QuoteCard({ quote, author, isFavorite, onToggleFavorite }) {
  const [copied, setCopied] = useState(false);
  const [savedFeedback, setSavedFeedback] = useState(false);
  
  // 1. New states for Download feedback
  const [downloadFeedback, setDownloadFeedback] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const cardRef = useRef(null);

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

  const handleDownload = async () => {
    if (!cardRef.current || isProcessing) return;

    // Start Loading State
    setIsProcessing(true);

    try {
      // Small delay to allow React to render the loading state before freezing UI for image generation
      await new Promise((resolve) => setTimeout(resolve, 100));

      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        backgroundColor: "#ffffff",
        pixelRatio: 2,
        filter: (node) => node.id !== "card-buttons",
      });

      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `quote-${author.replace(/\s+/g, "-").toLowerCase()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // 2. Trigger Success Message
      setDownloadFeedback(true);
      setTimeout(() => setDownloadFeedback(false), 3000);

    } catch (error) {
      console.error("Download failed:", error);
      alert("Could not generate image. Please try again.");
    } finally {
      // End Loading State
      setIsProcessing(false);
    }
  };

  return (
    <div
      ref={cardRef}
      style={{ backgroundColor: "#ffffff", color: "#1f2937" }}
      className="flex flex-col justify-between gap-4 md:gap-6 w-full max-w-125 p-6 md:p-8 border border-b-8 rounded-xl shadow-sm hover:shadow-md transition bg-white relative h-full"
    >
      <div className="flex justify-start text-gray-400">{QuoteLeftIcon}</div>
      <p className="text-lg md:text-[1.2rem] italic leading-relaxed text-gray-800 grow">
        {quote}
      </p>

      <div className="flex justify-end text-gray-400">{QuoteRightIcon}</div>

      <div className="flex justify-end">
        <p className="text-right text-sm md:text-base font-medium py-1 px-3 bg-[#b7ff5e] rounded-lg text-black mt-2 inline-block shadow-sm">
          — {author}
        </p>
      </div>

      {/* --- BUTTONS --- */}
      <div
        id="card-buttons"
        className="flex flex-wrap justify-end gap-2 md:gap-3 items-center pt-2 border-t border-gray-100 mt-2"
      >

        <motion.div whileTap={{ scale: 0.9 }}>
          <ButtonLink
            icon={copied ? CheckIcon : CopyIcon}
            label={copied ? "Copied" : "Copy"}
            onClick={handleCopy}
            className={`transition-all text-xs sm:text-sm ${
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
            className={`transition-all text-xs sm:text-sm ${
              savedFeedback || isFavorite
                ? "bg-red-500 text-white scale-105 shadow-md"
                : "hover:bg-gray-100"
            }`}
          />
        </motion.div>

        <motion.div whileTap={{ scale: 0.9 }}>
          <ButtonLink
            // 3. Show a spinner or different label while processing
            icon={isProcessing ? null : DownloadIcon}
            label={isProcessing ? "..." : "Download"}
            onClick={handleDownload}
            disabled={isProcessing} // Disable button while downloading
            className={`transition-all text-xs sm:text-sm ${
              isProcessing ? "opacity-70 cursor-wait bg-gray" : "hover:bg-gray-100"
            }`}
          />
        </motion.div>
      </div>

      {/* --- TOAST NOTIFICATIONS --- */}
      
      {/* Copied Toast (Green) */}
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

      {/* Saved Toast (Red) */}
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

      {/* 4. NEW: Download Toast (Blue) */}
      <AnimatePresence>
        {downloadFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-2 right-2 md:top-3 md:right-3 text-xs md:text-sm bg-blue-500 text-white px-3 py-1.5 rounded-full shadow-lg z-10 flex items-center gap-1"
          >
            {DownloadIcon} Image saved to device!
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default QuoteCard;