import React, { useEffect, useState, useRef } from 'react';
import { Medal, Star, Flame, Crown, Trophy, Target } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Šampion Srbije 2021",
      year: "2021",
      description: "Kategorija do 71kg - pobeda prekidom u prvoj rundi",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Najbolji bokser Prvenstva Srbije",
      year: "2023", 
      description: "Jednoglasna pobeda 5:0 u kategoriji do 66kg",
      color: "from-red-500 to-red-700"
    },
    {
      icon: <Medal className="w-8 h-8" />,
      title: "Srebrna medalja - Prvenstvo Srbije",
      year: "2020",
      description: "Velter kategorija, Smederevo",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Najbolji strani bokser - Beranska rukavica",
      year: "2019",
      description: "Nokaut u prvoj rundi, kategorija do 69kg",
      color: "from-orange-500 to-red-600"
    }
  ];

  const regionalLeague = [
    {
      opponent: "Dušan Prica (Loznica)",
      result: "JEDNOGLASNA POBEDA 5:0",
      date: "2022/23 - Četvrto kolo",
      location: "Beograd"
    },
    {
      opponent: "Ivan Radanović (BK Željezničar)", 
      result: "JEDNOGLASNA POBEDA 5:0",
      date: "2022/23 - Peto kolo",
      location: "Maribor"
    },
    {
      opponent: "Andij Idrizij (BK Vitezovi)",
      result: "JEDNOGLASNA POBEDA 5:0",
      date: "2022 - Šesto kolo",
      location: "Zagreb"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            MOJA <span className="text-red-500">DOSTIGNUĆA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Od amaterskih početaka do profesionalnog ringa - svaka titula je rezultat godina posvećenosti
          </p>
        </div>

        {/* Achievement Cards */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {achievement.icon}
                </div>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{achievement.title}</h3>
              <div className="text-yellow-400 font-bold text-sm mb-2">{achievement.year}</div>
              <p className="text-gray-400 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        {/* Regional League Highlights */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-center text-white mb-4">
            REGIONALNA <span className="text-red-500">LIGA</span>
          </h3>
          <p className="text-center text-gray-400 mb-12">
            BK Novi Pazar - Lider sa 160 bodova nakon pet kola (sezona 2022/23)
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {regionalLeague.map((fight, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-red-900/20 to-black border border-red-500/30 rounded-xl p-6 hover:border-red-400 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg mb-2">VS {fight.opponent}</h4>
                  <div className="text-yellow-400 font-bold text-sm mb-3">{fight.result}</div>
                  <div className="space-y-1 text-gray-400 text-sm">
                    <div>{fight.date}</div>
                    <div>{fight.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Career */}
        <div className={`bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 border border-gray-700 transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">PROFESIONALNA KARIJERA</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Profesionalni debi</h4>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-white font-bold">Datum:</span> 2. januar 2022.</p>
                <p><span className="text-white font-bold">Lokacija:</span> Zlatibor</p>
                <p><span className="text-white font-bold">Protivnik:</span> Bojan Veljković (Pirot)</p>
                <p><span className="text-white font-bold">Rezultat:</span> Pobeda - "Spektakl na Zlatiboru"</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-900/20 to-transparent rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="text-white font-bold mb-3">Svetsko prvenstvo - Beograd 2021</h4>
              <p className="text-gray-300 text-sm">
                Prošao u drugo kolo bez borbe zbog nepojavljivanja protivnika iz Tanzanije. 
                U sledećem kolu se suočio sa ruskim bokserom Vadimom Musajevim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;