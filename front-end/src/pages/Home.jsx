import React from 'react';
import {Footer, Header, SecondaryFooter} from '../components/index';
import { Hero, AboutUs, Services, PopularServices, WhyUs, Testimonials, Partners, ContactUs } from "../sections/index";
import WorkWithUs from '../sections/WorkWithUs';
import { ServiceProvider } from '../hooks/service-hook';
// import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <main className='relative flex-1 pt-32'>
        <section>
          <Hero className='h-screen'/>
        </section>
        <section id="about-us">
          <AboutUs />
        </section>
        <ServiceProvider>
          <section id='services'>
            <Services />
          </section>
        </ServiceProvider>
        <section>
          <PopularServices />
        </section>
        <section>
          <WhyUs />
        </section>
        <section>
          <Testimonials />
        </section>
        <section id='work-with-us'>
          <WorkWithUs/>
        </section>
        <section id='our-partners'>
          <Partners />
        </section>
        <section id='contact-us'>
          <ContactUs />
        </section>
      </main>
      <Footer/>
      <SecondaryFooter/>
    </div>
  )
}

export default Home;