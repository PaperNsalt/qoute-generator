import {
  HeartIcon,
  QuoteLeftIcon,
  QuoteRightIcon,
  CopyIcon,
} from "./IconComponent";
import ButtonLink from "./ButtonComponent";

function QuoteCard({ quote, author, isFavorite, onToggleFavorite }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`"${quote}" — ${author}`);
      alert("Quote copied!");
    } catch {
      alert("Failed to copy");
    }
  };

  return (
    <div className="flex flex-col justify-between gap-6 max-w-500 min-w-60 max-h-90 p-8 border border-b-8 rounded-xl shadow-sm hover:shadow-md transition bg-white relative">
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
      <div className="flex justify-end gap-3 mt-4">
        {/* COPY BUTTON */}
        <ButtonLink icon={CopyIcon} label="Copy" onClick={handleCopy} />

        {/* FAVORITE BUTTON */}
        <ButtonLink
          icon={HeartIcon}
          label={isFavorite ? "Saved" : "Save"}
          onClick={onToggleFavorite}
          className={`transition ${
            isFavorite ? "bg-red-500 text-white scale-105" : ""
          }`}
        />
      </div>
    </div>
  );
}

export default QuoteCard;
