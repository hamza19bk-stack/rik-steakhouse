import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, Award, Utensils, Calendar, ChefHat, Clock, MapPin, Flame, ArrowRight, Star, Download, Instagram, Facebook, X, Globe } from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className={`bg-stone-50 text-stone-800 font-sans antialiased ${lang === 'ar' ? 'dir-rtl' : 'dir-ltr'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-lg border-stone-200 shadow-md' : 'bg-stone-50/90 backdrop-blur-lg border-stone-200/50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#home" className="flex items-center gap-2">
              <span className="text-xl lg:text-2xl font-bold tracking-tight text-red-900 font-serif">RIK</span>
              <span className="hidden sm:block text-xs font-medium text-stone-500 tracking-wide uppercase">Steakhouse</span>
            </a>
            
            <div className="hidden lg:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium text-stone-600 hover:text-red-900 transition-colors">{t.nav.home}</a>
              <a href="#about" className="text-sm font-medium text-stone-600 hover:text-red-900 transition-colors">{t.nav.story}</a>
              <a href="#menu" className="text-sm font-medium text-stone-600 hover:text-red-900 transition-colors">{t.nav.menu}</a>
              <a href="#gallery" className="text-sm font-medium text-stone-600 hover:text-red-900 transition-colors">{t.nav.gallery}</a>
              <a href="#reviews" className="text-sm font-medium text-stone-600 hover:text-red-900 transition-colors">{t.nav.reviews}</a>
              <a href="#contact" className="text-sm font-medium text-stone-600 hover:text-red-900 transition-colors">{t.nav.visit}</a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="relative group hidden sm:block">
                <button className="flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-red-900 transition-colors px-2 py-1">
                  <Globe size={16} />
                  <span className="uppercase">{lang}</span>
                </button>
                <div className="absolute right-0 top-full mt-2 w-24 bg-white rounded-lg shadow-lg border border-stone-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                  <button onClick={() => setLang('en')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${lang === 'en' ? 'text-red-900 font-medium' : 'text-stone-600'}`}>EN</button>
                  <button onClick={() => setLang('fr')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${lang === 'fr' ? 'text-red-900 font-medium' : 'text-stone-600'}`}>FR</button>
                  <button onClick={() => setLang('ar')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-stone-50 ${lang === 'ar' ? 'text-red-900 font-medium' : 'text-stone-600'}`}>AR</button>
                </div>
              </div>
              <a href="https://wa.me/212619663040" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 text-sm text-stone-600 hover:text-red-900 transition-colors">
                <Phone size={16} />
                <span dir="ltr">+212 619-663040</span>
              </a>
              <a href="https://wa.me/212619663040" target="_blank" rel="noreferrer" className="bg-red-900 hover:bg-red-950 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-red-900/20">
                {t.nav.reserve}
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-stone-600">
                {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-stone-50 border-t border-stone-200">
            <div className="px-4 py-4 space-y-3">
              <a href="#home" onClick={closeMobileMenu} className="block text-sm font-medium text-stone-600 hover:text-red-900 py-2">{t.nav.home}</a>
              <a href="#about" onClick={closeMobileMenu} className="block text-sm font-medium text-stone-600 hover:text-red-900 py-2">{t.nav.story}</a>
              <a href="#menu" onClick={closeMobileMenu} className="block text-sm font-medium text-stone-600 hover:text-red-900 py-2">{t.nav.menu}</a>
              <a href="#gallery" onClick={closeMobileMenu} className="block text-sm font-medium text-stone-600 hover:text-red-900 py-2">{t.nav.gallery}</a>
              <a href="#reviews" onClick={closeMobileMenu} className="block text-sm font-medium text-stone-600 hover:text-red-900 py-2">{t.nav.reviews}</a>
              <a href="#contact" onClick={closeMobileMenu} className="block text-sm font-medium text-stone-600 hover:text-red-900 py-2">{t.nav.visit}</a>
              <div className="flex gap-2 pt-2 border-t border-stone-200">
                <button onClick={() => { setLang('en'); closeMobileMenu(); }} className={`px-3 py-1 text-sm rounded-md ${lang === 'en' ? 'bg-red-50 text-red-900' : 'text-stone-600'}`}>EN</button>
                <button onClick={() => { setLang('fr'); closeMobileMenu(); }} className={`px-3 py-1 text-sm rounded-md ${lang === 'fr' ? 'bg-red-50 text-red-900' : 'text-stone-600'}`}>FR</button>
                <button onClick={() => { setLang('ar'); closeMobileMenu(); }} className={`px-3 py-1 text-sm rounded-md ${lang === 'ar' ? 'bg-red-50 text-red-900' : 'text-stone-600'}`}>AR</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Mobile Background Image */}
          <div className="absolute inset-0 lg:hidden">
            <img src="https://i.ibb.co/rR5bgGbY/Image-9-meat-burger-1024x538.png" alt="Background" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-stone-900/75"></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-red-50/30 to-stone-100 hidden lg:block"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-red-100/30 rounded-full blur-3xl hidden lg:block"></div>
          <div className="absolute bottom-20 left-10 w-[30rem] h-[30rem] bg-stone-200/30 rounded-full blur-3xl hidden lg:block"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 lg:bg-white border border-white/20 lg:border-stone-200 text-white lg:text-red-900 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-8 shadow-sm backdrop-blur-md lg:backdrop-blur-none">
                <Award size={14} />
                <span>{t.hero.badge}</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-white lg:text-stone-900 mb-8 leading-[1.1] font-serif">
                {t.hero.welcome}<br />
                <span className="text-red-400 lg:text-red-900">RIK Steakhouse</span>
              </h1>
              
              <p className="text-lg text-stone-200 lg:text-stone-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                {t.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a href="#menu" className="inline-flex items-center justify-center gap-2 bg-red-600 lg:bg-red-900 hover:bg-red-700 lg:hover:bg-red-950 text-white text-sm font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-red-900/20">
                  <Utensils size={18} />
                  {t.hero.viewMenu}
                </a>
                <a href="https://wa.me/212619663040" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/10 lg:bg-white hover:bg-white/20 lg:hover:bg-stone-50 text-white lg:text-stone-800 text-sm font-medium px-8 py-4 rounded-full border border-white/20 lg:border-stone-200 transition-all shadow-sm hover:shadow-md backdrop-blur-md lg:backdrop-blur-none">
                  <Calendar size={18} />
                  {t.nav.reserve}
                </a>
              </div>
              
              {/* Quick Info Cards */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-white/20 lg:border-stone-200 pt-8">
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 text-red-400 lg:text-red-900 mb-2">
                    <ChefHat size={16} />
                    <span className="text-xs font-semibold tracking-wide uppercase">{t.hero.kitchen}</span>
                  </div>
                  <p className="text-sm font-medium text-white lg:text-stone-900">{t.hero.masterChefs}</p>
                </div>
                <div className="border-l border-white/20 lg:border-stone-200 pl-3 sm:pl-6">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 text-red-400 lg:text-red-900 mb-2">
                    <Clock size={16} />
                    <span className="text-xs font-semibold tracking-wide uppercase">{t.hero.hours}</span>
                  </div>
                  <p className="text-sm font-medium text-white lg:text-stone-900">{t.hero.openDaily}</p>
                  <p className="text-xs text-stone-300 lg:text-stone-500">12:00 PM - 02:00 AM</p>
                </div>
                <div className="border-l border-white/20 lg:border-stone-200 pl-3 sm:pl-6">
                  <div className="flex items-center justify-center lg:justify-start gap-1.5 text-red-400 lg:text-red-900 mb-2">
                    <MapPin size={16} />
                    <span className="text-xs font-semibold tracking-wide uppercase">{t.hero.location}</span>
                  </div>
                  <p className="text-sm font-medium text-white lg:text-stone-900">Nakhil 3</p>
                  <p className="text-xs text-stone-300 lg:text-stone-500">Azrou</p>
                </div>
              </div>
            </div>
            
            <div className="relative pl-4 lg:pl-0 hidden lg:block">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                {/* Abstract shapes */}
                <div className="absolute -inset-4 bg-red-100 rounded-[2rem] transform rotate-3"></div>
                <div className="absolute inset-0 bg-stone-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10 border border-white/50">
                  <img src="https://i.ibb.co/rR5bgGbY/Image-9-meat-burger-1024x538.png" alt="Premium Steak" className="w-full h-full object-cover transform scale-105" style={{ outline: '2px solid #7f1d1d', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-xs font-bold text-red-900 uppercase tracking-widest">{t.signature.tag}</span>
              <h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3 font-serif">
                {t.signature.title}
              </h2>
            </div>
            <a href="#menu" className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-red-900 transition-colors group">
              {t.signature.viewFull} 
              <ArrowRight size={16} className={`group-hover:${lang === 'ar' ? '-translate-x-1' : 'translate-x-1'} transition-transform`} />
            </a>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=600&fit=crop' },
              { img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=600&fit=crop' },
              { img: 'https://images.unsplash.com/photo-1645696301019-35adcc18fc21?w=500&h=600&fit=crop' },
              { img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=600&fit=crop' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
                  <div className="group-hover:bg-black/0 transition-colors bg-black/5 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
                  <img src={item.img} alt={t.signature.dishes[i].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-stone-900 group-hover:text-red-900 transition-colors">{t.signature.dishes[i].name}</h3>
                    <span className="text-sm font-medium text-stone-500">{t.signature.dishes[i].price}</span>
                  </div>
                  <p className="text-sm text-stone-500 leading-relaxed">{t.signature.dishes[i].desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="#menu" className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-medium px-6 py-3 rounded-full transition-all">
              {t.signature.viewFull}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
                    <img src="https://i.ibb.co/9H7BHTfj/chess-brg.jpg" alt="Restaurant Interior" className="w-full h-full object-cover opacity-90" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-stone-200">
                    <img src="https://i.ibb.co/PZM6Vb88/machrob-gha.jpg" alt="Chef Cooking" className="opacity-90 w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
                    <img src="https://i.ibb.co/nsdQMyNR/rokoko.jpg" alt="Grill Fire" className="w-full h-full object-cover opacity-90" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold text-red-900 uppercase tracking-widest">{t.heritage.tag}</span>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-4 mb-8 font-serif whitespace-pre-line">
                {t.heritage.title}
              </h2>
              
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
                <p>
                  {t.heritage.p1}
                </p>
                <p>
                  {t.heritage.p2}
                </p>
                <p>
                  {t.heritage.p3}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12 pt-10 border-t border-stone-200/60">
                <div>
                  <p className="text-3xl lg:text-4xl font-semibold text-red-900 font-serif">100%</p>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">{t.heritage.local}</p>
                </div>
                <div>
                  <p className="text-3xl lg:text-4xl font-semibold text-red-900 font-serif">Elite</p>
                  <p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">{t.heritage.elite}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-red-900 uppercase tracking-widest">{t.menu.tag}</span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3 font-serif">
              {t.menu.title}
            </h2>
            <p className="text-stone-500 mt-4 max-w-xl mx-auto font-light text-lg">{t.menu.subtitle}</p>
          </div>
          
          {/* Menu Images Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "https://i.ibb.co/fd9c5tVb/111111.jpg",
              "https://i.ibb.co/tpbZJ3BP/Secon-2222.jpg",
              "https://i.ibb.co/rGDf4Xxc/33ss.jpg",
              "https://i.ibb.co/5ghsH1B6/44ff.jpg",
              "https://i.ibb.co/v6HYK3hB/55l.jpg",
              "https://i.ibb.co/LKqJSK0/coe.jpg",
              "https://i.ibb.co/Fbp4ptFt/pankekeke.jpg",
              "https://i.ibb.co/TMdrRghK/pankiki.jpg",
              "https://i.ibb.co/d0GgqcHq/drini.jpg",
              "https://i.ibb.co/FkMmkSKr/cofe.jpg"
            ].map((imgSrc, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-xl shadow-stone-900/10 border border-stone-200 hover:scale-[1.02] transition-transform duration-300">
                <img src={imgSrc} alt={`Menu Page ${i + 1}`} className="w-full h-auto object-cover" />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a href="https://wa.me/212619663040" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-stone-500 hover:text-red-900 font-medium text-sm transition-colors border-b border-transparent hover:border-red-900 pb-0.5">
              <Phone size={16} />
              {t.menu.orderWa}
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 lg:py-32 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">{t.gallery.tag}</span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mt-3 font-serif">
              {t.gallery.title}
            </h2>
            <p className="text-stone-400 mt-4 max-w-xl mx-auto font-light">{t.gallery.subtitle}</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'https://i.ibb.co/dy2Mc7m/view-1.jpg',
              'https://i.ibb.co/TDrFF035/3asir.jpg',
              'https://i.ibb.co/rSFN8dg/snow.jpg',
              'https://i.ibb.co/nsdQMyNR/rokoko.jpg'
            ].map((src, i) => (
              <div key={i} className={`aspect-square rounded-lg overflow-hidden group cursor-pointer`}>
                <img src={src} alt="Gallery image" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 lg:py-32 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-red-900 uppercase tracking-widest">{t.reviews.tag}</span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3 font-serif">
              {t.reviews.title}
            </h2>
            
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-stone-200 mt-8">
              <div className="flex items-center gap-0.5 text-red-900">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
              </div>
              <span className="text-xl font-bold text-stone-900">4.9</span>
              <span className="text-xs text-stone-500 border-l border-stone-200 pl-3">{t.reviews.from}</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { initials: "YB", name: "Youssef B.", bg: "bg-red-100", textCol: "text-red-900" },
              { initials: "AT", name: "Amina T.", bg: "bg-stone-200", textCol: "text-stone-900" },
              { initials: "KM", name: "Karim M.", bg: "bg-red-100", textCol: "text-red-900" }
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"{t.reviews.list[i].text}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${review.bg} rounded-full flex items-center justify-center ${review.textCol} font-bold text-sm`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-900">{review.name}</p>
                    <p className="text-[10px] uppercase tracking-wide text-stone-400">{t.reviews.list[i].time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <span className="text-xs font-bold text-red-900 uppercase tracking-widest">{t.contact.tag}</span>
              <h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3 mb-8 font-serif">
                {t.contact.title}
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-red-900">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-stone-900 mb-1">{t.contact.address}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{t.contact.addressText}</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-red-900">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-stone-900 mb-1">{t.contact.contact}</h3>
                    <a href="https://wa.me/212619663040" target="_blank" rel="noreferrer" className="text-sm text-stone-600 hover:text-red-900 transition-colors block mb-1" dir="ltr">+212 619-663040</a>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-red-900">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-stone-900 mb-1">{t.contact.opening}</h3>
                    <p className="text-sm text-stone-600">{t.contact.openingText}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden bg-stone-100 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106606.58189617265!2d-5.2954124!3d33.434444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda1d79116668783%3A0x6735e839e2402127!2sAzrou%2C%20Morocco!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Booking Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-stone-900">{t.nav.reserve}</h3>
                  </div>
                  <a href="https://wa.me/212619663040" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-red-900 hover:bg-red-950 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 lg:py-24 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <a href="#home" className="inline-block mb-6">
                <span className="text-3xl font-bold tracking-tight text-white font-serif">RIK</span>
              </a>
              <p className="text-sm leading-relaxed mb-6">
                {t.contact.desc}
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/rik_steakhouse" target="_blank" rel="noreferrer" className="text-white hover:text-red-400 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61552760002277" target="_blank" rel="noreferrer" className="text-white hover:text-red-400 transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">{t.contact.explore}</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-sm hover:text-white transition-colors">{t.nav.story}</a></li>
                <li><a href="#menu" className="text-sm hover:text-white transition-colors">{t.nav.menu}</a></li>
                <li><a href="#gallery" className="text-sm hover:text-white transition-colors">{t.nav.gallery}</a></li>
                <li><a href="https://maps.app.goo.gl/RMof4xevNuxFWvCg8" target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors">{t.contact.getDirections}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">{t.nav.visit}</h4>
              <ul className="space-y-3">
                <li className="text-sm">347, Nakhil 3</li>
                <li className="text-sm">Azrou, Morocco</li>
                <li className="pt-2"><a href="https://wa.me/212619663040" target="_blank" rel="noreferrer" className="text-sm text-white hover:text-red-400 transition-colors" dir="ltr">+212 619-663040</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">{t.contact.opening}</h4>
              <ul className="space-y-3">
                <li className="text-sm flex justify-between"><span>{t.contact.everyDay}</span> <span className="text-white">12:00 PM - 02:00 AM</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} RIK Steakhouse. {t.contact.rights}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">{t.contact.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.contact.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
