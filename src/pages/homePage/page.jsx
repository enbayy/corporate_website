import React from 'react';
import office from '../../assets/office.jpg';
import company from '../../assets/company.jpg';

const HomePage = () => {
  return (
    <div className='bg-[#100f36]'>
      <section className="relative py-20 w-full">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img
          src={office}
          alt="Hero Image"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 transform transition duration-500 hover:scale-105">
            İşinizi Büyütmek İçin Etkili Pazarlama Çözümleri
          </h1>
          <p className="text-lg text-white mb-8 opacity-90 hover:opacity-100 transition duration-300">
            Hedef kitlenize ulaşmanın en güçlü yollarını sunarak, markanızı bir adım öne çıkarıyoruz.
          </p>
          <a
            href="#services"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
          >
            Hizmetlerimizi Keşfedin
          </a>
        </div>
      </section>

      <section className="p-20 bg-[#100f36]">
        <div className="container mx-auto flex items-center justify-between space-x-12">
          <div className="w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-6 text-orange-600 hover:text-orange-700 transition duration-300">Hakkımızda</h2>
            <p className="text-lg text-white mb-8">
              Yaratıcı ekip ve stratejik yaklaşımımızla, markanızın dijital dünyadaki görünürlüğünü arttırıyoruz.
              Pazarlama çözümlerimizle, işinizi büyütmek için gerekli adımları atıyoruz.
            </p>
            <a
              href="/aboutPage"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
            >
             Devamını Oku
            </a>
          </div>

          <div className="w-1/3">
            <img
              src={company}
              alt="About Us"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#100f36] py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10 text-white">Markalarımız</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            <div className="bg-transparent p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={office}
                alt="Brand 1"
                className="w-full h-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">Marka 1</h3>
            </div>

            <div className="bg-transparent p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={office}
                alt="Brand 2"
                className="w-full h-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">Marka 2</h3>
            </div>

            <div className="bg-transparent p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={office}
                alt="Brand 3"
                className="w-full h-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">Marka 3</h3>
            </div>

            <div className="bg-transparent p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
              <img
                src={office}
                alt="Brand 4"
                className="w-full h-auto object-contain mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-white">Marka 4</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-600 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Hazır Mısınız?</h2>
        <p className="text-lg mb-8">
          Sizin için en etkili pazarlama stratejisini belirleyerek, markanızı büyütmek için çalışalım.
        </p>
        <a
          href="#contact"
          className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
        >
          Bizimle İletişime Geçin
        </a>
        <div className="mt-6">
          <i className="fas fa-phone-alt text-3xl text-white animate-bounce"></i> {/* Phone icon with animation */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;