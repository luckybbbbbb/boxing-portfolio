import React, { useEffect, useState, useRef } from 'react';
import { Award, Target, Trophy, Users } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ wins: 0, titles: 0, years: 0, tournaments: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const finalStats = { wins: 15, titles: 3, years: 8, tournaments: 12 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          Object.keys(finalStats).forEach((key) => {
            let start = 0;
            const end = finalStats[key as keyof typeof finalStats];
            const duration = 2000;
            const increment = end / (duration / 16);
            
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setStats(prev => ({ ...prev, [key]: Math.floor(start) }));
            }, 16);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    { year: '2019', title: 'Beranska rukavica - Najbolji strani bokser', description: 'Nokaut u prvoj rundi, kategorija do 69kg' },
    { year: '2020', title: 'Srebrna medalja - Prvenstvo Srbije', description: 'Velter kategorija, Smederevo' },
    { year: '2021', title: 'Šampion Srbije', description: 'Kategorija do 71kg, pobeda prekidom u prvoj rundi' },
    { year: '2023', title: 'Najbolji bokser Prvenstva Srbije', description: 'Jednoglasna pobeda 5:0, kategorija do 66kg' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            O <span className="text-yellow-400">MENI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Rođen u Novom Pazaru 2001. godine, moj put kroz boks je priča o posvećenosti, 
            disciplini i neprestanoj borbi za savršenstvo u ringu.
          </p>
        </div>

        {/* Current Status Banner */}
        <div className={`mb-16 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-2xl p-8 border border-yellow-400/50 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">🥊 TRENUTNI STATUS</h3>
            <p className="text-lg text-white mb-4">
              <span className="font-bold">BK OLIMPIKUS</span> - Priprema za Svetsko prvenstvo u Austriji
            </p>
            <p className="text-gray-300 max-w-4xl mx-auto">
              Trenutno treniram pod vođstvom <span className="text-yellow-400 font-bold">Dževada Ibrovića</span>, 
              osvajača Zlatne Rukavice u Jugoslaviji i mog prvog trenera koji me je uveo u svet boksa. 
              U najboljoj sam formi svog života i intenzivno se pripremam sa reprezentacijom Srbije.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="text-center p-6 bg-gradient-to-br from-red-600/20 to-red-800/20 rounded-lg border border-red-500/30">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl font-black text-white mb-2">{stats.wins}+</div>
            <div className="text-gray-300 font-medium">POBEDA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 rounded-lg border border-yellow-500/30">
            <Award className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <div className="text-4xl font-black text-white mb-2">{stats.titles}</div>
            <div className="text-gray-300 font-medium">TITULA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-lg border border-blue-500/30">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <div className="text-4xl font-black text-white mb-2">{stats.years}</div>
            <div className="text-gray-300 font-medium">GODINA</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-600/20 to-green-800/20 rounded-lg border border-green-500/30">
            <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <div className="text-4xl font-black text-white mb-2">{stats.tournaments}</div>
            <div className="text-gray-300 font-medium">TURNIRA</div>
          </div>
        </div>

        {/* Biography and Timeline */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">MOJA PRIČA</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Počeo sam svoju boksersku karijeru u BK Mladost pod vođstvom trenera Saliha Đerleka 
                i Idriza Hajrovića. Dževad Ibrović je bio moj prvi trener koji me je uveo u svet boksa.
              </p>
              <p>
                Kroz karijeru sam nastupao za BK Mladost, BK Dandi iz Novog Pazara i Crvenu zvezdu 
                u Regionalnoj ligi. Sada sam se vratio pod mentorstvo Dževada Ibrovića u BK Olimpikus.
              </p>
              <p>
                Moj najveći uspeh je osvajanje titule šampiona Srbije 2021. godine u kategoriji do 71kg, 
                čime sam postao drugi Novopazarac sa ovom titulom posle Dževada Ibrovića iz 2005. godine.
              </p>
              <p>
                Učestvovao sam na Svetskom prvenstvu u Beogradu 2021. godine, a 2022. sam debitovao 
                u profesionalnom boksu. Sada se intenzivno pripremam za Svetsko prvenstvo u Austriji.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-red-600/20 to-yellow-600/20 rounded-lg border-l-4 border-yellow-400">
              <p className="text-lg text-white italic">
                "Želim da donesem zlato svom gradu i da se dokažem u najjačoj konkurenciji. 
                Rad sa iskusnim Ibrovićem mi omogućava da svoje veštine podignem na najviši nivo."
              </p>
              <p className="text-yellow-400 font-bold mt-2">- Džejlan Toskić</p>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">KLJUČNI MOMENTI</h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{achievement.year}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-white font-bold text-lg mb-2">{achievement.title}</h4>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mentor Section */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-500/30">
              <h4 className="text-white font-bold text-lg mb-3">🏆 MENTOR I TRENER</h4>
              <div className="space-y-2 text-gray-300">
                <p><span className="text-blue-400 font-bold">Dževad Ibrović</span></p>
                <p className="text-sm">• Osvajač Zlatne Rukavice u Jugoslaviji</p>
                <p className="text-sm">• Šampion Srbije 2005. godine</p>
                <p className="text-sm">• Moj prvi trener i mentor</p>
                <p className="text-sm">• Trenutni trener u BK Olimpikus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Club Info */}
        <div className={`mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 transform transition-all duration-1000 delay-900 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-4 text-center">BK NOVI PAZAR - ZLATNA GENERACIJA</h3>
          <p className="text-gray-300 text-center max-w-4xl mx-auto">
            Deo sam zlatne generacije BK Novi Pazar koja je pod vođstvom Selvera Lekpeka doživela meteorski uspon. 
            Naš klub je postao šampion Regionalne lige, najbolji klub Razvojne lige i lider na Šampionatu Srbije. 
            Zajedno sa Ahmedom Mavrićem, Hamzom Rašljaninom, Imranom Mašovićem i Saidom Bukvić, 
            vratili smo boks u centar pažnje u Novom Pazaru i inspirisali decu da se bave ovim sportom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;