import React from 'react';

const FAQ = ({faq, index, toggleFAQ}) => {
    return (
        <div
            className={'faq ' + (faq.open ? 'open' : '')}
            key={index}>  
            <div className='faq-question'>
                {faq.question}
                <div className='faq-button'
                    onClick={() => toggleFAQ(index)}>
                    <div className='faq-button1'></div>
                    <div className='faq-button2'></div>
                </div> 
            </div>
            <div className='faq-answer'>
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQ;