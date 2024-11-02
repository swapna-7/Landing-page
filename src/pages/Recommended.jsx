import React from 'react'
import { cn } from "../lib/utils";
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import headphone from '../assets/headphone.png'
import a1 from '../assets/a1.jpg'
import a2 from '../assets/a2.jpg'
import a3 from '../assets/a3.jpg'
import a4 from '../assets/a4.jpg'
import a5 from '../assets/a5.jpg'
import a6 from '../assets/a6.jpg'
import a7 from '../assets/a7.jpg'
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";


function Recommended() {
  const recommendedRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#recommended") {
      recommendedRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
    const items = [
        {
          title: "The Dawn of Innovation",
          description: "Explore the birth of groundbreaking ideas and inventions.",
          header: <img src={a1} alt="headphone" className='w-full h-2/4 ' />,
          icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "The Digital Revolution",
          description: "Dive into the transformative power of technology.",
          header: <img src={a2} alt="headphone" className='w-full h-2/4 ' />,
          icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "The Art of Design",
          description: "Discover the beauty of thoughtful and functional design.",
          header: <img src={a3} alt="headphone" className='w-full h-2/4 ' />,
          icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "The Power of Communication",
          description:
            "Understand the impact of effective communication in our lives.",
          header: <img src={a5} alt="headphone" className='w-full h-2/3 ' />,
          icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "The Pursuit of Knowledge",
          description: "Join the quest for understanding and enlightenment.",
          header: <img src={a4} alt="headphone" className='w-full h-2/4 ' />,
          icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "The Joy of Creation",
          description: "Experience the thrill of bringing ideas to life.",
          header: <img src={a6} alt="headphone" className='w-full h-2/4 ' />,
          icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
        },
        {
          title: "The Spirit of Adventure",
          description: "Embark on exciting journeys and thrilling discoveries.",
          header: <img src={a7} alt="headphone" className='w-full h-2/3 ' />,
          icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        },
      ];
      return (
          <div ref={recommendedRef}>
      <h1 className='text-white font-serif font-semibold text-3xl text-center m-10'>RECOMMENDED</h1>  
      <BentoGrid className="max-w-4xl mx-auto mb-8">
      {items.map((item, i) => (
          <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
    </BentoGrid>
    </div>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 justify-center items-center w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
export default Recommended
