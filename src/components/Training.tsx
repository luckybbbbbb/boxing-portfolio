import React, { useEffect, useState, useRef } from 'react';
import { Dumbbell, Users, Clock, Star, CheckCircle, Trophy } from 'lucide-react';

const Training = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Lični Treninzi",
      description: "Individualni pristup prilagođen vašim ciljevima",
      price: "50€",
      duration: "60 min",
      features: ["Personalizovani program", "Tehnička analiza", "Nutricionno savetovanje", "24/7 podrška"],
      color: "from-red-600 to-red-700",
      popular: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Grupni Treninzi", 
      description: "Treniraj sa drugima i motiviši se međusobno",
      price: "25€",
      duration: "90 min",
      features: ["Maksimalno 8 osoba", "Osnovne i napredne tehnike", "Kardio boksing", "Zabavan pristup"],
      color: "from-yellow-500 to-yellow-600",
      popular: false
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Pro Priprema",
      description: "Intenzivne pripreme za takmičenja",
      price: "100€",
      duration: "120 min", 
      features: ["Profesionalna priprema", "Sparring partneri", "Video analiza", "Mentalna priprema"],
      color: "from-purple-600 to-purple-700",
      popular: false
    }
  ];

  const benefits = [
    "Poboljšanje fizičke kondicije",
    "Razvoj samopouzdanja", 
    "Učenje samoodbrane",
    "Stress relief i mentalna čvrstoća",
    "Disciplina i fokus",
    "Društveno okruženje"
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-gray-900 to-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            TRENINZI I <span className="text-yellow-400">USLUGE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Pridruži se treningu i otkrij najbolju verziju sebe. Svaki trening je korak bliže tvom cilju.
          </p>
          
          {/* Current Training Info */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg p-6 border border-blue-500/30 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Trophy className="w-6 h-6 text-yellow-400 mr-2" />
              <h3 className="text-white font-bold text-lg">TRENIRAM U BK OLIMPIKUS</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Pod vođством <span className="text-yellow-400 font-bold">Dževada Ibrovića</span> - 
              osvajača Zlatne Rukavice u Jugoslaviji
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                service.popular 
                  ? 'border-yellow-400 shadow-yellow-400/20' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1 rounded-full font-bold text-sm">
                    NAJPOPULARNIJI
                  </div>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>

              <h3 className="text-white font-bold text-2xl mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-black text-white">
                  {service.price}
                  <span className="text-gray-400 text-sm font-normal">/sesija</span>
                </div>
                <div className="flex items-center text-yellow-400">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{service.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 transform group-hover:scale-105 ${
                service.popular
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:from-yellow-500 hover:to-yellow-600'
                  : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
              }`}>
                REZERVIŠI TRENING
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className={`grid md:grid-cols-2 gap-12 items-center transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              ZAŠTO <span className="text-red-500">BOKS?</span>
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gradient-to-r from-red-900/20 to-transparent rounded-lg border-l-4 border-red-500">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-black rounded-2xl p-8 border border-red-500/30">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">POČETNI PAKET</h4>
            <div className="text-center mb-6">
              <div className="text-4xl font-black text-yellow-400 mb-2">3 TRENINGA</div>
              <div className="text-2xl font-bold text-white line-through opacity-50">150€</div>
              <div className="text-3xl font-black text-red-400">99€</div>
              <div className="text-gray-400 text-sm">Ušteda od 51€</div>
            </div>
            
            <ul className="space-y-2 mb-8 text-gray-300">
              <li>✓ Personalizovani pristup</li>
              <li>✓ Kompletna oprema uključena</li>
              <li>✓ Nutricionji plan</li>
              <li>✓ Besplatna konsultacija</li>
            </ul>

            <button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105">
              UZMI PAKET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;