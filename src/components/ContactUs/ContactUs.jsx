import React from "react";
import Faq from "../Dashboard/Faq";

const ContactUs = () => {
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
      question: "What’s the difference between free and premium images?",
      answer:
        "Free images may require attribution and have limited resolutions, while premium images come with higher quality, exclusive rights, and no attribution requirements.",
    },
  ];
  return (
    <div>
      <div className="w-full min-h-screen p-10">
        <div className="max-w-6xl mx-auto flex justify-between gap-15">
          {/* Left Section */}
          <div className="w-[60%] pt-20">
            <h1 className="text-5xl font-semibold mb-5">Contact Us</h1>
            <p className="text-gray-600 mb-4 w-100">
              Email, call, or complete the form to learn how A8th creation can
              solve your messaging problem.
            </p>
            <p className="text-gray-600 mb-4">
              <a href="mailto:a8thcreation@gmail.com">a8thcreation@gmail.com</a>
            </p>
            <a href="#" className="underline font-semibold text-[14px]">
              Customer Support
            </a>

            {/* Additional Information */}
            <div className="mt-10 flex space-x-2">
              <div>
                <h3 className="text-[17px] font-semibold">Customer Support</h3>
                <p className="text-gray-600 text-[14px] mb-6">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>

              <div>
                <h3 className="text-[17px] font-semibold">
                  Feedback and Suggestions
                </h3>
                <p className="text-gray-600 text-[14px] mb-6">
                  We value your feedback and are continuously working to improve
                  Snappy. Your input is crucial.
                </p>
              </div>

              <div>
                <h3 className="text-[17px] font-semibold">Media Inquiries</h3>
                <p className="text-gray-600 text-[14px]">
                  For media-related questions or press inquiries, contact us at{" "}
                  <a
                    href="mailto:a8thcreation@gmail.com"
                    className="text-blue-600"
                  >
                    a8thcreation@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-lg w-[40%]">
            <h2 className="text-3xl font-bold mb-1">Get in Touch</h2>
            <p className="text-gray-600 font-semibold mb-6">
              You can reach us anytime
            </p>

            <form>
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3 border border-gray-400 rounded-4xl"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 border border-gray-400 rounded-4xl"
                />
              </div>

              {/* Email */}
              <div className="mt-4 relative">
                <span className="absolute left-3 top-3">📧</span>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full p-3 pl-10 border border-gray-400 rounded-4xl"
                />
              </div>

              {/* Phone Number */}
              <div className="mt-4 flex">
                <select className="p-3 border border-gray-400 rounded-l-4xl font-bold">
                  <option>+91</option>
                  <option>+1</option>
                  <option>+81</option>
                </select>
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full p-3 border border-gray-400 rounded-r-4xl"
                />
              </div>

              {/* Message */}
              <textarea
                minlength="3"
                maxlength="120"
                placeholder="How can we help?"
                className="w-full p-3 border border-gray-400 rounded-3xl mt-4 h-28 max-h-30"
              ></textarea>

              {/* Submit Button */}
              <button className="w-full mt-4 bg-blue-600 text-white p-3 rounded-4xl">
                Submit
              </button>
            </form>

            <p className="text-gray-500 text-center font-semibold text-sm mt-4">
              By contacting us, you agree to our{" "}
              <a href="#" className="text-blue-600">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-600">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
          {/* Left Section - Map (Embed using iframe) */}
          <div className="relative">
            <iframe
              className="w-full h-120 border-2 border-gray-300 rounded-4xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.8602700909732!2d77.1459665740984!3d28.723721579936324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0176e2655757%3A0xecfb8918d8e62f21!2sA-Sign%20INSTITUTE!5e0!3m2!1sen!2sin!4v1743761286987!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            {/* Map Card */}
            <div className="absolute bottom-14 left-14 bg-white shadow-lg p-4 rounded-lg w-74">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                  A
                </div>
                <div className="ml-3">
                  <h4 className="text-lg font-semibold">A8th creation</h4>
                  <p className="text-gray-500 text-sm">
                    by the vision of A-sign Institute
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mt-3 text-sm">
                <span className="font-semibold">Haiderpur Village, Delhi</span>
                <br />
                Sunrise public School Building, Main Road
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium mt-3 inline-block"
              >
                Open Google Maps →
              </a>
            </div>
          </div>

          {/* Right Section - Address */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Our Location</h3>
            <h1 className="text-4xl font-bold my-2">Connecting Near and Far</h1>

            <h4 className="text-xl font-semibold mt-8">
              Our Institute Address
            </h4>
            <p className="text-gray-600 mt-2">
              A8th Creation
              <br />
              Sunrise public School Building, Main Rd,
              <br />
              opposite Aggrawal Sweets, Gobind Mohalla, Haiderpur,
              <br />
              New Delhi, 110088
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <div className="text-center">
          <h2 className="text-2xl mb-4">FAQ</h2>
          <p className="font-semibold text-3xl">
            Do you have any questions for us?
          </p>
          <span>
            If there are any question you want to ask. We will answer all your
            question.
          </span>
          <div className="flex gap-2 px-100 mt-4 relative">
            <span className="absolute left-3 pl-100 top-3">📧</span>
            <input
              type="email"
              placeholder="Your email"
              className="w-100 p-3 pl-10 border border-gray-400 rounded-4xl"
            />
            <button className="bg-blue-500 text-white px-4 rounded-4xl">
              Submit
            </button>
          </div>
        </div>
        <Faq data={faqs} />
      </div>

      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmNoeHM0OGg5NHNqOG9uN3E0dmcxbnZnM25wZXZlc3FsaWF5cGpvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRGoqbUQvk8nwTC/giphy.gif"
          alt="Background"
          className="w-full h-full object-cover absolute opacity-80"
        />

        {/* Text and Buttons */}
        <div className="text-center text-white z-1">
          <h1 className="text-5xl w-200 leading-tight font-semibold mb-6">
            Ready to experience the speed and simplicity of A8th Creation?
          </h1>

          <div className="flex justify-center space-x-4">
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-4xl">
              Get Started
            </button>
            <button className="text-white border border-white font-semibold py-2 px-6 rounded-4xl">
              Learn More &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
