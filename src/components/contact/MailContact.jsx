import React from 'react'

const MailContact = () => {
  return (
    <section>
      <h3 className='text-3xl font-bold text-secondary mb-2'>
        Mail
      </h3>
      <div className='leading-8'>
        If you prefer to send us a letter, our mailing address is:<br />
        <ul className='font-mono text-primary list-disc px-4 leading-6 mt-2'>
          <li>
            Gazali Hosting Company
          </li>
          <li>
            1234 Main Street
          </li>
          <li>
            Egypt 123456
          </li>
        </ul>
      </div>
    </section>
  )
}

export default MailContact