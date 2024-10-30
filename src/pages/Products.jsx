import React from 'react'
import { Carousel, Card } from "../components/ui/apple-cards-carousel";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpg";
import b4 from "../assets/b4.jpg";
import b5 from "../assets/b5.jpg";
import b6 from "../assets/b6.jpg";


function Products() {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
  return (
    <div className='bg-black p-10'>
      <h1 className='text-white font-serif font-semibold text-3xl text-center mt-10'>PRODUCTS</h1>  
      <div className=''>
      <div className="w-full h-full ">
      
      <Carousel items={cards} />
    </div>

      </div>
    </div>
  )
}

const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <img
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
   
  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: b1,
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: b2,
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: b3,
      content: <DummyContent />,
    },
   
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: b4,
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: b5,
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src: b6,
      content: <DummyContent />,
    },
  ];
  

export default Products
