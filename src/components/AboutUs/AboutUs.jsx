import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiChevronRight } from "react-icons/bi";

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // For screen sizes 1024px and above
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
          slidesToScroll: 3, // Scroll 3 slides at a time
          infinite: true,
          dots: true, // Enable dots navigation
        },
      },
      {
        breakpoint: 768, // For screen sizes 768px and above
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 2, // Scroll 2 slides at a time
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // For screen sizes 480px and above (mobile devices)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1, // Scroll 1 slide at a time
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../../../public/Common/finisher-header.es5.min.js";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      new window.FinisherHeader({
        count: 10,
        size: {
          min: 2,
          max: 67,
          pulse: 0,
        },
        speed: {
          x: {
            min: 0,
            max: 0.8,
          },
          y: {
            min: 0,
            max: 0.2,
          },
        },
        colors: {
          background: "#FFFFFF",
          particles: ["#ff926b", "#87ddfe", "#acaaff", "#1bffc2", "#f9a5fe"],
        },
        blending: "lighten",
        opacity: {
          center: 0.45,
          edge: 0.6,
        },
        skew: 0,
        shapes: ["t", "c"],
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const cardData = [
    {
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "A8th Creation is the ultimate solution for the best tools for any creative work. I LOVE IT!!!",
    },
    {
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "A8th Creation is the ultimate solution for the best tools for any creative work. I LOVE IT!!!",
    },
    {
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "A8th Creation is the ultimate solution for the best tools for any creative work. I LOVE IT!!!",
    },
    {
      image:
        "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "A8th Creation is the ultimate solution for the best tools for any creative work. I LOVE IT!!!",
    },
  ];

  const faqData = {
    head: "Frequently Asked Questions",
    description: "Have a question for us? Find the answers here!",
    faqs: [
      {
        question: "What is a talent acquisition platform?",
        answer:
          "A talent acquisition platform is a digital platform that makes it easier for organizations to hire new employees. The process of branding, sourcing, engaging, assessing and hiring from different backgrounds, skill levels, and experiences are streamlined by this potent tool. When it comes to hiring top talent, skillheed is a one-stop-shop solution that keeps recruiters a step ahead of the competition by enabling them to find equally talented individuals in fewer steps.",
      },
      {
        question: "What is a hiring strategy?",
        answer:
          "A hiring strategy is a comprehensive plan of action used to find, attract, and hire the best talent for an organization. It includes steps such as defining roles, creating job descriptions, specifying qualifications and skills needed for each role, designing interviewing protocols, engagement activities, managing candidate databases, tracking metrics on completed hires, and measuring results. A well-thought-out hiring strategy can also save time and money while contributing to higher levels of employee satisfaction.",
      },
      {
        question: "What are the different recruitment methods?",
        answer:
          "Recruitment methods include job postings, employee referrals, recruitment agencies, campus hiring, and social media hiring.",
      },
      {
        question: "How can I recruit candidates fast?",
        answer:
          "To recruit candidates fast, utilize job boards, social media, employee referrals, and streamline your interview process.",
      },
    ],
  };
  return (
    <div>
      <div
        className="flex h-screen overflow-hidden finisher-header"
        style={{ width: "99.9%" }}
      >
        <div className="flex-1 md:p-15 p-5">
          <h1 className="text-4xl md:text-6xl font-semibold">
            Express the power of your ideas with Freepik
          </h1>
          <p className="mt-5 md:mt-10 text-xl md:text-2xl md:pr-20 pr-5">
            Founded in 2010, we’re the one-stop platform for all the cool
            solutions, content, and inspiration you need to express the power of
            your ideas.
          </p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row justify-between gap-0 md:p-0 p-5">
          <img
            src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full md:w-55 md:rounded-t-full h-50 md:h-50 mt-5 md:mt-70"
          />

          <img
            src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full md:w-55 rounded-t-full h-50 md:h-90 mt-5 md:mt-30"
          />

          <img
            src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full md:w-100 rounded-t-full h-50 md:h-80 rotate-180 mt-5 md:mt-0"
          />
        </div>
      </div>

      <div className="w-full flex h-full md:flex-row flex-col md:p-10 gap-10 md:mt-0 mt-20">
        <div className="flex-1 flex gap-0 md:p-0 p-5">
          <img
            src="https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            className="w-full h-80"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Express the power of your ideas with Freepik
          </h1>
          <p className="mt-5 md:mt-10 text-lg md:pr-20">
            Founded in 2010, we’re the one-stop platform for all the cool
            solutions, content, and inspiration you need to express the power of
            your ideas. Founded in 2010, we’re the one-stop platform for all the
            cool solutions, content, and inspiration you need to express the
            power of your ideas.
          </p>
        </div>
      </div>

      <div>
        <div class="p-20 bg-sky-200">
          <h3 class="text-xl font-light">
            Scroll Up and Down to see the parallax effect
          </h3>
        </div>

        <div
          class="w-full h-96 bg-fixed bg-cover bg-center flex justify-center items-center"
          style={{backgroundImage:"url(https://static.vecteezy.com/system/resources/previews/001/339/185/non_2x/abstract-banner-with-modern-wireframe-landscape-design-free-vector.jpg)"}}
        >
          <h1 class="text-white opacity-80 drop-shadow-md text-4xl italic font-bold">
            Welcome to KindaCode.com
          </h1>
        </div>

        <div class="p-20 space-y-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            imperdiet viverra ante et tincidunt. Nullam mollis, elit consectetur
            iaculis tempor, ante augue accumsan odio, ut feugiat eros velit sed
            nibh. Nam eu eros fermentum, aliquam sem at, accumsan augue. Aenean
            lacus lorem, interdum vel fermentum sed, sodales id libero. Nullam
            vulputate commodo urna id mattis. Fusce iaculis maximus felis.
            Nullam et orci at mi ultricies laoreet et eget ipsum. Aliquam luctus
            posuere efficitur. Mauris scelerisque leo malesuada tellus malesuada
            accumsan. Ut non metus velit. Vestibulum lectus nulla, ornare a nisl
            nec, pretium viverra tellus. Phasellus sit amet magna augue. Sed a
            diam pulvinar metus auctor tincidunt sed quis purus. Donec id lorem
            diam.
          </p>

          <p>
            {" "}
            Donec eros risus, porttitor eget risus vel, pulvinar hendrerit ante.
            Maecenas quis pretium metus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Nulla
            facilisi. Nam rutrum, augue et sagittis aliquam, mi nisi lobortis
            enim, eget egestas sapien urna in turpis. Quisque scelerisque dolor
            sagittis lorem accumsan, at tempus odio convallis. Nulla venenatis
            pulvinar ipsum vel auctor. Praesent a enim at erat fringilla
            lacinia. Aenean eu ultrices ante.
          </p>
        </div>
      </div>

      <div className="w-full h-full">
        <div className="pt-5 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            We say it straight
          </h2>
          <p className="px-5 md:px-80 mt-4 text-base md:text-lg text-gray-400 md:text-center">
            Yeah, that’s right. We talk to each other openly and honestly. Why?
            Because we care about working in an environment where everyone
            communicates directly and respectfully.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-15 md:px-18 px-7">
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">
              We walk and then we run
            </h2>
            <p className="mt-4 text-sm md:text-base">
              We like to take it one step at a time. We explore our playground,
              own it, and then expand it to meet new challenges. Each goal sets
              the stage for the next.
            </p>
          </div>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">
              We walk and then we run
            </h2>
            <p className="mt-4 text-sm md:text-base">
              We like to take it one step at a time. We explore our playground,
              own it, and then expand it to meet new challenges. Each goal sets
              the stage for the next.
            </p>
          </div>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">
              We walk and then we run
            </h2>
            <p className="mt-4 text-sm md:text-base">
              We like to take it one step at a time. We explore our playground,
              own it, and then expand it to meet new challenges. Each goal sets
              the stage for the next.
            </p>
          </div>
          <div className="w-full">
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-20 h-20 rounded-md"
            />
            <h2 className="mt-4 font-semibold text-xl">
              We walk and then we run
            </h2>
            <p className="mt-4 text-sm md:text-base">
              We like to take it one step at a time. We explore our playground,
              own it, and then expand it to meet new challenges. Each goal sets
              the stage for the next.
            </p>
          </div>
        </div>
      </div>
      <section className="w-full h-full">
        <div className="mt-40">
          <div className="px-10 text-center">
            <h2 className="text-2xl">What they say about us</h2>
            <p className="font-bold mt-3 text-4xl">
              The words that make us blush
            </p>
          </div>
          <div className="px-8 mt-20 cursor-col-resize">
            <Slider {...settings}>
              {Array.isArray(cardData) &&
                cardData.map((item, index) => (
                  <div>
                    <div className="w-full md:h-30 h-60 mb-5 m-auto flex gap-2 md:rounded-bl-full rounded-tr-full md:bg-gray-600 bg-amber-300 shadow-lg p-5 px-10">
                      <img
                        src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt="image"
                        className="w-20 h-20 rounded-full"
                      />
                      <p className="px-1 overflow-hidden text-ellipsis max-w-[calc(100%-5rem)]">
                        A8th Creation is the ultimate solution for the best
                        tools for any creative work. I LOVE IT!!!
                      </p>
                    </div>
                  </div>
                ))}
            </Slider>
          </div>
          <div className="px-10 text-center">
            <p className="font-bold mt-20 text-2xl">
              Trusted by the same companies you love
            </p>
          </div>
        </div>
      </section>

      <div className="w-full mt-100 md:px-20 px-5">
        <h2 className="text-3xl font-bold text-blue-900">{faqData.head}</h2>
        <p className="text-gray-600 mt-2 text-left">{faqData.description}</p>

        <div className="mt-6 space-y-4">
          {faqData?.faqs?.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="w-full text-left py-3 text-lg font-semibold flex justify-between items-center cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                {faq.question}
                <span
                  className={`text-gray-500 cursor-pointer transition-transform duration-300 hover:rotate-180 ${
                    openIndex === index ? "rotate-270" : "rotate-90"
                  }`}
                >
                  <BiChevronRight />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all cursor-pointer duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 pb-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
