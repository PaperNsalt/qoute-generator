import { motion } from "motion/react";

function QuoteSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 0.6 }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="p-6 rounded-2xl bg-gray-100 space-y-4"
    >
      {/* Quote lines */}
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6"></div>

      {/* Author */}
      <div className="h-3 bg-gray-300 rounded w-1/3 mt-4"></div>
    </motion.div>
  );
}

export default QuoteSkeleton;
