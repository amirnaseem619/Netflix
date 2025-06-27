import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",

      answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more."
    },
    {
      question: "How much does Netflix cost?",
      answer: "Netflix has different pricing plans starting from $8.99 per month."
    },
    {
      question: "Where can I watch?",
      answer: "You can watch on any internet-connected device that offers the Netflix app, such as smart TVs, game consoles, streaming media players, etc."
    },
    {
      question: "How do I cancel?",
      answer: "You can cancel your subscription at any time by going to your account settings on Netflix."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "You can watch a wide variety of TV shows, movies, documentaries, and more."
    },
    {
      question: "Is Netflix good for kids?",
      answer: "Netflix has a Kids section with safe content for children and parental control features."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='bg-black'>
    <div className="max-w-5xl mx-auto p-4 bg-black">
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-2 bg-gray-800 rounded-md">
          <button
            className="w-full text-left px-4 py-3 flex justify-between items-center text-white"
            onClick={() => toggle(index)}
          >
            {faq.question}
            <span className="text-2xl">{openIndex === index ? '×' : '+'}</span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-2 text-white bg-gray-700">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      
    </div>
    
    </div>
    
  );
};

export default FAQ;
