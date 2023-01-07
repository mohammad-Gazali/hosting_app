import { Hero, Services, Security, Numbers, Supporters, Testimonials } from "../components";


const Home = () => {
  return (
    <main>
        <Hero />
        <Services />
        <Security />
        <Numbers />
        <Supporters />
        <Testimonials />
        <hr className='border-secondary border-[1px] bg-secondary rounded-lg my-20 mx-4' />
    </main>
  )
}

export default Home