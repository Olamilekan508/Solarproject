import React, { useState } from 'react';
import './Faq.css';
import { faq } from '../../data';
import { FaPlus, FaTimes } from 'react-icons/fa';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="faq">
      <div className="container">
        <h1 className="title">
          Frequently <span className="g-text">Asked Questions</span>
        </h1>

        <div className="faq_list">
          {faq.map((list, index) => (
            <div
              key={index}
              className={`faq ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="question">
                <h3>{list.title}</h3>
                <div className="icon_container">
                  {activeIndex === index ? <FaTimes /> : <FaPlus />}
                </div>
              </div>

              {activeIndex === index && (
                <div className="answer">
                  <p className="text_muted">{list.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
