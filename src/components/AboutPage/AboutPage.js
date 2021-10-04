import React, { useState } from "react";
import './AboutPage.css';

const AboutPage = () => {

  const [expand, setExpand] = useState(false);

    const handleToggle = () => {
        setExpand(!expand);
    };

  return (
    <div>
      <div className='faqPageContainer'>
        <div onClick={handleToggle} className={`faqBar ${expand ? 'expanded' : ''}`}>
          <div className='faqQuestion'>
            <h6>Question #1 here that is frequently asked!</h6>
          </div>
          <div id='faqButton'>
            <div id="faq-expand-1" className='faq-expand'></div>
            <div id="faq-expand-2" className='faq-expand'></div>
          </div>
        </div>
        <div onClick={handleToggle} className={`faqBar ${expand ? 'expanded' : ''}`}>
          <div className='faqQuestion'>
            <h6>Question #2 here that is frequently asked!</h6>
          </div>
          <div id='faqButton'>
            <div id="faq-expand-1" className='faq-expand'></div>
            <div id="faq-expand-2" className='faq-expand'></div>
          </div>
        </div>
        <div onClick={handleToggle} className={`faqBar ${expand ? 'expanded' : ''}`}>
          <div className='faqQuestion'>
            <h6>Question #3 here that is frequently asked!</h6>
          </div>
          <div id='faqButton'>
            <div id="faq-expand-1" className='faq-expand'></div>
            <div id="faq-expand-2" className='faq-expand'></div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default AboutPage;