import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import QuoteCard from "../components/QuoteCardComponent";
import ButtonLink from "../components/ButtonComponent";
import QuoteSkeleton from "../components/QuoteSkeletonComponent";
import ContainerComponent from "../components/ContainerComponent";
import { DeleteIcon, SadIcon, SearchIcon } from "../components/IconComponent";

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
  const [categories, setCategories] = useState(["wisdom"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(2);

  const [favorites, setFavorites] = useState(() => {
  const saved = localStorage.getItem("favoriteQuotes");
  return saved ? JSON.parse(saved) : [];
});

const toggleFavorite = (quote) => {
  setFavorites((prev) => {
    const exists = prev.some(
      (q) => q.quote === quote.quote && q.author === quote.author
    );

    let updated;
    if (exists) {
      updated = prev.filter(
        (q) => !(q.quote === quote.quote && q.author === quote.author)
      );
    } else {
      updated = [...prev, quote];
    }

    localStorage.setItem("favoriteQuotes", JSON.stringify(updated));
    return updated;
  });
};



  const fetchQuotes = async () => {
    if (categories.length === 0) {
      setError("Please select at least one category.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.api-ninjas.com/v2/quotes?categories=${categories.join(
          ","
        )}&limit=${limit}`,
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
    setCategories(["wisdom"]);
    setLimit(2);
    setError(null);
    setLoading(false);
  };

  const toggleCategory = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const spanStyle = "text-[#7fdb0d]";
  return (
 <section className="px-4 md:px-8">
  {/* 1. w-full: Allows the container to fill the width on mobile.
      2. max-w-3xl: Prevents it from getting too wide on desktop.
      3. mt-8 / mt-16: Adjusts vertical spacing for different screens.
  */}
  <div className="flex flex-col w-full max-w-3xl mt-8 md:mt-16 justify-center items-center mx-auto p-4 md:p-6 space-y-6 rounded-3xl mb-10">
    
    {/* HEADING
        1. text-5xl: A readable large size for mobile.
        2. md:text-[4rem]: Your original huge size for desktop.
    */}
    <h1 className="text-5xl md:text-[4rem] font-bold text-center leading-tight md:leading-16">
      Generate
      <br />
      Quote
    </h1>

    {/* PARAGRAPH
        1. w-full: Uses full width on mobile.
        2. md:w-2/3: Restricts width on desktop for better readability line-length.
    */}
    <p className="text-center text-base md:text-lg text-gray-600 w-full md:w-2/3 leading-relaxed">
      Pick a <span className={spanStyle}>category</span> and instantly
      generate <span className={spanStyle}> four random quotes </span>{" "}
      tailored to your mood or interest. Whether you’re seeking motivation,
      wisdom, or reflection, this app delivers meaningful quotes with a
      clean interface and smooth interactions.
    </p>

    {/* CATEGORY BUTTONS */}
    <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-4xl">
      {CATEGORIES.map((cat) => {
        const active = categories.includes(cat);
        return (
          <motion.label
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // Added select-none to prevent text highlighting while tapping
            className={`cursor-pointer px-3 py-1.5 md:px-4 md:py-2 rounded-full border text-xs md:text-sm capitalize transition select-none
            ${
              active
                ? "bg-[#7fdb0d] text-black border-black"
                : "bg-transparent border-gray-400 hover:border-[#7fdb0d]/60"
            }`}
          >
            <input
              type="checkbox"
              checked={active}
              onChange={() => toggleCategory(cat)}
              className="hidden"
            />
            {cat}
          </motion.label>
        );
      })}
    </div>

    {/* QUOTE COUNT SLIDER */}
    <div className="flex flex-col items-center gap-2 w-full max-w-xs">
      <label className="text-sm font-medium">
        Number of quotes: <span className="font-bold">{limit}</span>
      </label>

      <input
        type="range"
        min={1}
        max={5}
        value={limit}
        onChange={(e) => setLimit(Number(e.target.value))}
        className="w-full accent-[#7fdb0d] cursor-pointer"
      />
    </div>

    {/* ACTION BUTTONS 
        1. flex-col: Stacks buttons on very small screens.
        2. sm:flex-row: Side-by-side on larger phones and up.
    */}
    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full sm:w-auto">
      <ButtonLink
        icon={
          loading ? (
            <motion.div
              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                ease: "linear",
              }}
            />
          ) : (
            SearchIcon
          )
        }
        onClick={fetchQuotes}
        label={loading ? "Loading" : "Show Quotes"}
        disabled={loading || categories.length === 0}
      />

      <ButtonLink
        icon={DeleteIcon}
        onClick={resetQuotes}
        label="Reset"
        disabled={
          !quotes.length &&
          categories.length === 1 &&
          categories[0] === "wisdom"
        }
      />
    </div>

    {/* ERROR DISPLAY */}
    {error && (
      <p className="text-center text-red-500 bg-red-100 border border-red-200 py-3 px-6 rounded-2xl flex flex-col justify-center items-center gap-2 text-sm md:text-base">
        <span className="text-2xl">{SadIcon}</span>
        {error}
      </p>
    )}
  </div>

  {/* LOADING SKELETONS 
      1. grid-cols-1: Single column stack on mobile.
      2. md:grid-cols-2: Two columns on tablet.
      3. xl:grid-cols-4: Four columns on large screens.
  */}
  <AnimatePresence>
    {loading && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10"
      >
        {Array.from({ length: limit }).map((_, index) => (
          <QuoteSkeleton key={index} />
        ))}
      </motion.div>
    )}
  </AnimatePresence>

  {/* QUOTES GRID */}
  <AnimatePresence mode="popLayout">
    {!loading && quotes.length > 0 && (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        layout
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20"
      >
        {quotes.map((q, index) => (
          <motion.div
            key={`${q.quote}-${index}`} // Composite key helps React track changes better
            variants={quoteVariants}
            layout
            className="h-full"
          >
            <QuoteCard
              quote={q.quote}
              author={q.author}
              isFavorite={favorites.some(
                (f) => f.quote === q.quote && f.author === q.author
              )}
              onToggleFavorite={() => toggleFavorite(q)}
            />
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>

  {/* HOW IT WORKS SECTION */}
  <div className="flex flex-col justify-center items-center mt-20 md:mt-32 mb-20">
    <h1 className="text-3xl md:text-[4rem] px-6 py-3 bg-[#b7ff5e] rounded-2xl md:rounded-3xl font-bold text-center shadow-sm">
      How It Works
    </h1>

    {/* INFO GRID
        1. grid-cols-1: Stacks steps vertically on mobile (logical flow 1->2->3->4).
        2. lg:grid-cols-4: Spreads them out on desktop.
    */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 bg-black p-6 md:p-10 mt-10 rounded-3xl overflow-hidden">
      <ContainerComponent text="Users begin by selecting a quote category (such as Motivation, Life, Love, or Wisdom). This selection determines the type of quotes that will be generated." />

      <ContainerComponent text="Once a category is selected, the application sends a request to the backend API. The request includes selected category and required number of quotes (4). This is handled asynchronously to ensure a smooth and responsive user experience." />

      <ContainerComponent text="The backend handles quote generation by first processing the incoming request and identifying the selected category. It then filters the available quotes to match that category and randomly selects four entries from the filtered dataset. These quotes are formatted into a structured JSON response before being sent back to the frontend." />

      <ContainerComponent text="Once the quote generation process is complete, the API sends the generated data to the frontend in real time. Each response includes the quote text, the author when available, and the associated category, allowing the frontend to display the information consistently and accurately." />
    </div>
  </div>
</section>
  );
}

export default QuotesPage;
