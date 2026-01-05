import { useEffect, useState } from "react";

function QuotesPage() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("https://api.api-ninjas.com/v2/quotes", {
      headers: { "X-Api-Key": "txatJb/rZpJo/4Lx1LuKlQ==LS5T6W04jkobYMQf" }
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setQuotes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold mb-4">Quotes</h1>
      {quotes.map((quote, index) => (
        <div key={index} className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
          <p className="text-lg italic">“{quote.quote}”</p>
          <p className="text-right text-sm text-gray-500 mt-2">— {quote.author}</p>
        </div>
      ))}
    </section>
  );
}

export default QuotesPage;
