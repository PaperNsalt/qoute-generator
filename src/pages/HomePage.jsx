import { link, title } from "framer-motion/client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import ButtonLink from "../components/ButtonComponent.jsx";
import Carousel from "../components/CarouselComponent.jsx";
import CardComponent from "../components/CardComponent.jsx";
import ContainerComponent from "../components/ContainerComponent.jsx";
import LearnMoreComponent from "../components/LearnMoreComponent.jsx";

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
import { NotebookPen } from "lucide-react";

function HomePage() {
  const [quoteOfDay, setQuoteOfDay] = useState(null);
  const [loading, setLoading] = useState(false);

  const [activeContent, setActiveContent] = useState("about");

  const contentMap = {
    about: {
      title: "About the Quote Generator",
      paragraphs: [
        "This Quote Generator is a simple and modern web application built to deliver inspiration instantly.",
        "It allows users to browse, search, and save quotes that reflect different moods and perspectives.",
      ],
    },
    accessibility: {
      title: "Accessibility & Usability",
      paragraphs: [
        "The application is designed to be user-friendly for everyone.",
        "Special attention is given to mobile responsiveness and accessibility best practices.",
      ],
    },
    scalability: {
      title: "Scalable & Future-Ready",
      paragraphs: [
        "Quotes are stored in a scalable structure that supports future expansion.",
        "New categories and features can be added without affecting existing functionality.",
      ],
    },
  };

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
  {/* 1. Grid: Changed to 1 column on mobile, 2 columns on medium screens (md:).
    2. Gap: Added gap-8 to separate text and animation on mobile.
    3. Padding: Reduced to p-6 on mobile, p-10 on desktop.
  */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 p-6 md:p-10 min-h-screen md:min-h-0">
    
    {/* Flex Container: 
      - Items centered on mobile (items-center).
      - Items start-aligned on desktop (md:items-start).
      - Text centered on mobile (text-center), left on desktop (md:text-left).
    */}
    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left order-1">
      
      {/* Heading: 
        - text-4xl on mobile (readable).
        - text-5xl on tablet.
        - text-[4rem] on large desktop.
      */}
      <h1 className="text-4xl md:text-5xl lg:text-[4rem] leading-tight md:leading-16 font-bold">
        Generate inspiring quotes anytime, anywhere
      </h1>

      <p className="mt-6 md:mt-10 mb-8 md:mb-4 text-base md:text-lg text-gray-600 max-w-lg">
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
            // Added w-full to ensure it uses available width on mobile
            className="mt-8 p-6 bg-white border border-b-8 rounded-2xl shadow-md w-full max-w-md mx-auto md:mx-0 text-left"
          >
            <p className="italic text-lg md:text-[1.2rem] mb-4 text-gray-800">
              “{quoteOfDay.quote}”
            </p>

            <div className="text-right">
              <p className="font-medium bg-[#b7ff5e] inline-block px-3 py-1 rounded-lg text-sm md:text-base">
                — {quoteOfDay.author || "Unknown"}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    {/* Right Column (Animation): 
      - Order-2 ensures it stays below text on mobile (or change to order-1 to put it on top).
      - hidden/block logic can be added here if you want to hide the animation on very small screens.
    */}
    <div className="hidden md:flex justify-center items-center order-2">
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

      <section className="space-y-20">
        
      <LearnMoreComponent
        title={contentMap[activeContent].title}
        paragraphs={contentMap[activeContent].paragraphs}
      />

      {/* Top Cards */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,2fr))] bg-black p-10 rounded-3xl">
        <ContainerComponent
          text="This Quote Generator is a simple and modern web application built to deliver inspiration instantly."
          onClick={() => setActiveContent("about")}
        />

        <ContainerComponent
          text="Designed to be user-friendly for everyone, including mobile users and accessibility needs."
          onClick={() => setActiveContent("accessibility")}
        />

        <ContainerComponent
          text="Quotes are easily updatable and scalable for future expansion and customization."
          onClick={() => setActiveContent("scalability")}
        />
      </div>

      
     </section>
    </>
  );
}

export default HomePage;
