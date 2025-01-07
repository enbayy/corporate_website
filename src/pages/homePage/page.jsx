import React from 'react';
import AboutPage from '../aboutPage/page';
import { scroller } from 'react-scroll';
import { FaArrowCircleUp } from "react-icons/fa";
import homePageImage from '../../assets/homePage.jpg'

const HomePage = () => {
  const homePage = () => {
    scroller.scrollTo('home', {
      smooth: true,
      duration: 500,
      offset: -50
    });
  };
  return (
    <div>
      <section id='home' className='min-h-screen bg-blue-200 relative'>
        <img src={homePageImage} alt="homePage" className="w-full h-screen object-cover" />

        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center shadow-lg">
          İşinizi Geleceğe Taşıyoruz
        </h1>

        <h4 className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center shadow-lg">
          Bizimle kalmaya devam edin
        </h4>
      </section>


      <section id='about' className='min-h-screen bg-green-200'>
        <AboutPage />
      </section>

      <section id='services' className='min-h-screen bg-yellow-200'>
        <h1>Hizmetler</h1>

      </section>

      <section id='contact' className='min-h-screen bg-red-200'>
        <h1>İletişim</h1>

      </section>
      <button
        onClick={homePage}>
        <FaArrowCircleUp className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent rounded-full text-4xl" />
      </button>
    </div>
  );
};

export default HomePage;