import ButtonLink from "./ButtonComponent";
// import QuoteAnimation from "./LottieComponent"; // Ensure this import is correct in your file

function CardComponent({
  title,
  subtitle,
  AnimationComponent,
  icon,
  label,
  titleBgColor = "#b7ff5e",
  subtitleBgColor = "#b7ff5e",
  backgroundColor = "white",
}) {
  return (
    <div
      // 1. flex-col-reverse: Stacks animation on top, text on bottom for mobile.
      // 2. md:flex-row: Side-by-side on desktop.
      className="border border-b-8 rounded-3xl p-6 md:p-10 flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-0"
      style={{ background: `${backgroundColor}` }}
    >
      <div className="flex flex-col justify-between items-center md:items-start h-full w-full">
        {/* Typography:
            - text-4xl: Smaller font for mobile.
            - md:text-[3.6rem]: Original size for desktop.
            - items-center: Centers text on mobile.
         */}
        <h3 className="leading-tight md:leading-14 text-4xl md:text-[3.6rem] tracking-tighter flex flex-col items-center md:items-start">
          
          <span
            // Adjusted offsets (top-2 vs top-6) so spans overlap correctly on small screens
            className="relative top-2 md:top-6 z-10 py-2 px-4 md:py-4 md:px-4 rounded-2xl shadow-sm"
            style={{ background: `${titleBgColor}` }}
          >
            {title}
          </span>
          
          <span
            className="relative top-4 md:top-10 z-0 py-2 px-4 md:py-4 md:px-4 rounded-2xl bg-[#b7ff5e] shadow-sm"
            style={{ background: `${subtitleBgColor}` }}
          >
            {subtitle}
          </span>
        </h3>

        {/* <ButtonLink icon={icon} label={label} /> */}
      </div>

      {/* Animation Wrapper:
          - w-full / max-w-[200px]: Keeps animation from being huge on mobile.
          - md:max-w-[300px]: Allows full size on desktop.
      */}
      <div className="w-full max-w-[200px] md:max-w-[300px] flex justify-center items-center">
        {/* If your AnimationComponent accepts classNames for width/height, use them. 
            Otherwise, standard width/height props are okay if the parent div constrains them. */}
        <AnimationComponent width="100%" height="auto" /> 
      </div>
    </div>
  );
}

export default CardComponent;