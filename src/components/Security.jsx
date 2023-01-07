import React from 'react'
import securityImage from '../assets/security.png'

const Security = () => {
  return (
    <section className='px-5 Security flex flex-wrap items-center'>
        <img className='md:max-w-lg max-w-md' src={securityImage} alt="security" />
        <div className='flex flex-col flex-1 gap-3 items-start text-lg'>
            <h2 className='text-4xl font-bold text-primary'>
                Secure Hosting
            </h2>
            <p className='pr-5'>
                At <strong className='text-accent'>Gazali Hosting</strong>, we take security seriously. That's why we offer secure hosting as a standard feature on all of our hosting plans. Our secure hosting includes a number of measures to protect your website and your data from cyber threats and data breaches.
            </p>
            <label htmlFor="my-modal-4" className='btn btn-primary'>
                See Details
            </label>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative">
                    <h3 className="text-lg font-bold">Our secure hosting includes:</h3>
                    <ul className="p-4 list-disc gap-3 flex flex-col">
                        <li>
                            <strong className='text-secondary'>SSL</strong> (Secure Sockets Layer) certificates: These encrypt data transmitted between your website and visitors' browsers to protect against man-in-the-middle attacks.
                        </li>
                        <li>
                            <strong className='text-secondary'>Firewalls</strong>: We use advanced firewalls to block unauthorized access and protect against cyber threats.
                        </li>
                        <li>
                            <strong className='text-secondary'>DDoS</strong> (Distributed Denial of Service) protection: Our DDoS protection measures protect against attacks that aim to take down your website by overwhelming it with traffic.
                        </li>
                    </ul>
                </label>
            </label>
        </div>
    </section>
  )
}

export default Security