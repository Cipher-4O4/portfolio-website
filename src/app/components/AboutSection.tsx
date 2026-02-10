import { User, MapPin, GraduationCap, Mail, Phone, Briefcase, Download, ArrowUpRight } from 'lucide-react';
import profileImage from '../../assets/my-foto.jpg';
import { motion } from 'framer-motion';

export function AboutSection() {

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const downloadCV = () => {
    // Ganti URL ini dengan link CV Anda yang sebenarnya
    const cvLink = 'https://drive.google.com/file/d/YOUR_CV_ID/view?usp=sharing';
    window.open(cvLink, '_blank');
  };

  const infoCards = [
    {
      icon: User,
      label: 'Nama',
      value: 'Muhammad Nur Izzatul Huda',
    },
    {
      icon: MapPin,
      label: 'Domisili',
      value: 'Tulungagung, Indonesia',
    },
    {
      icon: GraduationCap,
      label: 'Pendidikan',
      value: 'Rekayasa Perangkat Lunak, Smkn 1 Boyolangu',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'izatulhuda30@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+6281-615-969-296',
    },
    {
      icon: Briefcase,
      label: 'Status',
      value: 'Available for Work',
    },
  ];

  const interests = [
    'Frontend Development',
    'React & Next.js',
    'UI/UX Design',
    'Web Technologies',
    'Creative Problem Solving',
    'Responsive Design'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-gray-900 mb-3">About Me</h2>
          <p className="text-gray-900 max-w-2xl mx-auto">
            Passionate about creating innovative solutions through technology
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Muhammad Nur Izzatul Huda"
                  className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>

            {/* Right Column - Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl text-gray-900 mb-4 font-semibold">Hello There!</h3>
                <p className="text-gray-900 leading-relaxed">
                  Saya adalah seorang pengembang frontend berpengalaman dari Tulungagung, Indonesia, dengan fokus pada teknologi web modern. Saya memiliki passion dalam menciptakan pengalaman digital yang indah, fungsional, dan berpusat pada pengguna.
                </p>
                <p className="text-gray-900 leading-relaxed mt-3">
                  Saya senang mempelajari hal-hal baru dan selalu berusaha untuk mengembangkan kemampuan saya dalam bidang pemrograman, khususnya dalam pengembangan frontend dan desain UI/UX.
                </p>
              </motion.div>

              {/* Info Grid */}
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {infoCards.map((card, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 flex items-start gap-4 transition-all duration-300 hover:shadow-md"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1 font-medium">{card.label}</p>
                      <p className="text-base text-black font-semibold">{card.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Interests & Focus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h4 className="text-gray-900 mb-3 font-semibold">Interests & Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <motion.span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-900 text-sm rounded-lg font-medium border border-blue-100"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-wrap gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <button 
                  onClick={downloadCV}
                  className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all flex items-center gap-2 shadow-md">
                  <Download className="w-4 h-4" />
                  Download CV
                </button>
                <button 
                  onClick={scrollToContact}
                  className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                  Hire Me Now
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
