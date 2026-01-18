import ButtonLink from "./ButtonComponent";
import { ArrowUpRightIcon } from "./IconComponent";

function ContainerComponent({ text, onClick }) {
  return (
    <div
      className={`
        flex flex-col justify-between gap-6 p-6 md:p-8 
        border-white/20 
        border-b md:border-b-0 md:border-r 
        last:border-0
      `}
    >
      <p className="text-white text-base md:text-lg leading-relaxed">{text}</p>

      <ButtonLink
        label="Learn More"
        icon={ArrowUpRightIcon}
        onClick={onClick}
      />
    </div>
  );
}

export default ContainerComponent;
