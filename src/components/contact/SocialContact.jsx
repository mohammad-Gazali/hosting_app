import React from 'react'
import { BsTwitter, BsYoutube, BsFacebook, BsWhatsapp, BsInstagram } from 'react-icons/bs';


const SocialContact = () => {
  return (
    <section>
      <h3 className='text-3xl font-bold text-secondary mb-2'>
        Social Media
      </h3>
      <p className='leading-8'>
        You can also find us on social media. Follow us on social platforms below for updates and special offers.
      </p>
      <div className='flex flex-wrap gap-5 mt-3'>
        <SocialButton icon={<BsTwitter />} name="Twitter" />
        <SocialButton icon={<BsYoutube />} name="Youtube" />
        <SocialButton icon={<BsFacebook />} name="Facebook" />
        <SocialButton icon={<BsWhatsapp />} name="Whatsapp" />
        <SocialButton icon={<BsInstagram />} name="Instagram" />
      </div>
    </section>
  )
}

const SocialButton = ({ icon, name }) => {
  return (
  <button className="btn btn-primary gap-2">
    <span className='text-xl'>
      {icon}
    </span>
    {name}
  </button>
  )
}

export default SocialContact