import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
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
    <section className="">
      <div className="p-10">
      <h1 className="text-[4rem] font-bold text-center mb-10">
        Favorite Quotes
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No saved quotes yet.
        </p>
      ) : (
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-[repeat(auto-fit,minmax(300px,2fr))] gap-6"
          >
            {favorites.map((q, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
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
