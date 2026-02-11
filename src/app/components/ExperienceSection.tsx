import { Briefcase, Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { useState } from 'react';

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<'work' | 'education' | 'achievements'>('work');

  const workExperiences = [
    {
      title: 'Frontend Developer Intern',
      company: 'SMKN 1 Boyolangu',
      period: 'Jun 2025 - Aug 2025',
      location: 'Tulungagung, Indonesia',
      description:
        'Developed responsive web applications using ReactJs and Tailwind CSS. Collaborated with design team to implement pixel-perfect UI components and improved website performance by 30%.',
      skills: ['ReactJs', 'Tailwind CSS', 'JavaScript', 'Git'],
    },
    {
      title: 'Web Developer',
      company: 'SMKN 1 Boyolangu',
      period: 'Jan 2025 - Present',
      location: 'Tulungagung, Indonesia',
      description:
        'Created custom websites for local businesses and startups. Specialized in modern web technologies and responsive design principles.',
      skills: ['HTML/CSS', 'JavaScript', 'WordPress', 'UI/UX Design'],
    },
    {
      title: 'Junior Web Developer',
      company: 'SMKN 1 Boyolangu',
      period: 'Sep 2025 - Dec 2025',
      location: 'Tulungagung, Indonesia',
      description:
        'Assisted in developing client websites and maintaining existing web applications. Gained experience in team collaboration and agile development methodologies.',
      skills: ['HTML', 'CSS', 'PHP', 'MySQL'],
    },
  ];

  const education = [
    {
      title: 'SMK Negeri 1 Boyolangu',
      institution: 'Rekayasa Perangkat Lunak',
      period: '2024- 2027',
      location: 'Tulungagung, Indonesia',
      description:
        'Completed high school with focus on Science stream. Developed early interest in computer science and programming.',
      achievements: ['Honor Student', 'Computer Club Member'],
    },
  ];

  const achievements = [
    {
      title: 'Best Web Design Competition',
      organization: 'USU Tech Festival 2024',
      period: 'Nov 2024',
      description:
        'Won first place in web design competition with innovative portfolio website design and implementation.',
    },
    {
      title: 'Certified Frontend Developer',
      organization: 'FreeCodeCamp',
      period: 'Aug 2024',
      description:
        'Completed comprehensive frontend development certification covering HTML, CSS, JavaScript, React, and modern web technologies.',
    },
    {
      title: 'Hackathon Participant',
      organization: 'Tulungagung Tech Hackathon',
      period: 'Jun 2024',
      description:
        'Participated in 48-hour hackathon, developed a web application for local businesses using React and Firebase.',
    },
    {
      title: 'Competition JCC 2025',
      organization: 'Java Community Championship',
      period: 'Feb 2025',
      description:
        'Participated in JCC 2025 competition showcasing web development skills and innovations.',
    },
  ];

  const tabs = [
    { id: 'work' as const, label: 'Work Experience', icon: Briefcase },
    { id: 'education' as const, label: 'Education', icon: GraduationCap },
    { id: 'achievements' as const, label: 'Achievements', icon: Award },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-3">My Experience</h2>
          <p className="text-gray-600">
            A journey through my professional growth, education, and achievements
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-md">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          {/* Work Experience */}
          {activeTab === 'work' && (
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                {workExperiences.map((exp, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-3 w-5 h-5 bg-gray-900 rounded-full border-4 border-gray-50"></div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h3 className="text-xl text-gray-900 mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm">{exp.company}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 sm:mt-0 text-left sm:text-right">
                          <div className="flex items-center gap-1 sm:justify-end mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{exp.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-900 text-white text-sm rounded-lg"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {activeTab === 'education' && (
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-3 w-5 h-5 bg-gray-900 rounded-full border-4 border-gray-50"></div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h3 className="text-xl text-gray-900 mb-1">{edu.title}</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <GraduationCap className="w-4 h-4" />
                            <span className="text-sm">{edu.institution}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 sm:mt-0 text-left sm:text-right">
                          <div className="flex items-center gap-1 sm:justify-end mb-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{edu.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-900 text-white text-sm rounded-lg"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          {activeTab === 'achievements' && (
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-3 w-5 h-5 bg-gray-900 rounded-full border-4 border-gray-50"></div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                        <div>
                          <h3 className="text-xl text-gray-900 mb-1">{achievement.title}</h3>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Award className="w-4 h-4" />
                            <span className="text-sm">{achievement.organization}</span>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500 mt-2 sm:mt-0">
                          <div className="flex items-center gap-1 sm:justify-end">
                            <Calendar className="w-4 h-4" />
                            <span>{achievement.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
