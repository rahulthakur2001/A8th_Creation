import { useState } from "react";


const Faq = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:px-15 md:py-6 px-8 py-4">
      <div className="space-y-4">
        {data.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-2 w-full">
            <button
              className="w-full text-left flex justify-between items-center py-2 text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-4xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 w-full mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
