import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager at TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      content: 'Alex is an exceptional developer who consistently delivers high-quality work. His attention to detail and ability to translate designs into pixel-perfect implementations is outstanding.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO at StartUp Hub',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      content: 'Working with Alex was a pleasure. He brought creative solutions to our challenges and delivered beyond our expectations. His technical skills are matched by his excellent communication.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead at Digital Innovations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      content: 'Alex is one of the best frontend developers I\'ve worked with. He understands design principles and always ensures the final product looks and performs beautifully across all devices.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-emerald-600 font-medium">Testimonials</span>
          <h2 className="text-4xl text-gray-900 mt-2">What People Say</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-black">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.content}</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
