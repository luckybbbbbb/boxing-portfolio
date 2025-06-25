import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with boxing theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4761386/pexels-photo-4761386.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-yellow-400 to-red-500 bg-clip-text text-transparent">
              DŽEJLAN
            </span>
            <br />
            <span className="text-white">TOSKIĆ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-yellow-400 font-bold mb-4 tracking-wide">
            ŠAMPION SRBIJE U BOKSU
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            Novi Pazar • Velter kategorija • BK Olimpikus
          </p>

          <div className="bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg p-4 mb-8 border border-yellow-400/30">
            <p className="text-white font-bold text-lg">
              🇦🇹 PRIPREMA ZA SVETSKO PRVENSTVO U AUSTRIJI
            </p>
            <p className="text-gray-300 text-sm">
              Reprezentacija Srbije • BK Olimpikus • Trener: Dževad Ibrović
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              SAZNAJ VIŠE
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              KONTAKT
            </button>
          </div>
        </div>
        
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button 
            onClick={scrollToAbout}
            className="animate-bounce text-white hover:text-yellow-400 transition-colors duration-300"
          >
            <ChevronDown size={48} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;