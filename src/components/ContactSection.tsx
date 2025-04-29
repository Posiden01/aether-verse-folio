
import { useRef, useState, useEffect } from 'react';
import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send the form data to a server
    // Since this is a demo, we'll just simulate a successful submission
    console.log('Form submitted:', { name, email, message });
    setMessageSent(true);
    setName('');
    setEmail('');
    setMessage('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setMessageSent(false);
    }, 5000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 min-h-screen bg-portfolio-bg-light transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mx-auto">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <p className="text-lg text-portfolio-muted mb-8">
              I'm currently looking for new opportunities to apply my skills in AI, full-stack development, and design. Whether you have a question, a project idea, or just want to connect, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-bg-dark p-3 rounded-full text-portfolio-accent-cyan">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-portfolio-muted hover:text-portfolio-accent-cyan transition-colors duration-300"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-bg-dark p-3 rounded-full text-portfolio-accent-cyan">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-muted hover:text-portfolio-accent-cyan transition-colors duration-300"
                  >
                    linkedin.com/aether-dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-portfolio-bg-dark p-3 rounded-full text-portfolio-accent-cyan">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">GitHub</h3>
                  <a 
                    href="https://github.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-portfolio-muted hover:text-portfolio-accent-cyan transition-colors duration-300"
                  >
                    github.com/aether-dev
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare size={20} className="text-portfolio-accent-cyan" />
              Send a Message
            </h3>
            
            {messageSent ? (
              <div className="bg-portfolio-accent-cyan/20 border border-portfolio-accent-cyan rounded-lg p-4 text-center">
                <p className="text-portfolio-text">Your message has been sent successfully!</p>
                <p className="text-portfolio-muted text-sm mt-2">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-portfolio-muted mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-portfolio-bg-dark border border-portfolio-text/10 focus:border-portfolio-accent-cyan outline-none text-portfolio-text transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-portfolio-muted mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded bg-portfolio-bg-dark border border-portfolio-text/10 focus:border-portfolio-accent-cyan outline-none text-portfolio-text transition-colors duration-300"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-portfolio-muted mb-2">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded bg-portfolio-bg-dark border border-portfolio-text/10 focus:border-portfolio-accent-cyan outline-none text-portfolio-text transition-colors duration-300"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-secondary w-full"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
