import { link } from "framer-motion/client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import ButtonLink from "../components/ButtonComponent.jsx";
import Carousel from "../components/CarouselComponent.jsx";
import CardComponent from "../components/CardComponent.jsx";
import ContainerComponent from "../components/ContainerComponent.jsx";

import {
  ArrowUpRightIcon,
  BookOpenIcon,
  CompassIcon,
  HeartIcon,
  PenLineIcon,
  ShareIcon,
  SparkleIcon,
} from "../components/IconComponent.jsx";

import QuoteAnimation from "../components/LottieComponent.jsx";
import DiceRoll from "../components/DiceRollLottie.jsx";
import RunningMan from "../components/RunningManAnimation.jsx";

function HomePage() {
  const [quoteOfDay, setQuoteOfDay] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuoteOfTheDay = async () => {
    setLoading(true);

    try {
      const res = await fetch("https://api.api-ninjas.com/v2/quotes?limit=1", {
        headers: {
          "X-Api-Key": import.meta.env.VITE_API_KEY,
        },
        cache: "no-store",
      });

      if (!res.ok) throw new Error("Failed to fetch quote");

      const data = await res.json();
      setQuoteOfDay(data[0]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const carouselItems = [
    {
      icon: SparkleIcon,
      title: "Inspire",
      text: "Daily motivation",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: BookOpenIcon,
      title: "Reflect",
      text: "Meaningful thoughts",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: CompassIcon,
      title: "Discover",
      text: "New Perspectives",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: PenLineIcon,
      title: "Create",
      text: "Personal Insights",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: HeartIcon,
      title: "Save",
      text: "Favorite quotes",
      link: "https://motion.dev/docs/react-carousel",
    },
    {
      icon: ShareIcon,
      title: "Share",
      text: "Spread inspiration",
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
              Discover meaningful quotes that motivate, challenge, and inspire.
              From timeless wisdom to modern thoughts, explore words that
              resonate with your journey.
            </p>

            <ButtonLink
              label={loading ? "Loading..." : "Quote of the Day"}
              onClick={fetchQuoteOfTheDay}
            />

            {/* QUOTE PANEL */}
            <AnimatePresence>
              {quoteOfDay && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="mt-8 p-6 bg-white border border-b-8 rounded-2xl shadow-md max-w-md"
                >
                  <p className="italic text-[1.2rem] mb-4">
                    “{quoteOfDay.quote}”
                  </p>

                  <p className="text-right font-medium bg-[#b7ff5e] inline-block px-3 py-1 rounded-lg">
                    — {quoteOfDay.author || "Unknown"}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
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
          <h1 className="text-[3.4rem] w-full bg-[#b7ff5e] py-2 px-4 rounded-2xl">
            Why Quotes Matter
          </h1>

          <p>
            Quotes have the power to inspire action, spark creativity, and
            provide comfort during challenging times. A single sentence can
            shift perspective and motivate positive change. This app was created
            to make inspiration easily accessible—anytime, anywhere.
          </p>
        </div>

        <div></div>
      </section>

      <section>
        <div className="p-10 grid grid-cols-[repeat(auto-fit,minmax(600px,2fr))] gap-8">
          <CardComponent
            title="Random"
            subtitle="Quotes"
            icon={ArrowUpRightIcon}
            label="Learn More"
            AnimationComponent={DiceRoll}
          />

          <CardComponent
            title="Fast"
            subtitle="Interface"
            backgroundColor="black"
            titleBgColor="white"
            subtitleBgColor="white"
            icon={ArrowUpRightIcon}
            label="Learn More"
            AnimationComponent={RunningMan}
          />

          <CardComponent
            title="Smooth"
            subtitle="Design"
            backgroundColor="black"
            titleBgColor="white"
            subtitleBgColor="white"
            icon={ArrowUpRightIcon}
            label="Learn More"
            AnimationComponent={QuoteAnimation}
          />

          <CardComponent
            title="Save"
            subtitle="Favorites"
            icon={ArrowUpRightIcon}
            label="Learn More"
            AnimationComponent={QuoteAnimation}
          />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-2 p-10">
          <div className="flex flex-col justify-evenly items-start">
            <h1 className="text-[3.8rem]">Let's make things happen</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              cum fuga ea provident tenetur id eius minus necessitatibus
              incidunt omnis molestias, quam mollitia, consequatur earum!
              Laudantium assumenda mollitia porro option. Lorem ipsum, dolor sit
              amet consectetur adipisicing elit. Nemo illo incidunt non tempora
              provident! Ipsa cumque perferendis doloremque voluptatem non
              consequatur laborum veritatis temporibus dolorum ex ducimus,
              doloribus quas! Quo!
            </p>

            <ButtonLink label="Get your free proposal" />
          </div>

          <div className="flex justify-center items-center">
            <QuoteAnimation />
          </div>
        </div>
      </section>

      <section>
        <div className="p-10 flex gap-4 justify-start items-center">
          <h1 className="text-[3.8rem] bg-[#b7ff5e] py-2 px-4 rounded-2xl">
            Purpose
          </h1>

          <p>
            The goal of this project is to demonstrate clean UI design, smooth
            animations, and efficient state management using React.
          </p>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,2fr))] bg-black p-10 rounded-3xl">
          <ContainerComponent text="This Quote Generator is a simple and modern web application built to deliver inspiration instantly. It allows users to browse, search, and save quotes that reflect different moods, themes, and life perspectives." />

          <ContainerComponent text="Designed to be user-friendly for everyone, including mobile users and those with accessibility needs." />
          <ContainerComponent text="Quotes are easily updatable and scalable, allowing for future expansion and customization." />
        </div>
      </section>
    </>
  );
}

export default HomePage;
