
import { useEffect, useRef } from 'react';
import { Code, BookOpen, Briefcase, Award } from 'lucide-react';

const AboutSection = () => {
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

  const timeline = [
    {
      year: '2023',
      title: 'Graphic Design Internship',
      description: 'Contributed to 15% engagement increase and 20% faster workflows.',
      icon: <Briefcase size={20} />
    },
    {
      year: '2024',
      title: 'Winner, Hackathon',
      description: '1st place for AI-driven solution.',
      icon: <Award size={20} />
    },
    {
      year: '2025',
      title: 'Top 5% LeetCode Ranking',
      description: 'Solved 500+ problems focusing on DSA.',
      icon: <Code size={20} />
    },
    {
      year: '2026',
      title: 'BTech CSE (AI) Graduation',
      description: 'Specializing in AI and Machine Learning.',
      icon: <BookOpen size={20} />
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 min-h-screen flex items-center bg-portfolio-bg-dark transition-all duration-700 opacity-0 translate-y-10"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">About Me</h2>
            <p className="text-lg mb-6 text-portfolio-muted">
              I'm a final-year BTech CSE (AI) student passionate about creating innovative solutions at the intersection of AI, full-stack development, and graphic design.
            </p>
            <p className="text-lg mb-6 text-portfolio-muted">
              My journey in tech has been driven by curiosity and a desire to build products that make a meaningful impact. I focus on developing AI systems that are both powerful and ethical, with a keen eye for design and user experience.
            </p>
            <p className="text-lg mb-8 text-portfolio-muted">
              I have experience in both front-end and back-end development, with a special interest in machine learning algorithms, ethical AI, and creating visually compelling interfaces that enhance user engagement.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-portfolio-muted">
                <span className="text-portfolio-accent-cyan">▹</span>
                <span>Python</span>
              </div>
              <div className="flex items-center gap-2 text-portfolio-muted">
                <span className="text-portfolio-accent-cyan">▹</span>
                <span>JavaScript</span>
              </div>
              <div className="flex items-center gap-2 text-portfolio-muted">
                <span className="text-portfolio-accent-cyan">▹</span>
                <span>React</span>
              </div>
              <div className="flex items-center gap-2 text-portfolio-muted">
                <span className="text-portfolio-accent-cyan">▹</span>
                <span>TensorFlow</span>
              </div>
              <div className="flex items-center gap-2 text-portfolio-muted">
                <span className="text-portfolio-accent-cyan">▹</span>
                <span>Node.js</span>
              </div>
              <div className="flex items-center gap-2 text-portfolio-muted">
                <span className="text-portfolio-accent-cyan">▹</span>
                <span>Figma</span>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative ml-12">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-portfolio-accent-cyan/30"></div>
              
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="mb-12 relative pl-10"
                >
                  <div className="absolute top-0 left-0 transform -translate-x-1/2 w-10 h-10 rounded-full bg-portfolio-bg-light border-2 border-portfolio-accent-cyan flex items-center justify-center text-portfolio-accent-cyan z-10">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-portfolio-accent-cyan text-sm mb-1">{item.year}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-portfolio-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
