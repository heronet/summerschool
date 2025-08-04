import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Can high school students join?",
    answer:
      "This event is only meant for undergrad students but provided that seats are available after selection of undergrad students, high school students are going to be considered for this event.",
  },
  {
    question: "Is financial aid available?",
    answer: "Unfortunately we are not providing any sort of financial aid.",
  },
  {
    question: "Can only students from SUST apply?",
    answer: "No. Students from any institute in Bangladesh can apply.",
  },
  {
    question:
      "Can I participate only in the online phase of the summer school?",
    answer:
      "You can participate only in the online phase if you want but in that case you won't receive certificate of accomplishment at the end of the summer school.",
  },
];

export default function FAQContent() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center">
          <HelpCircle className="w-8 h-8 text-purple-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions about the CAMSUST Summer School
          program.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-900 pr-4">
                {item.question}
              </h3>
              <div className="flex-shrink-0">
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </button>

            {openItems.includes(index) && (
              <div className="px-6 pb-6">
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
