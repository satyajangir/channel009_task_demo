import React, { useState, useEffect } from 'react';
import { Leaf, GraduationCap, Tractor, Map, Phone, ShieldCheck, FileText, ChevronRight, Menu, Globe, X, HeartHandshake, AlertCircle, Briefcase, Users, PhoneCall, Quote } from 'lucide-react';


const BackButton = ({ onClick, lang }) => (
  <button className="back-btn" onClick={onClick}>
    <ChevronRight size={20} style={{ transform: 'rotate(180deg)' }} />
    {lang === 'hi' ? 'वापस जाएं' : 'Go Back'}
  </button>
);

const CertificatesPage = ({ lang, setActivePage }) => (
  <div className="page-container">
    <BackButton onClick={() => setActivePage('home')} lang={lang} />
    <div className="page-header">
      <h2 className="page-title">{lang === 'hi' ? 'प्रमाण पत्र आवेदन' : 'Certificate Application'}</h2>
      <p>{lang === 'hi' ? 'आय, जाति या निवास प्रमाण पत्र के लिए ऑनलाइन आवेदन करें।' : 'Apply for Income, Caste, or Residence Certificate online.'}</p>
    </div>
    <div className="form-card">
      <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'hi' ? 'आवेदन सफलतापूर्वक जमा किया गया!' : 'Application submitted successfully!'); setActivePage('home'); }}>
        <div className="form-group">
          <label>{lang === 'hi' ? 'पूरा नाम' : 'Full Name'}</label>
          <input type="text" required placeholder={lang === 'hi' ? 'अपना नाम दर्ज करें' : 'Enter your name'} />
        </div>
        <div className="form-group">
          <label>{lang === 'hi' ? 'प्रमाण पत्र का प्रकार' : 'Certificate Type'}</label>
          <select required>
            <option value="">{lang === 'hi' ? '--चुनें--' : '--Select--'}</option>
            <option value="income">{lang === 'hi' ? 'आय प्रमाण पत्र' : 'Income Certificate'}</option>
            <option value="caste">{lang === 'hi' ? 'जाति प्रमाण पत्र' : 'Caste Certificate'}</option>
            <option value="residence">{lang === 'hi' ? 'निवास प्रमाण पत्र' : 'Residence Certificate'}</option>
          </select>
        </div>
        <div className="form-group">
          <label>{lang === 'hi' ? 'आधार नंबर' : 'Aadhaar Number'}</label>
          <input type="text" required pattern="[0-9]{12}" placeholder="XXXX-XXXX-XXXX" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>
          {lang === 'hi' ? 'आवेदन जमा करें' : 'Submit Application'}
        </button>
      </form>
    </div>
  </div>
);

const GrievancesPage = ({ lang, setActivePage }) => (
  <div className="page-container">
    <BackButton onClick={() => setActivePage('home')} lang={lang} />
    <div className="page-header">
      <h2 className="page-title">{lang === 'hi' ? 'शिकायत दर्ज करें' : 'Register Grievance'}</h2>
      <p>{lang === 'hi' ? 'अपनी शिकायत या सुझाव पंचायत तक सीधे पहुंचाएं।' : 'Send your grievance or suggestion directly to the Panchayat.'}</p>
    </div>
    <div className="form-card">
      <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'hi' ? 'आपकी शिकायत दर्ज कर ली गई है। संदर्भ संख्या: GP-8492' : 'Your grievance has been registered. Ref No: GP-8492'); setActivePage('home'); }}>
        <div className="form-group">
          <label>{lang === 'hi' ? 'विभाग' : 'Department'}</label>
          <select required>
            <option value="">{lang === 'hi' ? '--विभाग चुनें--' : '--Select Department--'}</option>
            <option value="water">{lang === 'hi' ? 'जल आपूर्ति' : 'Water Supply'}</option>
            <option value="roads">{lang === 'hi' ? 'सड़कें एवं परिवहन' : 'Roads & Transport'}</option>
            <option value="electricity">{lang === 'hi' ? 'बिजली' : 'Electricity'}</option>
            <option value="health">{lang === 'hi' ? 'स्वास्थ्य एवं स्वच्छता' : 'Health & Sanitation'}</option>
          </select>
        </div>
        <div className="form-group">
          <label>{lang === 'hi' ? 'समस्या का विवरण' : 'Issue Description'}</label>
          <textarea required rows="4" placeholder={lang === 'hi' ? 'विस्तार से बताएं...' : 'Describe in detail...'}></textarea>
        </div>
        <div className="form-group">
          <label>{lang === 'hi' ? 'संपर्क नंबर' : 'Contact Number'}</label>
          <input type="tel" required placeholder="+91" />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>
          {lang === 'hi' ? 'शिकायत दर्ज करें' : 'Register Grievance'}
        </button>
      </form>
    </div>
  </div>
);

