import { useEffect, useState } from "react";
import Faq from "./Faq";
import { FaChevronCircleRight } from "react-icons/fa";
import image from "../../assets/animation.gif";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdHighQuality, MdOtherHouses } from "react-icons/md";
import { PiDownloadDuotone } from "react-icons/pi";

const Typewriter = ({ texts, period = 2000 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(50);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length;
      const fullText = texts[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
        setDelta(100);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(50);
      }
    };

    const ticker = setTimeout(handleTyping, delta);
    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, texts, period, delta]);

  return (
    <span className="border-r-2 border-white pr-1 duration-500 animate-none">
      {text}
    </span>
  );
};

const TypewriterComponent = () => {
  const iconFamilies = [
    {
      title: "Special Lineal",
      imgSrc: "https://via.placeholder.com/300",
      author: "Freepik",
    },
    {
      title: "Basic Rounded Lineal",
      imgSrc: "https://via.placeholder.com/300",
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: "https://via.placeholder.com/300",
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: "https://via.placeholder.com/300",
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: "https://via.placeholder.com/300",
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: "https://via.placeholder.com/300",
      author: "Freepik",
    },
  ];
  const data = {
    title: "The biggest free icon library",
    subtitle: "Unlock creativity with millions of icons, crafted for designers and creators on A8th Creation.",
    features: [
      {
        icon: <PiDownloadDuotone size={30}/>,
        title: "10M+ PNG and SVG icons",
        description: "Choose between free with attribution or Premium formats.",
      },
      {
        icon: <MdHighQuality size={30}/>,
        title: "High-quality icons every day",
        description: "Keep your designs fresh and up-to-date with thousands of new icons daily.",
      },
      {
        icon: <MdOtherHouses size={30}/>        ,
        title: "Commercial or personal use",
        description: "You can create any kind of projects. Just make sure you follow Freepik’s usage rules.",
      },
    ],
  };
  return (
    <div>
      <div className="absolute h-100 w-314">
        <img src={image} alt="" className="object-cover h-full w-full" />
      </div>
      <div className="relative flex flex-col justify-center items-center h-100 p-10 text-white text-center">
        <h1 className="text-4xl md:text-3xl font-semibold">
          Discover Stunning Icons & Images –
          <Typewriter
            texts={[
              " Perfect for Creatives!",
              " Elevate Your Projects!",
              " Download Instantly!",
              " Free & Premium Collections!",
              " Designed for You!",
            ]}
            period={2000}
          />
        </h1>
        <span className="mt-2">
          10M+ free PNG and SVG icons, including the one you have in mind
        </span>
        <button className="flex items-center gap-2 border-2 rounded-sm p-2 mt-7 bg-cyan-800 hover:bg-cyan-900 cursor-pointer">
          Explore Now <FaChevronCircleRight size={18} />
        </button>
      </div>


      <section className="px-15 py-6">
        <div className="flex items-center justify-between">
        <div>
      <h2 className="text-2xl font-bold">
      Curated icon families for <span className="text-blue-600">seamless design </span>
      </h2>
      <p className="text-gray-600">Effortlessly browse and use icons that fit perfectly together in your creative projects.</p>
      </div>
      <div className="mt-6 text-right">
        <button className="px-4 py-2 border rounded-md text-blue-600 hover:bg-gray-100">Discover more</button>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {iconFamilies.map((family, index) => (
          <div key={index} className="border rounded-lg p-4 h-50 shadow-sm">
            <img src={family.imgSrc} alt={family.title} className="w-full rounded-md" />
            <h3 className="mt-3 font-semibold">{family.title}</h3>
            <p className="text-sm text-gray-500">icons by <span className="text-blue-500">{family.author}</span></p>
            <button className="flex items-center gap-2 mt-3 px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm">Explore<FaArrowRightLong size={12}/></button>
          </div>
        ))}
      </div>
    </section>

    <section className="text-center py-12 px-4">
      <h2 className="text-3xl font-semibold text-gray-900">
        {data.title.split("icon library")}
        {data.title.split("The biggest free").map((part, index) => (
          <span key={index} className={index === 1 ? "text-blue-500" : ""}>
            {part}
          </span>
        ))}
      </h2>
      <p className="text-gray-500 mt-2">{data.subtitle}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {data.features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center items-center w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
      <Faq />
    </div>
  );
};

export default TypewriterComponent;
