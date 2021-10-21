import React, { useState } from "react";
import FAQ from './FAQ';
import './FaqContainer.css';

const FaqContainer = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'How much wood could a wood chuck chuck if a wood chuck could chuck wood?',
      answer: 'LIKE SO MANY DUDE!',
      open: false
    },
    {
      question: 'Is Brandon the best programmer in the world?',
      answer: 'I don\'t know, probably...',
      open: false
    },
    {
      question: 'Could I beat Kai in a Smash Bros match blind folded?',
      answer: 'YOU BETCHA!',
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }))
  }

  return (
    <div>
      <div className = 'faqs'>
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default FaqContainer;