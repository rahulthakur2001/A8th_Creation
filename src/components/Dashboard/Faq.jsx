import { useState } from "react";

const faqs = [
  { question: "Can I use the images for commercial projects?", answer: "Yes, you can use the images for commercial projects, but some may require a license or attribution. Please check the image details before use." },
  { question: "Do I need to credit the artist when using the images?", answer: "Attribution depends on the image type. Free images may require crediting the artist, while premium images often come with a no-attribution license." },
  { question: "Are the images available in high resolution?", answer: "Yes, most images are available in high resolution, making them perfect for both digital and print projects." },
  { question: "Can I modify or edit the downloaded images?", answer: "Absolutely! You are allowed to modify images to fit your needs, but redistribution of the edited versions may be restricted." },
  { question: "What’s the difference between free and premium images?", answer: "Free images may require attribution and have limited resolutions, while premium images come with higher quality, exclusive rights, and no attribution requirements." },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-15 py-6">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2">
            <button
              className="w-full text-left flex justify-between items-center py-2 text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-4xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
