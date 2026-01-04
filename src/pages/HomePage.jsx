import { link } from "framer-motion/client";
import ButtonComponent from "../components/ButtonComponent.jsx";
import Carousel from "../components/CarouselComponent.jsx";
import { FacebookIcon } from "../components/IconComponent.jsx";

import QuoteAnimation from "../components/LottieComponent.jsx";

function HomePage() {
  const carouselItems = [
    {
      icon: FacebookIcon,
      title: "Inspire",
      text: "Daily motivation",
      link: "https://motion.dev/docs/react-carousel"
    },
    {
      icon: FacebookIcon,
      title: "Create",
      text: "Share ideas",
      link: "https://motion.dev/docs/react-carousel"
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel"
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel"
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel"
    },
    {
      icon: FacebookIcon,
      title: "Grow",
      text: "Build habits",
      link: "https://motion.dev/docs/react-carousel"
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

            <ButtonComponent label="Generate Qoutes" />
          </div>

          <div className="flex justify-center items-center">
            <QuoteAnimation />
          </div>
        </div>
      </section>

      <section>
        <Carousel items={carouselItems} speed={50} />
      </section>
    </>
  );
}

export default HomePage;
