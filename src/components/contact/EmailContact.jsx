import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';

const EmailContact = () => {
  return (
    <section>
      <h3 className='text-3xl font-bold text-secondary mb-2'>
        Email
      </h3>
      <p className='leading-8'>
        For general inquiries or support requests, you can email us at this form for our support email: <span className='font-mono text-primary'>support@gazali.com</span><br />Our team will do our best to respond to your message as soon as possible.
      </p>
      <form action="#" method="POST" className='flex flex-col gap-4 my-5 rounded-box p-6 bg-primary/10'>
        <div>
          <label className='font-medium text-primary-focus' htmlFor="name">Name:</label>
          <input id="name" type="text" className="input input-bordered input-primary w-full" />
        </div>
        <div>
          <label className='font-medium text-primary-focus' htmlFor="email">Email:</label>
          <input id="email" type="email" className="input input-bordered input-primary w-full" />
        </div>
        <div>
          <label className='font-medium text-primary-focus' htmlFor="subject">Subject:</label>
          <input id="subject" type="subject" className="input input-bordered input-primary w-full" />
        </div>
        <div className='flex flex-col'>
          <label className='font-medium text-primary-focus' htmlFor="message">Message:</label>
          <textarea id="message" className="textarea textarea-primary"></textarea>
        </div>
        <button className='btn btn-secondary mt-3 gap-2 w-fit text-lg' type="submit">
          Send <RiSendPlaneFill className='text-2xl' />
        </button>
      </form>
    </section>
  )
}

export default EmailContact