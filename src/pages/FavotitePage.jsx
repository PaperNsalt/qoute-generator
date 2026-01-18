import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react"; // or "framer-motion"
import QuoteCard from "../components/QuoteCardComponent";

function FavoritePage() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favoriteQuotes");
    setFavorites(saved ? JSON.parse(saved) : []);
  }, []);

  const toggleFavorite = (quote) => {
    const updated = favorites.filter(
      (q) => !(q.quote === quote.quote && q.author === quote.author)
    );

    setFavorites(updated);
    localStorage.setItem("favoriteQuotes", JSON.stringify(updated));
  };

  return (
    <section className="min-h-[80vh] mt-10">
      {/* 1. p-4: Reduced padding on mobile.
        2. md:p-10: Restored padding on desktop.
        3. max-w-7xl mx-auto: Centers content on very large screens.
      */}
      <div className="p-4 md:p-10 max-w-7xl mx-auto">
        
        {/* HEADING
            1. text-4xl: Smaller on mobile.
            2. md:text-[4rem]: Large on desktop.
            3. mt-20: Adds space if navbar is fixed.
        */}
        <h1 className="text-4xl md:text-[4rem] font-bold text-center mb-8 md:mb-10 mt-20 md:mt-0">
          Favorite Quotes
        </h1>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20 gap-4">
            <p className="text-center text-gray-500 text-lg">
              No saved quotes yet.
            </p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              /* GRID UPDATE:
                 - grid-cols-1: Mobile (stacks vertically).
                 - md:grid-cols-2: Tablet (2 columns).
                 - lg:grid-cols-3: Desktop (3 columns).
                 This is more stable than auto-fit for cards with varying text lengths.
              */
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {favorites.map((q) => (
                <motion.div
                  // FIX: Use a unique ID (quote text) instead of index for keys.
                  // This ensures the exit animation plays on the correct card when deleting.
                  key={`${q.quote}-${q.author}`} 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <QuoteCard
                    quote={q.quote}
                    author={q.author}
                    isFavorite={true}
                    onToggleFavorite={() => toggleFavorite(q)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}

export default FavoritePage;