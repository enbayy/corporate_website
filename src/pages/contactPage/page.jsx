import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log('Form Submitted', formData); };

  return (
    <div className="bg-[#100f36] text-gray-800 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 sm:px-12 lg:px-24 py-12 sm:py-16 md:py-12">
      <div className="relative flex-1 flex flex-col items-center lg:items-start space-y-8 min-h-full">
        <div className="flex justify-center items-start flex-col space-y-10 relative z-30 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl text-orange-600">Bize Ulaşın</h2>
          <p className="text-lg text-white z-20">Sorularınız için bizimle iletişime geçin.</p>
          <div className="flex space-x-6 justify-center lg:justify-start z-20">
            {[
              { icon: FaFacebook, link: "" },
              { icon: FaTwitter, link: "" },
              { icon: FaInstagram, link: "" },
              { icon: FaLinkedin, link: "" }
            ].map(({ icon: Icon, link }, i) => (
              <a key={i} href={link} target="_blank" className="text-orange-600 hover:text-[#FF9A30] transition-all">
                <Icon size="2em" />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative z-20 space-y-6 w-full max-w-lg bg-[#100f36] p-5 px-0 rounded-lg">
          {['name', 'email', 'message'].map((field, i) => (
            <div key={i} className="relative">
              {field === 'message' ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder="Mesajınız"
                  rows="6"
                  className="w-full p-4 border border-[#ddd] rounded-lg focus:ring-2 focus:ring-orange-600 transition-all"
                />
              ) : (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={field === 'name' ? 'Adınız' : field === 'email' ? 'E-posta' : 'Mesajınız'}
                  className="w-full p-4 border border-[#ddd] rounded-lg focus:ring-2 focus:ring-orange-600 transition-all"
                />
              )}
            </div>
          ))}

          <button type="submit" className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#FF9A30] transition-all w-full">
            Gönder
          </button>
        </form>
      </div>
      <div className="flex-1 flex flex-col items-center lg:items-start min-h-full mt-12 lg:mt-0">
        <h3 className="text-3xl text-orange-600 mb-8 text-center lg:text-left relative z-20">Bizi Haritada Gör</h3>
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.1794606999697!2d32.553111475356154!3d37.90286780477183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d085fc1b13876b%3A0x17bfdbd2297b6fe0!2sMGTORK%20-%20Bur%C3%A7lu%20V%20Kasnak%20-%20Konik%20Bur%C3%A7%20-%20Kaplinler%20-%20Konik%20Kilitler!5e0!3m2!1str!2str!4v1739188358914!5m2!1str!2str"
            width="100%"
            height="100%"
            className="absolute inset-0 border-0 rounded-lg"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;