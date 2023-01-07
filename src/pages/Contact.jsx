import React from 'react'
import { EmailContact, MailContact, PhoneContact, SocialContact } from '../components/contact'

const Contact = () => {
  return (
    <main className='mb-20 mt-10 px-4'>
        <h2 className='text-4xl font-bold text-accent text-center'>Contact Us</h2>
        <div className='md:px-10 sm:px-4 mt-5'>
            <p className='text-xl text-primary font-medium'>
                Thank you for considering Gazali Hosting for your hosting needs. If you have any questions or would like more information about our services, please don't hesitate to contact us.
            </p>
            <div className='my-16 flex flex-col gap-10 text-lg border-2 border-secondary rounded-box p-5'>
                <PhoneContact />
                <hr className='border-secondary border-[1px] bg-secondary rounded-lg' />
                <EmailContact />
                <hr className='border-secondary border-[1px] bg-secondary rounded-lg' />
                <MailContact />
                <hr className='border-secondary border-[1px] bg-secondary rounded-lg' />
                <SocialContact />
                {/* <hr className='border-secondary border-[1px] bg-secondary rounded-lg' /> */}
            </div>
            <p className='text-primary font-medium text-xl leading-8'>
                We look forward to hearing from you!<br /><br />
                Sincerely,<br />
                <span className='font-bold text-accent text-2xl'>Gazali Hosting</span>
            </p>
            <hr className='border-secondary border-[1px] bg-secondary rounded-lg mt-20' />
        </div>
    </main>
  )
}

export default Contact