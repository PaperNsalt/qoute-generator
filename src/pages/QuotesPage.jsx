import { useState } from "react";
import { motion } from "motion/react";

import QuoteCard from "../components/QuoteCardComponent";
import ButtonLink from "../components/ButtonComponent";

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

  return (
    <section className="flex flex-col justify-center items-center mx-auto p-6 space-y-6">
      <h1 className="text-[4rem] font-bold text-center">Quote Generator</h1>

      {/* CATEGORY */}
      <div className="flex justify-center">
        <motion.select
          whileHover={{
            boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
            scale: 1.05, y: -2
          }}
          whileFocus={{
            boxShadow: "0px 0px 0px 3px rgba(99,102,241,0.35)",
            scale: 1.05, y: -2
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}

          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex justify-evenly px-4 py-2 rounded-xl border" >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </motion.select>
      </div>

      {/* BUTTON */}
      <div className="flex justify-center">
        <ButtonLink
          onClick={fetchQuotes}
          label={loading ? "Loading..." : "Show Quotes"}
          disabled={loading}
        />
      </div>

      {/* ERROR */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* LOADING */}
      {loading && (
        <p className="text-center text-[#94e3aa]">Fetching quotes...</p>
      )}

      {/* QUOTES */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,2fr))] gap-6">
        {quotes.map((q, index) => (
          <QuoteCard key={index} quote={q.quote} author={q.author} />
        ))}
      </div>
    </section>
  );
}

export default QuotesPage;
