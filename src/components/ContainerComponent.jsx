import ButtonLink from "./ButtonComponent";
import { ArrowUpRightIcon } from "./IconComponent";

function ContainerComponent({
  text,
  href
}) {
  return (
    <>
      <div className="flex flex-col row justify-evenly gap-4 items-start p-8 border-r border-white">
        <div>
        <p className="text-white">
          {text}
        </p>
        </div>
        <div>
        <ButtonLink label="Learn More" icon={ArrowUpRightIcon} href={href} />
        </div>
      </div>
    </>
  );
}

export default ContainerComponent;
