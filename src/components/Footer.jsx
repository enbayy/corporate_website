import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Button } from 'antd';

const Footer = () => {
  return (
    <div className="bg-[#100f36] text-white py-12">
      <div className="container mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">HYD POINT</h4>
            <p className="text-sm">
              İşinizi geleceğe taşıyan güçlü çözümlerle yanınızdayız. Yenilikçi teknolojiler ve müşteri odaklı hizmet anlayışımızla size değer katıyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Hızlı Bağlantılar</h4>
            <ul>
              <li>
                <Button type="link" href="#home" className="text-white hover:text-blue-400">
                  Anasayfa
                </Button>
              </li>
              <li>
                <Button type="link" href="#about" className="text-white hover:text-blue-400">
                  Hakkımızda
                </Button>
              </li>
              <li>
                <Button type="link" href="#services" className="text-white hover:text-blue-400">
                  Hizmetler
                </Button>
              </li>
              <li>
                <Button type="link" href="#contact" className="text-white hover:text-blue-400">
                  İletişim
                </Button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">İletişim</h4>
            <p className="text-sm mb-2">Adres: Konya, Türkiye</p>
            <p className="text-sm mb-2">Telefon: (0212) 123 45 67</p>
            <p className="text-sm mb-2">E-posta: info@firma.com</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Sosyal Medya</h4>
            <div className="flex gap-x-6">
              <a href="#" className="text-white hover:text-blue-500 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-white hover:text-blue-500 text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-white hover:text-blue-500 text-2xl">
                <FaLinkedin />
              </a>
              <a href="#" className="text-white hover:text-blue-500 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-10 border-t border-gray-700 pt-6">
          <p className="text-sm">&copy; 2025 HYD POINT. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;