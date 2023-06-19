// import React from 'react'
import React from 'react'
import './FAQ.css'
import { useState} from 'react';
import faqimage from '../../assets/faq.svg';
export default function FAQ() {
  
   let [activeItem, setActiveItem] = useState(null);

   let accordionItems = [
    {
            title: "How do I request designs?",
            content: "Once you signup, you will get access to Trello Dashboard, where you can add your requests. In Trello, you can share Google docs or even record a brief Loom video (for those who prefer not to write their briefs out). If needed, we can discuss the task on Trello after everything is clear, the task will be going under the development process, and you will be notified once completed. "
           
          },
          {
            title: "How fast will I receive my tasks?",
            content: "On average, most requests are completed in just 3 days or less. However, more complex requests can take longer."
          },
          {
            title: "What if I need a task to be revised?",
            content: "No worries - you can ask for unlimited revisions. Since they are usually quick-fixes, - expect them to be done in 24 hours!"
          },
          {
            title: "Is there a limit to how many requests I can have?",
            content: "Once subscribed, you can add as many custom code task requests to your queue as possible, and they will be delivered individually."
          },
          {
            title: "What if I don't like the service?",
            content: "No worries - if you don’t like the service or would not like to continue, you can cancel anytime, no questions asked."
          }
   ];
 

   let handleClick = (index) => {
     setActiveItem(index === activeItem ? null : index);
   };



return (
    <main className='FAQ-main'>
      <div className='FAQ-heading' >
        <h2 data-aos="fade-up" data-aos-duration="1000">Frequently Asked Questions</h2>
      </div>

<div className='FAQ-Predictable-Pricing'>
      {accordionItems.map((item, index) => (
        <div key={index} className='external' >
          <div className='acordian-part' onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
            <div className='title-heading'>{item.title}</div>
           <img src={faqimage} alt=""  />
          </div>
          {activeItem === index && <p>{item.content}</p>}
        </div>
      ))}
    </div>
    </main>
  )
}
