/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Layout,
  Zap,
  ChevronRight,
  MessageSquare,
  Send,
  Smartphone,
  Globe,
  Database,
  Cpu,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-display tracking-tight text-primary">
          Harold<span className="text-accent">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-600 hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Contratar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-600"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-primary text-white px-5 py-4 rounded-xl text-center font-bold text-xl"
              >
                Trabajemos juntos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/4 h-1/4 bg-blue-400/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
              Disponible para nuevos proyectos
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-primary max-w-[600px]">
              Hola, soy Harold 👋 <br />
              <span className="text-accent">Desarrollador Web</span> especializado en apps y dashboards
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
              Creo soluciones digitales que optimizan procesos y aumentan la productividad.
              Transformo ideas complejas en herramientas simples y escalables.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200"
              >
                Ver proyectos
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-white text-primary border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-accent hover:text-accent transition-all"
              >
                Trabajemos juntos
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto overflow-hidden rounded-[4rem] shadow-2xl border-4 border-white">
              <img
                src="/Harold1.png"
                alt="Harold"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative background for the image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 blur-3xl rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-slate-100 overflow-hidden">
                <img
                  src="/Bienvenidos.png"
                  alt="Bienvenidos"
                  className="w-full h-full object-cover rounded-3xl transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl shadow-xl hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent">
                    <Zap size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Experiencia</p>
                    <p className="text-xl font-bold text-primary">3+ Años Freelance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Desarrollo con enfoque estratégico
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Soy desarrollador web enfocado en crear aplicaciones que automatizan procesos empresariales.
              No solo escribo código; entiendo el negocio para crear herramientas que realmente generen valor.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Trabajo con tecnologías modernas como <span className="font-semibold text-primary">React</span>,
              <span className="font-semibold text-primary">Node.js</span> y herramientas <span className="font-semibold text-primary">No-Code</span>
              para entregar soluciones rápidas y escalables que ayudan a mis clientes a crecer.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-primary">Enfoque Técnico</h4>
                  <p className="text-sm text-slate-500">Código limpio y escalable.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-primary">Visión de Negocio</h4>
                  <p className="text-sm text-slate-500">Soluciones orientadas a resultados.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-blue-500" />,
      title: "Desarrollo Web",
      description: "Landing pages de alto impacto y sitios corporativos optimizados para conversión.",
      items: ["Landing Pages", "Sitios Corporativos", "SEO Optimization"]
    },
    {
      icon: <Layout className="text-purple-500" />,
      title: "Aplicaciones Web",
      description: "Dashboards personalizados y sistemas internos para gestionar tu información.",
      items: ["Dashboards", "Sistemas CRM/ERP", "Web Apps Progresivas"]
    },
    {
      icon: <Cpu className="text-orange-500" />,
      title: "Automatización",
      description: "Integraciones y herramientas No-Code para ahorrar tiempo en tareas repetitivas.",
      items: ["AppSheet", "Integraciones API", "Workflow Automation"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Mis Servicios</h2>
          <p className="text-slate-600">Transformo tu portafolio en una máquina de ventas con soluciones a medida.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Gestion de Activos Plantas Industriales",
      category: "Industrial",
      description: "Plataforma para el monitoreo y mantenimiento predictivo de equipos industriales.",
      result: "Aumento de la eficiencia operativa en un 25%.",
      tech: ["React", "Node.js", "Industrial IoT"],
      image: "/gestion_activos.png"
    },
    {
      title: "Plataforma de Gestion de Recursos Humanos",
      category: "RRHH",
      description: "Plataforma de gestión de personal y procesos internos.",
      result: "Optimización total en la administración del capital humano.",
      tech: ["React", "Express", "PostgreSQL"],
      image: "/RRHH2.png"
    },
    {
      title: "Plataforma Gestion de Presupuestos (APU)",
      category: "Ingeniería",
      description: "Generador dinámico de presupuestos con análisis de precios unitarios integrados.",
      result: "Reducción del 40% en el tiempo de elaboración técnica.",
      tech: ["React", "PostgreSQL", "Tailwind"],
      image: "/presupuestos.png"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Proyectos Destacados</h2>
            <p className="text-slate-600">No describo funciones, describo resultados reales para mis clientes.</p>
          </div>
          <a href="#" className="text-accent font-bold flex items-center gap-2 hover:underline">
            Ver todos los proyectos <ChevronRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full bg-slate-50/50 p-6 rounded-[2.5rem] border border-transparent hover:border-accent/10 hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold rounded-full text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-accent transition-colors min-h-[4rem] line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-8 line-clamp-2 min-h-[3rem]">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <div className="bg-white border border-slate-100 p-5 rounded-2xl mb-6 shadow-sm group-hover:border-accent/20 transition-colors">
                    <p className="text-xs font-bold text-accent mb-2 uppercase tracking-widest">Impacto:</p>
                    <p className="text-sm text-slate-700 italic font-medium">"{project.result}"</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8 min-h-[2.5rem]">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-2xl font-bold text-sm hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                      Ver demo <ExternalLink size={14} />
                    </button>
                    <button className="px-5 border-2 border-slate-100 rounded-2xl hover:border-accent hover:text-accent transition-all text-slate-400">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechStack = () => {
  const stacks = [
    {
      name: "Frontend",
      techs: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"]
    },
    {
      name: "Backend & DB",
      techs: ["Node.js", "Express", "Supabase", "PostgreSQL", "Firebase"]
    },
    {
      name: "Herramientas",
      techs: ["Git", "Docker", "Vercel", "Figma", "AppSheet"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Stack Tecnológico</h2>
            <p className="text-slate-400">Herramientas modernas para soluciones robustas.</p>
          </div>
          <div className="md:col-span-3 grid sm:grid-cols-3 gap-8">
            {stacks.map((stack, i) => (
              <div key={i}>
                <h4 className="text-accent font-bold text-sm uppercase tracking-widest mb-6">{stack.name}</h4>
                <div className="flex flex-wrap gap-3">
                  {stack.techs.map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium hover:bg-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Desarrollador Freelance",
      period: "2023 - Presente",
      description: "Liderando el desarrollo de soluciones a medida para PYMES y startups.",
      points: [
        "Optimización de UI para cliente → mejora en experiencia de usuario.",
        "Desarrollo de web desde cero para negocio local.",
        "Implementación de sistemas de automatización No-Code."
      ]
    },
    {
      role: "Web Developer Jr.",
      period: "2021 - 2023",
      description: "Colaboración en agencias digitales para el mantenimiento de sitios corporativos.",
      points: [
        "Mantenimiento de 10+ sitios WordPress y React.",
        "Mejora de tiempos de carga en un 40%.",
        "Integración de pasarelas de pago."
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Experiencia & Casos Reales</h2>
          <p className="text-slate-600">Mi trayectoria profesional enfocada en el impacto real.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm" />
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full uppercase tracking-wider">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-600 mb-6 text-lg">{exp.description}</p>
              <ul className="space-y-3">
                {exp.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-500">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Tienes una idea? Hagámosla realidad 🚀</h2>
              <p className="text-slate-300 text-lg mb-10">
                Estoy listo para ayudarte a optimizar tu negocio con tecnología.
                Hablemos sobre tu próximo proyecto.
              </p>

              <div className="space-y-6">
                <a href="mailto:harold.dev.web@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-lg font-bold">harold.dev.web@gmail.com</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Smartphone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">WhatsApp</p>
                    <p className="text-lg font-bold">+57 3152560715</p>
                  </div>
                </a>
                <div className="flex gap-4 pt-4">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all">
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 text-primary shadow-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Nombre</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-wider">Mensaje</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-accent transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${status === 'sending' ? 'bg-slate-300' : 'bg-accent text-white hover:bg-blue-600 shadow-blue-200'}`}
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
                  <Send size={18} />
                </button>

                {status === 'success' && (
                  <p className="text-green-600 font-bold text-center">¡Mensaje enviado con éxito! 🚀</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 font-bold text-center">Error al enviar. Intenta de nuevo.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Harold Developer. Todos los derechos reservados.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Github size={20} /></a>
          <a href="#" className="text-slate-400 hover:text-primary transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "CEO de TechStart",
      text: "Harold transformó nuestra idea en una aplicación funcional en tiempo récord. Su enfoque en la automatización nos ahorró horas de trabajo manual.",
      avatar: "https://picsum.photos/seed/person1/100/100"
    },
    {
      name: "Elena Gómez",
      role: "Fundadora de EcoModa",
      text: "Excelente profesional. Entendió perfectamente las necesidades de mi negocio y creó una landing page que duplicó nuestras consultas en un mes.",
      avatar: "https://picsum.photos/seed/person2/100/100"
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Lo que dicen mis clientes</h2>
          <p className="text-slate-600">Resultados y feedback real de proyectos exitosos.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-6"
            >
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => <Zap key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-slate-700 italic leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
