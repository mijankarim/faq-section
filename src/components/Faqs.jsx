import FaqItem from "./FaqItem";
import faqData from "../data/faq.json";

const Faqs = () => {
  return (
    <>
      <div className="flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-5 text-center">
          <h2 className="text-3xl text-neutral-900 font-semibold md:text-5xl">
            Frequently asked questions
          </h2>
          <p className="text-lg text-neutral-600 font-normal md:text-xl">
            Choose any questions you need
          </p>
        </div>

        <div className="flex flex-col gap-7">
          {faqData?.map((faq, index, faqData) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              index={index}
              faqData={faqData}
              id={faq.id}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 p-4 md:p-8 border border-neutral-200 shadow-md rounded-lg justify-between items-center">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl text-neutral-900 font-semibold">
            Can’t find the answer you’re looking for?
          </h3>
          <p className="text-base text-neutral-600 font-normal">
            Reach out to our{" "}
            <a href="#" className="text-indigo-700">
              customer support
            </a>{" "}
            team.
          </p>
        </div>
        <a
          href="#"
          className="text-white text-base font-medium bg-indigo-700 px-[22px] py-3 rounded w-full md:w-auto"
        >
          Get in touch
        </a>
      </div>
    </>
  );
};

export default Faqs;
