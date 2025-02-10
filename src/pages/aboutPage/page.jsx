import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <div className="w-full bg-[#100f36] flex justify-center items-center">
        <h1 className="text-4xl font-semibold text-center text-orange-600">Hakkımızda</h1>
      </div>
      <div className="bg-[#100f36] container flex flex-col justify-center items-start mx-auto px-40 py-8">
        <p className="text-lg text-white mb-4">
          Biz, dijital pazarlama ve stratejik danışmanlık alanında faaliyet gösteren bir şirketiz. Yaratıcı ve etkili çözümler sunarak markaların dijital dünyada daha güçlü bir varlık göstermelerini sağlıyoruz. Ekibimiz, her türlü dijital pazarlama ihtiyacına yönelik yenilikçi stratejiler geliştirir ve sonuç odaklı çalışır.
        </p>

        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Vizyonumuz</h2>
        <p className="text-lg text-white mb-6">
          Vizyonumuz, müşterilerimize en yüksek değeri sunarak, sektörde lider konumda olan dijital pazarlama çözümleri sağlamaktır. Gelişen teknolojilere ayak uyduruyor, markaların dijital dünyada sürdürülebilir başarı yakalamalarını sağlıyoruz.
        </p>

        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Misyonumuz</h2>
        <p className="text-lg text-white mb-6">
          Misyonumuz, markaların çevrimiçi dünyada hedef kitleleriyle güçlü bağlar kurmasını sağlamak ve onları etkili dijital pazarlama stratejileriyle buluşturmaktır. İşimize duyduğumuz tutku ile her zaman yenilikçi ve verimli çözümler üretiyoruz.
        </p>

        <h2 className="text-2xl font-semibold text-orange-600 mb-4">Değerlerimiz</h2>
        <ul className="list-disc pl-6 text-lg text-white">
          <li>Yenilikçilik: Her zaman yenilikçi ve yaratıcı çözümler ararız.</li>
          <li>Şeffaflık: Müşterilerimizle açık ve dürüst iletişim kurarız.</li>
          <li>Sonuç Odaklılık: Çalışmalarımızın her aşamasında sonuçları göz önünde bulundururuz.</li>
          <li>Takım Çalışması: Başarıyı, ekip olarak bir arada çalışarak elde ederiz.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-orange-600 mt-6 mb-4">Ekibimiz</h2>
        <p className="text-lg text-white mb-4">
          Ekibimiz, pazarlama, tasarım ve teknoloji alanlarında uzmanlaşmış profesyonellerden oluşur. Her bir üyemiz, müşterilerimizin ihtiyaçlarına özel stratejiler oluşturmak ve projeleri başarıyla sonuçlandırmak için bir arada çalışmaktadır.
        </p>
      </div>
    </div>

  );
};

export default AboutPage;
