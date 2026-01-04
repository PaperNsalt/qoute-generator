import { link } from "framer-motion/client";
import ButtonLink from "../components/ButtonComponent.jsx";
import Carousel from "../components/CarouselComponent.jsx";
import CardComponent from "../components/CardComponent.jsx";

import { ArrowUpRightIcon, FacebookIcon } from "../components/IconComponent.jsx";

import QuoteAnimation from "../components/LottieComponent.jsx";

function HomePage() {
  const carouselItems = [
    {
      icon: FacebookIcon,
      title: "Inspire",
      text: "Daily motivation",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: FacebookIcon,
      title: "Create",
      text: "Share ideas",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel",
    },
  ];

  return (
    <>
      <section>
        <div className="grid grid-cols-2 p-10">
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-[4rem] leading-16 text-left">
              Generate inspiring quotes anytime, anywhere
            </h1>

            <p className="mt-10 mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore,
              ducimus! Sunt consequatur amet laboriosam mollitia quis rem,
              soluta a modi nobis optio itaque dignissimos et, ratione ut,
              assumenda quia tempore.
            </p>

            <ButtonLink label="Generate Qoutes" />
          </div>

          <div className="flex justify-center items-center">
            <QuoteAnimation />
          </div>
        </div>
      </section>

      <section>
        <Carousel items={carouselItems} speed={50} />
      </section>

      <section>
        <div className="p-10 flex gap-4 justify-center items-center">
          <h1 className="text-[3.8rem] bg-[#b7ff5e] py-2 px-4 rounded-2xl">
            Services
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            eos a quam necessitatibus, quas sint beatae quisquam nulla,
            accusamus, deleniti distinctio maxime recusandae assumenda
            repellendus culpa officia saepe quibusdam reiciendis voluptatibus
            consectetur iusto? Quidem omnis praesentium rem id, fugiat est.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
            libero facilis, repellat voluptatum temporibus, quos impedit natus
            nisi velit officia unde amet debitis officiis commodi excepturi
            expedita quibusdam est delectus.
          </p>
        </div>

        <div></div>
      </section>

      <section>
        <div className="p-10 grid grid-cols-[repeat(auto-fit,minmax(600px,2fr))] gap-8">
          <CardComponent 
          title ="Search Engine"
          subtitle="optimization"
          icon={ArrowUpRightIcon}
          label="Learn More"
          AnimationComponent={QuoteAnimation}
          />

          <CardComponent 
          title ="Search Engine"
          subtitle="optimization"
          backgroundColor="black"
          titleBgColor="white"
          subtitleBgColor="white"
          icon={ArrowUpRightIcon}
          label="Learn More"
          AnimationComponent={QuoteAnimation}
          />

          <CardComponent 
          title ="Search Engine"
          subtitle="optimization"
          backgroundColor="black"
          titleBgColor="white"
          subtitleBgColor="white"
          icon={ArrowUpRightIcon}
          label="Learn More"
          AnimationComponent={QuoteAnimation}
          />

          <CardComponent 
          title ="Search Engine"
          subtitle="optimization"
          icon={ArrowUpRightIcon}
          label="Learn More"
          AnimationComponent={QuoteAnimation}
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;
