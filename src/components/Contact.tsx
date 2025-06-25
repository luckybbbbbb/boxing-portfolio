import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('Poruka je uspešno poslata! Javit ću vam se uskoro.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      value: "+381 66 123 456",
      color: "text-green-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email", 
      value: "dzejlan.toskic@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Lokacija",
      value: "Novi Pazar, Srbija",
      color: "text-red-400"
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-400",
      followers: "15K"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook", 
      url: "#",
      color: "hover:text-blue-400",
      followers: "8K"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      url: "#",
      color: "hover:text-red-400",
      followers: "3K"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-black to-gray-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            STUPITE U <span className="text-red-500">KONTAKT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zainteresovani ste za trening ili saradnju? Kontaktirajte me i počnimo zajednički put prema vašim ciljevima.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Kontakt informacije</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm">{info.title}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Pratite me</h3>
              <div className="grid grid-cols-1 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`flex items-center justify-between p-4 bg-gray-700/50 rounded-lg border border-gray-600 hover:border-gray-500 ${social.color} transition-all duration-300 transform hover:scale-105 group`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-white font-medium">{social.name}</div>
                        <div className="text-gray-400 text-sm">{social.followers} followers</div>
                      </div>
                    </div>
                    <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                      →
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Club Info */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-r from-red-900/20 to-yellow-900/20 rounded-2xl p-8 border border-red-500/30 h-full">
              <h3 className="text-2xl font-bold text-white mb-4">BK Novi Pazar</h3>
              <p className="text-gray-300 mb-6">
                Deo sam zlatne generacije BK Novi Pazar. Ako ste zainteresovani za trening 
                ili želite da se pridružite našem klubu, kontaktirajte me.
              </p>
              <div className="flex flex-col gap-4">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  POZOVI SADA
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold transition-colors duration-300 flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  POŠALJI EMAIL
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-gray-800 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <p className="text-gray-400">
            © 2024 Džejlan Toskić. Sva prava zadržana. | BK Novi Pazar • Šampion Srbije
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;