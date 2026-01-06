import { QuoteLeftIcon, QuoteRightIcon } from "./IconComponent";
import ButtonLink from "./ButtonComponent";

function QuoteCard({ quote, author }) {
  return (
    <div className="flex flex-col justify-center gap-6 max-w-500 min-w-60 max-h-90 p-8 border rounded-xl shadow-sm hover:shadow-md transition bg-white">
      <div className="flex justify-start items-start">{QuoteLeftIcon}</div>
      <p className="text-[1.2rem] italic">{quote}</p>
      <div className="flex justify-end">{QuoteRightIcon}</div>

      <div className="flex justify-end">
        <p className="text-right text-[1rem] py-1 px-2 bg-[#b7ff5e] rounded-lg text-black mt-2">
          — {author}
        </p>
      </div>
    </div>
  );
}

export default QuoteCard;
