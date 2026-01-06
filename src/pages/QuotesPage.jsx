import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import QuoteCard from "../components/QuoteCardComponent";
import ButtonLink from "../components/ButtonComponent";
import QuoteSkeleton from "../components/QuoteSkeletonComponent";
import { DeleteIcon, SearchIcon } from "../components/IconComponent";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
};

const quoteVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

const CATEGORIES = [
  "wisdom",
  "philosophy",
  "life",
  "truth",
  "inspirational",
  "relationships",
  "love",
  "faith",
  "humor",
  "success",
  "courage",
  "happiness",
  "art",
  "writing",
  "fear",
  "nature",
  "time",
  "freedom",
  "death",
  "leadership",
];

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [category, setCategory] = useState("wisdom");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchQuotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v2/quotes?categories=${category}&limit=4`,
        {
          headers: {
            "X-Api-Key": import.meta.env.VITE_API_KEY,
          },
          cache: "no-store",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch quotes");

      const data = await res.json();
      setQuotes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetQuotes = () => {
    setQuotes([]);
    setCategory("wisdom");
    setError(null);
    setLoading(false);
  };

  return (
    <section className="">
      <div className="flex flex-col justify-center items-center mx-auto p-6 space-y-6 rounded-3xl mb-10">
      <h1 className="text-[4rem] font-bold text-center">Quote Generator</h1>

      {/* CATEGORY */}
      <div className="flex justify-center">
        <motion.select
          whileHover={{
            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            scale: 1.05,
            y: -2,
          }}
          whileFocus={{
            boxShadow: "0px 0px 0px 3px rgba(99,102,241,0.35)",
            scale: 1.05,
            y: -2,
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex justify-evenly px-4 py-2 rounded-xl border"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </motion.select>
      </div>

      {/* BUTTON */}
      <div className="flex gap-6 justify-center">
        <ButtonLink
          icon={
            loading ? (
              <motion.div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              />
            ) : (
              SearchIcon
            )
          }
          onClick={fetchQuotes}
          label={loading ? "Loading" : "Show Quotes"}
          disabled={loading}
        />

        <ButtonLink
          icon={DeleteIcon}
          onClick={resetQuotes}
          label="Reset"
          disabled={!quotes.length && category === "wisdom"}
        />
      </div>

      {/* ERROR */}
      {error && <p className="text-center text-red-500">{error}</p>}
      </div>

      {/* LOADING */}
      {/* SKELETON LOADERS */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-[repeat(auto-fit,minmax(300px,2fr))] gap-6"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <QuoteSkeleton key={index} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* QUOTES */}
      <AnimatePresence mode="popLayout">
        {!loading && quotes.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            layout
            className="grid grid-cols-[repeat(auto-fit,minmax(300px,2fr))] gap-6"
          >
            {quotes.map((q, index) => (
              <motion.div key={index} variants={quoteVariants} layout className="grid grid-cols-[repeat(auto-fit,minmax(300px,2fr))] gap-6">
                <QuoteCard quote={q.quote} author={q.author} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default QuotesPage;
