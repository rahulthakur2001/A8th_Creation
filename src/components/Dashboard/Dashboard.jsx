import { useEffect, useState } from "react";
import Faq from "./Faq";
import { FaChevronCircleRight } from "react-icons/fa";
import image from "../../assets/animation.gif";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdHighQuality, MdOtherHouses } from "react-icons/md";
import { PiDownloadDuotone } from "react-icons/pi";
import mahadev from "../../assets/MahadevWallper.jpg";
import { useNavigate } from "react-router-dom";

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
  const navigate  = useNavigate();
  const handlenavigate = () => {
    navigate("/exploreAll");
  }

  const iconFamilies = [
    {
      title: "Special Lineal",
      imgSrc: mahadev,
      author: "Freepik",
    },
    {
      title: "Basic Rounded Lineal",
      imgSrc: null, // Changed from empty string to null
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: mahadev,
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: mahadev,
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: mahadev,
      author: "Freepik",
    },
    {
      title: "Special Lineal Color",
      imgSrc: mahadev,
      author: "Freepik",
    },
  ];
  const data = {
    title: "The biggest free icon library",
    subtitle:
      "Unlock creativity with millions of icons, crafted for designers and creators on A8th Creation.",
    features: [
      {
        icon: <PiDownloadDuotone size={30} />,
        title: "10M+ PNG and SVG icons",
        description: "Choose between free with attribution or Premium formats.",
      },
      {
        icon: <MdHighQuality size={30} />,
        title: "High-quality icons every day",
        description:
          "Keep your designs fresh and up-to-date with thousands of new icons daily.",
      },
      {
        icon: <MdOtherHouses size={30} />,
        title: "Commercial or personal use",
        description:
          "You can create any kind of projects. Just make sure you follow Freepik's usage rules.",
      },
    ],
  };
  const faqs = [
    {
      question: "Can I use the images for commercial projects?",
      answer:
        "Yes, you can use the images for commercial projects, but some may require a license or attribution. Please check the image details before use.",
    },
    {
      question: "Do I need to credit the artist when using the images?",
      answer:
        "Attribution depends on the image type. Free images may require crediting the artist, while premium images often come with a no-attribution license.",
    },
    {
      question: "Are the images available in high resolution?",
      answer:
        "Yes, most images are available in high resolution, making them perfect for both digital and print projects.",
    },
    {
      question: "Can I modify or edit the downloaded images?",
      answer:
        "Absolutely! You are allowed to modify images to fit your needs, but redistribution of the edited versions may be restricted.",
    },
    {
      question: "What's the difference between free and premium images?",
      answer:
        "Free images may require attribution and have limited resolutions, while premium images come with higher quality, exclusive rights, and no attribution requirements.",
    },
  ];

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
        <button onClick={handlenavigate} className="flex items-center gap-2 border-2 rounded-sm p-2 mt-7 bg-cyan-800 hover:bg-cyan-900 cursor-pointer">
          Explore Now <FaChevronCircleRight size={18} />
        </button>
      </div>

      <section className="px-15 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Curated icon families for{" "}
              <span className="text-blue-600">seamless design </span>
            </h2>
            <p className="text-gray-600">
              Effortlessly browse and use icons that fit perfectly together in
              your creative projects.
            </p>
          </div>
          <div className="mt-6 text-right">
            <button onClick={handlenavigate} className="px-4 py-2 border rounded-md text-blue-600 hover:bg-gray-100">
              Discover more
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {iconFamilies.map((family, index) => (
            <div key={index} className="border rounded-lg p-4 h-80 shadow-sm">
              {family.imgSrc ? (
                <img
                  src={family.imgSrc}
                  alt={family.title}
                  className="w-full rounded-md"
                />
              ) : (
                <div className="w-full h-46 bg-gray-200 rounded-md flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
              <h3 className="mt-3 font-semibold">{family.title}</h3>
              <p className="text-sm text-gray-500">
                icons by <span className="text-blue-500">{family.author}</span>
              </p>
              <button className="flex items-center gap-2 mt-3 px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm">
                Explore
                <FaArrowRightLong size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50 overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto">
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Creative design image"
              />
            </a>
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&amp;w=2672&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Design workspace"
              />
            </a>
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Creative materials"
              />
            </a>
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Design inspiration"
              />
            </a>
            <a href="#_">
              <img
                src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&amp;w=2574&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="Creative workspace"
              />
            </a>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
          <h2 className="text-4xl font-bold">The First slide</h2>
          <p className="mt-2">Scroll Down for next slide</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
          <h2 className="text-4xl font-bold">The Second slide</h2>
          <p className="mt-2">Scroll Down for next slide</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
          <h2 className="text-4xl font-bold">The Third slide</h2>
          <p className="mt-2">Scroll Down</p>
        </div>
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
          <h2 className="text-4xl font-bold">The Fourth slide</h2>
        </div>
      </div>

      <section className="text-center py-15 px-4">
        <h2 className="text-4xl font-semibold text-gray-900">
          {data.title.split(" icon library")[0]}
          <span className="text-blue-500"> icon library</span>
        </h2>
        <p className="text-gray-500 mt-2">{data.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-18 mb-12">
          {data.features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-500 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      <h2 className="text-2xl font-bold pt-10 pl-15">FAQ</h2>
      <Faq data={faqs} />
    </div>
  );
};

export default TypewriterComponent;