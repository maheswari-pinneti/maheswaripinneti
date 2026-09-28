import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Went from Figma to production in 11 days. The site loads in under a second and our bounce rate dropped 35% the first week.",
    author: "Marketing Director, SaaS startup"
  },
  {
    quote: "Finally a developer who actually listens. When I changed my mind about the checkout flow halfway through, he didn't push back — just adjusted and shipped it better than what I originally asked for.",
    author: "Founder, DTC skincare brand"
  },
  {
    quote: "Our Core Web Vitals went from red to green overnight. Solid architecture, clean codebase — the kind of work I'd expect from a senior engineer.",
    author: "CTO, fintech startup"
  }
];

export const Testimonials = () => {
  return (
    <div className="section" style={{ padding: '4rem 0' }}>
      <h2 style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2rem' }}>
        TESTIMONIALS
      </h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ 
              padding: '2rem',
              borderLeft: '2px solid var(--border-color)',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '0 16px 16px 0'
            }}
          >
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem', fontStyle: 'italic' }}>"{testimonial.quote}"</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>— {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
