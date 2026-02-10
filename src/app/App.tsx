import { ArrowRight, MapPin, Home, User, Briefcase, FolderOpen, Code2, MessageSquare, Mail, Sparkles } from 'lucide-react';
import exampleImage from '../assets/my-foto.jpg';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

export default function App() {
  const navItems = [
    { name: 'Home', icon: Home },
    { name: 'About', icon: User },
    { name: 'Experience', icon: Briefcase },
    { name: 'Projects', icon: FolderOpen },
    { name: 'Skills', icon: Code2 },
    { name: 'Testimonials', icon: MessageSquare },
    { name: 'Contact', icon: Mail },
  ];

  const [activeSection, setActiveSection] = useState('Home');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: string) => {
    e.preventDefault();
    const targetId = item.toLowerCase();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(item);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
          setActiveSection(sectionName);
        }
      });
    }, observerOptions);

    navItems.forEach(item => {
      const element = document.getElementById(item.name.toLowerCase());
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach(item => {
        const element = document.getElementById(item.name.toLowerCase());
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full py-6 z-50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-center">
          <div className="bg-white rounded-full shadow-lg px-4 py-2.5 flex items-center gap-1 border border-gray-200">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item.name)}
                className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all ${
                  activeSection === item.name
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span className="text-sm hidden lg:inline">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 bg-emerald-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              <span className="text-sm text-emerald-700 font-medium">Available for freelance work</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl text-black leading-tight">
                Hi, I'm <span className="font-bold text-black">Muhammad Nur Izzatul Huda</span>
              </h1>
              <TypeAnimation
                sequence={[
                  'Software Engineering Student',
                  2000,
                  'Web Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Technology Enthusiast',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="text-3xl lg:text-4xl text-black font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-black leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I create beautiful, functional, and user-centered digital experiences. With 3+ years of experience in web development, I bring ideas to life through clean code, innovative design, and thoughtful user experience.
            </motion.p>

            {/* Location & Status */}
            <motion.div
              className="flex items-center gap-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-black">
                <MapPin className="w-4 h-4" />
                <span>Tulungagung, Indonesia</span>
              </div>
              <motion.div
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-black text-sm rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Available Now
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center gap-4 pt-4 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 bg-gradient-to-r from-gray-900 to-black text-white rounded-lg hover:from-gray-800 hover:to-gray-900 transition-all flex items-center gap-2 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  View Projects
                </span>
              </motion.button>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 border-2 border-gray-900 text-gray-900 bg-white rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Let's Work Together
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.7, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative group">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-300/50 z-10">
                <ImageWithFallback
                  src={exampleImage}
                  alt="Frontend Developer Profile"
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Other Sections */}
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}