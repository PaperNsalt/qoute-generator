import { motion, useAnimation } from "framer-motion";
import { useLayoutEffect, useRef, useEffect, useState } from "react";

function Carousel({ items, link, speed = 80 }) {
  const containerRef = useRef(null);
  const baseTrackRef = useRef(null);
  const controls = useAnimation();

  const [baseWidth, setBaseWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(2);

  // Measure ONE set of items
  useLayoutEffect(() => {
    if (!containerRef.current || !baseTrackRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const singleSetWidth = baseTrackRef.current.scrollWidth;

    // Ensure enough content to always cover screen
    const neededRepeats = Math.ceil(
      (containerWidth * 2) / singleSetWidth
    );

    setRepeatCount(Math.max(2, neededRepeats));
    setBaseWidth(singleSetWidth);
  }, [items]);

  // Animate ONLY one set width
  useEffect(() => {
    if (!baseWidth) return;

    controls.start({
      x: [0, -baseWidth],
      transition: {
        ease: "linear",
        duration: baseWidth / speed,
        repeat: Infinity,
      },
    });
  }, [controls, baseWidth, speed]);

  return (
    <div className="carousel-wrapper" ref={containerRef}>
      <div className="carousel">
        <motion.div className="track" animate={controls}>
          {/* Base set (used for measurement) */}
          <div className="set" ref={baseTrackRef}>
            {items.map((item, index) => (
              <Card item={item} key={`base-${index}`} />
            ))}
          </div>

          {/* Duplicated sets */}
          {Array.from({ length: repeatCount - 1 }).map((_, i) => (
            <div className="set" key={i}>
              {items.map((item, index) => (
                <Card item={item} key={`${i}-${index}`} />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    
    <div className="card">
    <a href={item.link} className="card">
      <div className="icon">{item.icon}</div>
      <div className="flex flex-col">
        <h3 className="title">{item.title}</h3>
        <p className="text">{item.text}</p>
      </div>
      </a>
    </div>
  );
}

export default Carousel;
