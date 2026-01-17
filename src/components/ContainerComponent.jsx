import ButtonLink from "./ButtonComponent";
import { ArrowUpRightIcon } from "./IconComponent";

function ContainerComponent({ text, onClick }) {
  return (
    <div className="flex flex-col justify-between gap-6 p-8 border-r border-white">
      <p className="text-white">
        {text}
      </p>

      <ButtonLink
        label="Learn More"
        icon={ArrowUpRightIcon}
        onClick={onClick}
      />
    </div>
  );
}

export default ContainerComponent;
