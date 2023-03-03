import React, { useState } from 'react';
import "../Css/faq.css"

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };
  const toggleFAQ2 = () => {
    setIsOpen2(!isOpen2);
  }; const toggleFAQ3 = () => {
    setIsOpen3(!isOpen3);
  };
    

  return (
    <div className="faq bg-secondary text-md-center  p-3 ">
      <h2 className='h5 text-white  mx-5'>Frequently Asked Questions</h2>
      <div className="  mx-5 ">
        <h3 onClick={toggleFAQ} className='h6 mt-4  faq-item '>How do I place an order?</h3>
        {isOpen && (
          <p className='answer'>
            To place an order, visit our website and select the laundry service you need. Choose your pickup and delivery dates and times, and complete the checkout process. We'll take care of the rest!
          </p>
        )}
      </div>
      <div className="faq-item text-secondary mx-5">
        <h3 onClick={toggleFAQ2} className=' h6 mt-3  faq-item '>What types of laundry do you clean?</h3>
        {isOpen2 && (
          <p className='answer'>
            We clean all types of laundry, including clothing, bedding, towels, and more. We also offer specialized services for delicate fabrics and dry cleaning.
          </p>
        )}
      </div>
      <div className="faq-item text-secondary mx-5">
        <h3 onClick={toggleFAQ3} className='h6 mt-3  faq-item '>What if I need to change my pickup or delivery time?</h3>
        {isOpen3 && (
          <p className='answer' >
            If you need to change your pickup or delivery time, please contact us as soon as possible so we can accommodate your request. We'll do our best to work with your schedule.
          </p>
        )}
      </div>
    </div>
  );
};

export default FAQ;