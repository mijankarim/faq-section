import iconOpen from "../assets/icon-open.png";
import iconClose from "../assets/icon-close.png";
import { useState, useId } from "react";

const getFaqHeaderId = (faqId, value) => {
  return faqId + "-header-" + value;
};

const getFaqPanelId = (faqId, value) => {
  return faqId + "-panel-" + value;
};

const FaqItem = ({ question, answer, index, faqData, id }) => {
  const faqId = useId();
  const [faqOpen, setFaqOpen] = useState(true);
  const headerId = getFaqHeaderId(faqId, id);
  const panelId = getFaqPanelId(faqId, id);
  console.log(headerId);
  console.log(panelId);
  const toggleFaq = () => {
    setFaqOpen(!faqOpen);
  };
  return (
    <div
      className={`flex flex-col gap-2  ${
        index === faqData.length - 1 ? "border-0" : "border-b"
      }`}
    >
      <button
        onClick={toggleFaq}
        className="flex gap-4 text-start justify-between"
        aria-controls={panelId}
        aria-expanded={faqOpen}
        id={headerId}
      >
        <span className="text-lg text-neutral-900 font-medium">{question}</span>
        {faqOpen ? (
          <img
            className="w-6 p-0.5"
            src={iconClose}
            alt="Close"
            aria-hidden="true"
          />
        ) : (
          <img
            className="w-6 p-0.5"
            src={iconOpen}
            alt="open"
            aria-hidden="true"
          />
        )}
      </button>

      <p
        id={panelId}
        aria-labelledby={headerId}
        role="region"
        className={`text-base text-neutral-600 font-normal  transition-faq pb-7 pe-10 ${
          faqOpen ? "opacity-100  max-h-96" : "opacity-0  max-h-0"
        } `}
      >
        {answer}
      </p>
    </div>
  );
};

export default FaqItem;
