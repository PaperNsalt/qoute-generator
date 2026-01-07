import ButtonLink from "./ButtonComponent";
import QuoteAnimation from "./LottieComponent";
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
    <>
      <div className="border border-b-8 rounded-3xl p-10 flex justify-between items-center"
      style={{ background: `${backgroundColor}`}}
      >
        <div className="flex flex-col justify-between items-start h-full">
          <h3 className="w-90 leading-14 text-[3.6rem] tracking-tighter">
            <span className="relative top-6 z-10 py-4 px-4 rounded-2xl" 
            style={{ background: `${titleBgColor}` }}
            >
              {" "}
              {title}
            </span>{" "}
            <span className="relative top-10 z-0 py-4 px-4 rounded-2xl bg-[#b7ff5e]"
            style={{ background: `${subtitleBgColor}` }}
            >
              {subtitle}
            </span>
          </h3>

          <ButtonLink icon={icon} label={label} />
        </div>

      
        
          <AnimationComponent width={300} height={300} />
        
      </div>
    </>
  );
}

export default CardComponent;
