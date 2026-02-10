import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ProjectsSection() {
  const projects = [
    {
      title: 'Family Laundry',
      description: 'Website layanan laundry profesional dengan sistem pemesanan online dan manajemen pelanggan.',
      image: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXVuZHJ5JTIwc2VydmljZXxlbnwxfHx8fDE3NjU4MjM5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Website', 'Laundry Service', 'Online Booking'],
      liveUrl: 'https://familylaundry.my.id',
      githubUrl: '#',
    },
    {
      title: 'SPanda Coffee',
      description: 'Website coffee shop modern dengan menu interaktif, online ordering, dan galeri produk kopi.',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2NTgyMzk5NHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Vercel', 'Coffee Shop', 'Web Design'],
      liveUrl: 'https://s-panda-coffee.vercel.app/',
      githubUrl: '#',
    },
    {
      title: 'Jasa Website',
      description: 'Platform jasa pembuatan website profesional dengan berbagai paket layanan dan portfolio showcase.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjU4MjM5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Web Development', 'Services', 'Portfolio', 'Vercel'],
      liveUrl: 'https://jasa-website-three.vercel.app/',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium">Portfolio</span>
          <h2 className="text-4xl text-gray-900 mt-2">Featured Projects</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A selection of my recent work and personal projects that showcase my skills and expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                    aria-label="View Live Project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
                    aria-label="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl text-gray-900 mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