const SchemesPage = ({ lang, setActivePage }) => {
  const schemes = [
    { title: lang === 'hi' ? 'पीएम किसान सम्मान निधि' : 'PM Kisan Samman Nidhi', desc: lang === 'hi' ? 'किसानों को 6000/- रुपये की वार्षिक वित्तीय सहायता।' : 'Annual financial assistance of Rs 6000/- to farmers.' },
    { title: lang === 'hi' ? 'उज्ज्वला योजना' : 'Ujjwala Yojana', desc: lang === 'hi' ? 'गरीब परिवारों की महिलाओं के लिए मुफ्त एलपीजी कनेक्शन।' : 'Free LPG connections to women from BPL families.' },
    { title: lang === 'hi' ? 'आवास योजना (ग्रामीण)' : 'Awas Yojana (Gramin)', desc: lang === 'hi' ? 'पक्के घरों के निर्माण के लिए वित्तीय सहायता।' : 'Financial assistance for the construction of pucca houses.' },
    { title: lang === 'hi' ? 'आयुष्मान भारत' : 'Ayushman Bharat', desc: lang === 'hi' ? 'प्रति परिवार 5 लाख रुपये तक का मुफ्त स्वास्थ्य बीमा।' : 'Free health insurance cover of up to Rs 5 Lakhs per family.' },
    { title: lang === 'hi' ? 'सुकन्या समृद्धि योजना' : 'Sukanya Samriddhi Yojana', desc: lang === 'hi' ? 'बालिकाओं के भविष्य के लिए उच्च ब्याज वाली बचत योजना।' : 'High-interest savings scheme for the future of girl children.' },
    { title: lang === 'hi' ? 'मुद्रा योजना' : 'Mudra Yojana', desc: lang === 'hi' ? 'लघु व्यवसायों और उद्यमियों के लिए संपार्श्विक-मुक्त ऋण।' : 'Collateral-free loans for small businesses and entrepreneurs.' }
  ];

  return (
    <div className="page-container">
      <BackButton onClick={() => setActivePage('home')} lang={lang} />
      <div className="page-header">
        <h2 className="page-title">{lang === 'hi' ? 'सरकारी योजनाएं' : 'Government Schemes'}</h2>
        <p>{lang === 'hi' ? 'सूर्यपुरा पंचायत में लागू सभी प्रमुख सरकारी योजनाओं की सूची।' : 'List of all major government schemes applicable in Suryapura Panchayat.'}</p>
      </div>
      <div className="schemes-grid">
        {schemes.map((s, i) => (
          <div key={i} className="scheme-card">
            <h3 className="scheme-title">{s.title}</h3>
            <p className="scheme-desc">{s.desc}</p>
            <button className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', padding: '0.5rem 1rem' }} onClick={() => alert(lang === 'hi' ? 'योजना का विवरण जल्द ही उपलब्ध होगा।' : 'Scheme details will be available soon.')}>
              {lang === 'hi' ? 'अधिक जानें' : 'Know More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const EpanchayatPage = ({ lang, setActivePage }) => (
  <div className="page-container" style={{ textAlign: 'center' }}>
    <BackButton onClick={() => setActivePage('home')} lang={lang} />
    <div className="page-header">
      <div style={{ display: 'inline-flex', padding: '1rem', background: 'var(--primary-light)', color: 'var(--primary)', borderRadius: '50%', marginBottom: '1.5rem' }}>
        <ShieldCheck size={48} />
      </div>
      <h2 className="page-title">{lang === 'hi' ? 'सुरक्षित ई-पंचायत पोर्टल' : 'Secure e-Panchayat Portal'}</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--text-muted)' }}>
        {lang === 'hi' ? 'अपने पंचायत रिकॉर्ड्स, फंड ट्रैकिंग और अन्य सुरक्षित सेवाओं तक पहुँचने के लिए कृपया प्रमाणीकरण करें।' : 'Please authenticate to access your panchayat records, fund tracking, and other secure services.'}
      </p>
    </div>
    <div className="form-card" style={{ maxWidth: '400px' }}>
      <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'hi' ? 'ओटीपी आपके पंजीकृत मोबाइल नंबर पर भेजा गया है!' : 'OTP sent to your registered mobile number!'); }}>
        <div className="form-group">
          <label>{lang === 'hi' ? 'आधार नंबर दर्ज करें' : 'Enter Aadhaar Number'}</label>
          <input type="text" required pattern="[0-9]{12}" placeholder="XXXX-XXXX-XXXX" style={{ textAlign: 'center', letterSpacing: '2px', fontSize: '1.2rem', fontWeight: 'bold' }} />
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
          {lang === 'hi' ? 'ओटीपी प्राप्त करें' : 'Get OTP'}
        </button>
      </form>
    </div>
  </div>
);


function App() {
  const base = import.meta.env.BASE_URL;
  const [lang, setLang] = useState('hi');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [activePage, setActivePage] = useState('home');
  const [fontSize, setFontSize] = useState(100);
  const [theme, setTheme] = useState('light');


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);


  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);


  useEffect(() => {
    if (theme === 'high-contrast') {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [theme]);

  const openModal = (title, content) => {
    setActiveModal({ title, content });
  };
  const closeModal = () => {
    setActiveModal(null);
  };

  const content = {
    hi: {
      brand: "सूर्यपुरा पंचायत",
      nav: ["हमारे बारे में", "पहल", "ई-पंचायत", "गैलरी"],
      heroBadge: "डिजिटल इंडिया पहल",
      heroTitle: "ग्रामीण जीवन का सशक्तिकरण, एक आधुनिक सूर्यपुरा का निर्माण",
      heroSubtitle: "सूर्यपुरा ग्राम पंचायत के आधिकारिक विकास पोर्टल में आपका स्वागत है। हम अपने किसानों, युवाओं और बुनियादी ढांचे के समग्र विकास के लिए पूरी तरह से पारदर्शी और समर्पित हैं। हमारा लक्ष्य एक ऐसा गांव बनाना है जहाँ हर नागरिक सशक्त हो।",
      btnExplore: "हमारी पहल देखें",
      btnEpanchayat: "ई-पंचायत से जुड़ें",
      stats: ["डिजिटल पहचान पंजीकृत", "नई पक्की सड़कें", "स्मार्ट स्कूल बने", "सौर ऊर्जा उपलब्धता"],
      initTitle: "विकास के प्रमुख केंद्र",
      initSubtitle: "ग्रामीण सशक्तिकरण के हर पहलू पर केंद्रित हमारी प्रमुख विकास पहलें, जो हमारे गांव की तस्वीर और तकदीर दोनों बदल रही हैं।",
      cards: [
        {
          title: "किसान कल्याण",
          desc: "आधुनिक खेती की तकनीकें, मृदा स्वास्थ्य कार्ड (Soil Health Card) और स्थानीय उपज के लिए सीधी बाजार पहुंच, ताकि हमारे किसानों की आय दोगुनी हो सके।"
        },
        {
          title: "शिक्षा प्रथम",
          desc: "गांव के स्कूलों में विश्वस्तरीय बुनियादी ढांचा, डिजिटल कक्षाएं और मेधावी छात्रों के लिए विशेष छात्रवृत्ति कार्यक्रम ताकि कोई बच्चा पीछे न रहे।"
        },
        {
          title: "बुनियादी ढांचा",
          desc: "हर वार्ड को जोड़ने वाली बारहमासी पक्की सड़कें, स्वच्छ पेयजल की व्यवस्था, और उन्नत स्वच्छता सुविधाएं जो जीवन स्तर को सुधारें।"
        }
      ],
      digitalTitle: "डिजिटल पहचान और पारदर्शिता",
      digitalSubtitle: "सूर्यपुरा के प्रत्येक निवासी के पास अब ई-पंचायत पोर्टल से जुड़ी एक सत्यापित डिजिटल पहचान है। सरकारी योजनाओं का लाभ उठाएं, फंड के उपयोग को ट्रैक करें, और बिना किसी परेशानी के ऑनलाइन प्रमाणपत्रों के लिए आवेदन करें।",
      digitalFeatures: [
        {
          title: "100% पारदर्शी फंड",
          desc: "पंचायत द्वारा खर्च किए गए हर एक रुपये की रियल-टाइम जानकारी प्राप्त करें। आपका पैसा, आपका अधिकार।"
        },
        {
          title: "डिजिटल प्रमाणपत्र",
          desc: "जन्म, जाति और आय प्रमाण पत्र के लिए सीधे अपने मोबाइल से आवेदन करें और डाउनलोड करें। अब सरकारी दफ्तरों के चक्कर नहीं।"
        }
      ],
      socialTitle: "सामुदायिक अपडेट्स",
      socialSubtitle: "जमीन से विकास की सच्ची कहानियां, हमारे समुदाय द्वारा साझा की गईं।",
      post1: {
        time: "2 घंटे पहले",
        text: "तकनीक के माध्यम से हमारे किसानों का सशक्तिकरण! ई-पंचायत पोर्टल अब पूरी तरह से सक्रिय है। हर किसान हो डिजिटल, देश हो आत्मनिर्भर। 📱🌾",
        tags: "#डिजिटलभारत #ईपंचायत #ग्रामीणविकास"
      },
      post2: {
        time: "1 दिन पहले",
        text: "बच्चों के चेहरों की मुस्कान सब कुछ कह देती है। मुख्य गांव को श्री गणेश रूरल मॉडल स्कूल से जोड़ने वाली नई पक्की सड़क का काम पूरा हुआ। हमारे बच्चों के लिए सुरक्षित सफर! 📚✨",
        tags: "#ग्रामीणशिक्षा #गांवकाविकास #भविष्यकेनेता"
      },
      quickServicesTitle: "त्वरित सेवाएं",
      quickServices: ["प्रमाण पत्र", "शिकायत", "योजनाएं", "संपर्क"],
      messageTitle: "मुखिया का संदेश",
      messageText: "हमारा उद्देश्य केवल बुनियादी ढांचे का निर्माण करना नहीं है, बल्कि हर नागरिक के जीवन में सकारात्मक और स्थायी बदलाव लाना है। आपकी प्रगति ही हमारी सच्ची सफलता है।",
      messageAuthor: "- सरपंच, सूर्यपुरा पंचायत",
      helpDesk: "सहायता",
      modalTexts: {
        explore: "विभिन्न पहलों की सूची जल्द ही अपडेट की जाएगी।",
        contact: "संपर्क विवरण: पंचायत भवन, मुख्य मार्ग, सूर्यपुरा। टोल फ्री: 1800-XXX-XXXX",
        help: "सहायता केंद्र में आपका स्वागत है। हमारे प्रतिनिधि जल्द ही आपसे जुड़ेंगे।"
      },
      footerRights: "© 2026 सूर्यपुरा ग्राम पंचायत। सर्वाधिकार सुरक्षित।"
    },
    en: {
      brand: "Suryapura Panchayat",
      nav: ["About", "Initiatives", "e-Panchayat", "Gallery"],
      heroBadge: "Digital India Initiative",
      heroTitle: "Empowering Rural Lives, Building a Modern Suryapura",
      heroSubtitle: "Welcome to the official development portal of Suryapura Gram Panchayat. Transparent, progressive, and dedicated to the comprehensive growth of our farmers, youth, and infrastructure. We aim to build a village where every citizen is empowered.",
      btnExplore: "Explore Initiatives",
      btnEpanchayat: "Access e-Panchayat",
      stats: ["Digital Identity Enrolled", "New Paved Roads", "Smart Schools Built", "Solar Power Access"],
      initTitle: "Our Focus Areas",
      initSubtitle: "Categorized development initiatives focusing on all aspects of rural empowerment, fundamentally changing the face and future of our village.",
      cards: [
        {
          title: "Farmer Welfare",
          desc: "Modern farming techniques, soil health cards, and direct market access for local produce to help double our farmers' income."
        },
        {
          title: "Education First",
          desc: "World-class infrastructure in village schools, digital classrooms, and special scholarship programs so no child is left behind."
        },
        {
          title: "Infrastructure",
          desc: "All-weather roads connecting every ward, clean drinking water supply, and advanced sanitation facilities to drastically improve living standards."
        }
      ],
      digitalTitle: "Digital Identity & Transparency",
      digitalSubtitle: "Every resident in Suryapura now has a verified digital identity linked to the e-Panchayat portal. Seamlessly access government schemes, track fund utilization, and apply for certificates online with zero friction.",
      digitalFeatures: [
        {
          title: "100% Transparent Funds",
          desc: "Track every rupee spent by the Panchayat in real-time. Your money, your right to know."
        },
        {
          title: "Digital Certificates",
          desc: "Apply for and download birth, caste, and income certificates directly from your mobile. No more waiting at government offices."
        }
      ],
      socialTitle: "Community Updates",
      socialSubtitle: "Real stories of development from the ground, shared by our community.",
      post1: {
        time: "2 hours ago",
        text: "Empowering our farmers through technology! E-panchayat portal is now fully active. Har farmer ho digital, desh ho atmanirbhar. 📱🌾",
        tags: "#DigitalBharat #ePanchayat #RuralGrowth"
      },
      post2: {
        time: "1 day ago",
        text: "The smiles on their faces say it all. Completed the new paved road connecting the main village to Sri Ganesh Rural Model School. Safe journey for our kids! 📚✨",
        tags: "#RuralEducation #VillageDevelopment #FutureLeaders"
      },
      quickServicesTitle: "Quick Services",
      quickServices: ["Certificates", "Grievances", "Schemes", "Contact"],
      messageTitle: "Message from the Sarpanch",
      messageText: "Our objective is not just building infrastructure, but bringing a positive and lasting change in the life of every citizen. Your progress is our true success.",
      messageAuthor: "- Sarpanch, Suryapura Panchayat",
      helpDesk: "Help",
      modalTexts: {
        explore: "The list of initiatives will be updated soon.",
        contact: "Contact Details: Panchayat Bhavan, Main Road, Suryapura. Toll Free: 1800-XXX-XXXX",
        help: "Welcome to the Help Desk. Our representatives will connect with you shortly."
      },
      footerRights: "© 2026 Suryapura Gram Panchayat. All rights reserved."
    }
  };

  const t = content[lang];

  return (
    <div className="app-container">

      <div className="gov-topbar">
        <div className="gov-topbar-content">
          <div className="gov-left">
            <span className="gov-flag-strip"></span>
            <span className="gov-text">
              {lang === 'hi' ? 'भारत सरकार | पंचायती राज मंत्रालय' : 'Government of India | Ministry of Panchayati Raj'}
            </span>
          </div>
          <div className="gov-right">
            <a href="#main-content" className="skip-link">{lang === 'hi' ? 'मुख्य विषयवस्तु में जाएं' : 'Skip to Main Content'}</a>
            <span className="divider">|</span>
            <div className="font-resizers">
              <button className={`resizer ${fontSize === 90 ? 'active' : ''}`} onClick={() => setFontSize(90)}>A-</button>
              <button className={`resizer ${fontSize === 100 ? 'active' : ''}`} onClick={() => setFontSize(100)}>A</button>
              <button className={`resizer ${fontSize === 110 ? 'active' : ''}`} onClick={() => setFontSize(110)}>A+</button>
            </div>
            <span className="divider">|</span>
            <button className={`high-contrast-btn ${theme === 'high-contrast' ? 'active' : ''}`} onClick={() => setTheme(theme === 'light' ? 'high-contrast' : 'light')} title={lang === 'hi' ? 'उच्च कंट्रास्ट' : 'High Contrast'}>
              <div className="hc-circle black"></div>
              <div className="hc-circle white"></div>
            </button>
          </div>
        </div>
      </div>


      <div className="news-ticker">
        <div className="ticker-title">{lang === 'hi' ? 'नवीनतम सूचना' : 'Latest News'}</div>
        <div className="ticker-content">
          <marquee behavior="scroll" direction="left" scrollamount="6">
            {lang === 'hi' ? 
              'पंचायती राज चुनाव की तारीखों की घोषणा जल्द ही की जाएगी। | खरीफ फसलों के लिए बीज पंचायत भवन में उपलब्ध हैं। | गांव में निःशुल्क स्वास्थ्य शिविर 25 तारीख को। | नए ई-पंचायत पोर्टल में आपका स्वागत है।' : 
              'Panchayati Raj election dates will be announced soon. | Seeds for Kharif crops are available at Panchayat Bhavan. | Free health camp in the village on the 25th. | Welcome to the new e-Panchayat portal.'}
          </marquee>
        </div>
      </div>

      <nav className="navbar">
        <div className="brand" onClick={() => setActivePage('home')} style={{ cursor: 'pointer' }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="State Emblem" className="emblem" />
          <div className="brand-text">
            <span className="brand-title">{t.brand}</span>
            <span className="brand-subtitle">{lang === 'hi' ? 'ग्राम विकास पोर्टल' : 'Village Development Portal'}</span>
          </div>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={(e) => { e.preventDefault(); setActivePage('home'); setIsMobileMenuOpen(false) }}>{t.nav[0]}</a>
          <a href="#initiatives" onClick={(e) => { 
            e.preventDefault(); 
            setActivePage('home'); 
            setIsMobileMenuOpen(false);
            setTimeout(() => { document.getElementById('initiatives')?.scrollIntoView({behavior: 'smooth'}) }, 100);
          }}>{t.nav[1]}</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('epanchayat'); setIsMobileMenuOpen(false) }}>{t.nav[2]}</a>
          <a href="#gallery" onClick={(e) => { 
            e.preventDefault(); 
            setActivePage('home'); 
            setIsMobileMenuOpen(false);
            setTimeout(() => { document.getElementById('gallery')?.scrollIntoView({behavior: 'smooth'}) }, 100);
          }}>{t.nav[3]}</a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')} 
            className="btn btn-outline" 
            style={{ 
              padding: '0.5rem 1rem', 
              color: 'var(--primary-dark)', 
              borderColor: 'var(--primary)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Globe size={18} />
            {lang === 'hi' ? 'English' : 'हिंदी'}
          </button>
          <div className="mobile-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} className="icon-spin" /> : <Menu size={24} className="icon-spin" />}
          </div>
        </div>
      </nav>


      <main id="main-content">
        {activePage === 'certificates' && <CertificatesPage lang={lang} setActivePage={setActivePage} />}
        {activePage === 'grievances' && <GrievancesPage lang={lang} setActivePage={setActivePage} />}
        {activePage === 'schemes' && <SchemesPage lang={lang} setActivePage={setActivePage} />}
        {activePage === 'epanchayat' && <EpanchayatPage lang={lang} setActivePage={setActivePage} />}
        
        {activePage === 'home' && (
        <>
          <section id="about" className="hero">
            <img src={`${base}hero_banner.png`} alt="Suryapura Village Hero" className="hero-background" />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-badge">{t.heroBadge}</div>
              <h1 className="hero-title">{t.heroTitle}</h1>
              <p className="hero-subtitle">{t.heroSubtitle}</p>
              <div className="hero-actions">
                <a href="#initiatives" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('initiatives')?.scrollIntoView({behavior: 'smooth'}); }}>
                  {t.btnExplore} <ChevronRight size={20} />
                </a>
                <button className="btn btn-outline" onClick={() => setActivePage('epanchayat')}>
                  {t.btnEpanchayat}
                </button>
              </div>
            </div>
          </section>

          <section className="stats-section">
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">{t.stats[0]}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15km</div>
              <div className="stat-label">{t.stats[1]}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">{t.stats[2]}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t.stats[3]}</div>
            </div>
          </section>

          <section className="quick-services">
            <div className="qs-container">
              <a href="#" className="qs-item" onClick={(e) => { e.preventDefault(); setActivePage('certificates'); }}>
                <div className="qs-icon"><FileText size={24} /></div>
                <span>{t.quickServices[0]}</span>
              </a>
              <a href="#" className="qs-item" onClick={(e) => { e.preventDefault(); setActivePage('grievances'); }}>
                <div className="qs-icon"><AlertCircle size={24} /></div>
                <span>{t.quickServices[1]}</span>
              </a>
              <a href="#" className="qs-item" onClick={(e) => { e.preventDefault(); setActivePage('schemes'); }}>
                <div className="qs-icon"><Briefcase size={24} /></div>
                <span>{t.quickServices[2]}</span>
              </a>
              <a href="#" className="qs-item" onClick={(e) => { e.preventDefault(); openModal(t.quickServices[3], t.modalTexts.contact); }}>
                <div className="qs-icon"><PhoneCall size={24} /></div>
                <span>{t.quickServices[3]}</span>
              </a>
            </div>
          </section>

          <section className="village-widgets">
            <div className="widget-card">
              <h3 className="widget-title">{lang === 'hi' ? 'मंडी भाव (आज)' : 'Mandi Prices (Today)'}</h3>
              <ul className="mandi-list">
                <li><span>गेहूं (Wheat)</span> <strong>₹2,275 / Qtl</strong></li>
                <li><span>धान (Paddy)</span> <strong>₹2,183 / Qtl</strong></li>
                <li><span>सोयाबीन (Soybean)</span> <strong>₹4,600 / Qtl</strong></li>
                <li><span>सरसों (Mustard)</span> <strong>₹5,450 / Qtl</strong></li>
              </ul>
            </div>
            <div className="widget-card weather-card">
              <h3 className="widget-title">{lang === 'hi' ? 'मौसम पूर्वानुमान' : 'Weather Forecast'}</h3>
              <div className="weather-info">
                <div className="weather-temp">32°C</div>
                <div className="weather-desc">{lang === 'hi' ? 'आसमान साफ रहेगा। हवा की गति 10-15 किमी/घंटा।' : 'Clear skies. Wind speed 10-15 km/h.'}</div>
              </div>
              <div className="weather-forecast">
                <div><span>{lang === 'hi' ? 'कल' : 'Tomorrow'}</span> <strong>34°C</strong></div>
                <div><span>{lang === 'hi' ? 'परसों' : 'Day After'}</span> <strong>31°C</strong></div>
              </div>
            </div>
          </section>

          <section id="initiatives" className="categories">
            <div className="section-header">
              <h2 className="section-title">{t.initTitle}</h2>
              <p className="section-subtitle">{t.initSubtitle}</p>
            </div>
            <div className="category-grid">
              <div className="category-card">
                <div className="category-icon"><Tractor size={28} /></div>
                <h3 className="category-title">{t.cards[0].title}</h3>
                <p className="category-desc">{t.cards[0].desc}</p>
              </div>
              <div className="category-card">
                <div className="category-icon"><GraduationCap size={28} /></div>
                <h3 className="category-title">{t.cards[1].title}</h3>
                <p className="category-desc">{t.cards[1].desc}</p>
              </div>
              <div className="category-card">
                <div className="category-icon"><Map size={28} /></div>
                <h3 className="category-title">{t.cards[2].title}</h3>
                <p className="category-desc">{t.cards[2].desc}</p>
              </div>
            </div>
          </section>

          <section className="thoughtful-message">
            <div className="message-container">
              <Quote size={48} className="quote-icon" />
              <p className="message-text">"{t.messageText}"</p>
              <div className="message-author">
                <div className="author-avatar"><Users size={20} /></div>
                <span>{t.messageAuthor}</span>
              </div>
            </div>
          </section>

          <section id="epanchayat" className="digital-identity">
            <div className="digital-content-wrapper">
              <div className="digital-text">
                <h2>{t.digitalTitle}</h2>
                <p>{t.digitalSubtitle}</p>
                <div className="digital-features">
                  <div className="digital-feature">
                    <div className="digital-feature-icon"><ShieldCheck size={24} /></div>
                    <div>
                      <h4>{t.digitalFeatures[0].title}</h4>
                      <p style={{fontSize: '0.9rem', marginBottom: 0}}>{t.digitalFeatures[0].desc}</p>
                    </div>
                  </div>
                  <div className="digital-feature">
                    <div className="digital-feature-icon"><FileText size={24} /></div>
                    <div>
                      <h4>{t.digitalFeatures[1].title}</h4>
                      <p style={{fontSize: '0.9rem', marginBottom: 0}}>{t.digitalFeatures[1].desc}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="digital-image-wrapper">
                <div className="digital-image-container">
                  <img src={`${base}social_digital.png`} alt="Digital Identity" className="digital-image" />
                </div>
              </div>
            </div>
          </section>

          <section id="gallery" className="social-wall">
            <div className="section-header">
              <h2 className="section-title">{t.socialTitle}</h2>
              <p className="section-subtitle">{t.socialSubtitle}</p>
            </div>
            <div className="social-grid">
              <div 
                className="social-post" 
                style={{ cursor: 'pointer' }} 
                onClick={() => openModal(lang === 'hi' ? 'सामुदायिक अपडेट' : 'Community Update', t.post1.text)}
              >
                <div className="post-header">
                  <div className="post-avatar">SP</div>
                  <div className="post-meta">
                    <h4>{t.brand}</h4>
                    <span>{t.post1.time}</span>
                  </div>
                </div>
                <img src={`${base}social_digital.png`} alt="Farmer using tablet" className="post-image" />
                <div className="post-content">
                  <p className="post-text">{t.post1.text}</p>
                  <span className="post-hashtags">{t.post1.tags}</span>
                </div>
              </div>
              <div 
                className="social-post" 
                style={{ cursor: 'pointer' }} 
                onClick={() => openModal(lang === 'hi' ? 'सामुदायिक अपडेट' : 'Community Update', t.post2.text)}
              >
                <div className="post-header">
                  <div className="post-avatar">SP</div>
                  <div className="post-meta">
                    <h4>{t.brand}</h4>
                    <span>{t.post2.time}</span>
                  </div>
                </div>
                <img src={`${base}social_education.png`} alt="Children going to school" className="post-image" />
                <div className="post-content">
                  <p className="post-text">{t.post2.text}</p>
                  <span className="post-hashtags">{t.post2.tags}</span>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      </main>

      <footer>
        <div className="footer-content footer-grid">
          <div className="footer-col">
            <div className="brand footer-brand" style={{color: 'white', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem'}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" alt="State Emblem" style={{height: '50px', filter: 'brightness(0) invert(1)'}} />
              <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
                <span style={{fontWeight: '700', fontSize: '1.3rem'}}>{t.brand}</span>
                <span style={{fontSize: '0.9rem', opacity: 0.8}}>{lang === 'hi' ? 'पंचायती राज मंत्रालय' : 'Ministry of Panchayati Raj'}</span>
              </div>
            </div>
            <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.6' }}>
              {lang === 'hi' ? 'सूर्यपुरा ग्राम पंचायत का आधिकारिक वेब पोर्टल। यह डिजिटल इंडिया के तहत ग्रामीण नागरिकों को सशक्त बनाने की एक पहल है।' : 'Official web portal of Suryapura Gram Panchayat. An initiative to empower rural citizens under Digital India.'}
            </p>
          </div>
          
          <div className="footer-col">
            <h4>{lang === 'hi' ? 'महत्वपूर्ण लिंक' : 'Important Links'}</h4>
            <ul>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home'); }}>{lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('certificates'); }}>{lang === 'hi' ? 'प्रमाण पत्र' : 'Certificates'}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('schemes'); }}>{lang === 'hi' ? 'सरकारी योजनाएं' : 'Govt Schemes'}</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setActivePage('grievances'); }}>{lang === 'hi' ? 'शिकायतें' : 'Grievances'}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{lang === 'hi' ? 'अन्य पोर्टल' : 'Other Portals'}</h4>
            <ul>
              <li><a href="https://india.gov.in" target="_blank" rel="noreferrer">India.gov.in</a></li>
              <li><a href="https://panchayat.gov.in" target="_blank" rel="noreferrer">Ministry of Panchayati Raj</a></li>
              <li><a href="https://pmkisan.gov.in" target="_blank" rel="noreferrer">PM Kisan Portal</a></li>
              <li><a href="https://uidai.gov.in" target="_blank" rel="noreferrer">UIDAI (Aadhaar)</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{lang === 'hi' ? 'संपर्क करें' : 'Contact Us'}</h4>
            <ul className="contact-info">
              <li><Phone size={16} /> 1800-XXX-XXXX (Toll Free)</li>
              <li><Globe size={16} /> info@suryapura.gov.in</li>
              <li><Map size={16} /> Panchayat Bhavan, Main Road, Suryapura, 400001</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footerRights} | {lang === 'hi' ? 'अंतिम अपडेट: ' : 'Last Updated: '} {new Date().toLocaleDateString()}</p>
        </div>
      </footer>


      <div className="floating-help">
        <button className="help-btn" onClick={() => openModal(t.helpDesk, t.modalTexts.help)}>
          <HeartHandshake size={24} />
          <span className="help-text">{t.helpDesk}</span>
        </button>
      </div>

      {activeModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{activeModal.title}</h3>
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
            </div>
            <div className="modal-body">
              <p>{activeModal.content}</p>
              <div className="modal-actions" style={{ marginTop: '2rem', textAlign: 'right' }}>
                <button className="btn btn-primary" onClick={closeModal}>
                  {lang === 'hi' ? 'ठीक है' : 'OK'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
