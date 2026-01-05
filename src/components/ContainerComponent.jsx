import ButtonLink from "./ButtonComponent";
import { ArrowUpRightIcon } from "./IconComponent";

function ContainerComponent({
  text
}) {
  return (
    <>
      <div className="flex flex-col row justify-evenly items-start p-8">
        <p className="text-white">
          {text}
        </p>
        <ButtonLink label="Learn More" icon={ArrowUpRightIcon} />
      </div>
    </>
  );
}

export default ContainerComponent;
