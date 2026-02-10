export function SkillsSection() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Figma', level: 75 },
        { name: 'REST APIs', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Testing', level: 70 },
      ],
    },
  ];

  const technologies = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'Next.js', color: 'bg-gray-900' },
    { name: 'Tailwind CSS', color: 'bg-cyan-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'Node.js', color: 'bg-green-600' },
    { name: 'Git', color: 'bg-orange-600' },
    { name: 'Figma', color: 'bg-purple-600' },
    { name: 'Redux', color: 'bg-purple-700' },
    { name: 'Sass', color: 'bg-pink-500' },
    { name: 'Webpack', color: 'bg-blue-400' },
    { name: 'Vite', color: 'bg-purple-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium">My Expertise</span>
          <h2 className="text-4xl text-gray-900 mt-2">Skills & Technologies</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="space-y-16">
          {/* Skill Bars */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-2xl text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Pills */}
          <div>
            <h3 className="text-2xl text-gray-900 mb-6 text-center">Technology Stack</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative px-6 py-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all hover:scale-105 hover:shadow-md cursor-default"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${tech.color} rounded-full`}></div>
                    <span className="text-sm text-gray-700">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
