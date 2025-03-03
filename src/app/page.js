import Image from 'next/image';
import styles from './page.module.css';
import ParticleComponent from './ParticleComponent';

export default function Home() {
  return (
    
    <div className={styles.container}>
      <ParticleComponent />
      <header className={styles.header}>
        <div className={styles.logo}>IFTech</div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>Nosotros</a>
          <a href="#services" className={styles.navLink}>Servicios</a>
          <a href="#projects" className={styles.navLink}>Proyectos</a>
          <a href="#contact" className={styles.navLink}>Contacto</a>
          <a href="#" className={styles.buttonLink}>Discuss →</a>
        </nav>
      </header>


      
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Ordenamos<br />tu futuro
            </h1>
            <div className={styles.heroImageGrid}>
              <div className={styles.heroImage1}>
                <Image 
                  src="/laptop-working.jpg" 
                  alt="Person working on laptop" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.circleElement}>
                <div className={styles.circleInner}>
                  <div className={styles.arrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className={styles.circleText}>nuestra misión</div>
                </div>
              </div>
              <div className={styles.heroImage2}>
                <Image 
                  src="/architecture.jpg" 
                  alt="Modern architecture" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.heroImageText}>
                  <p>cómo te ayudamos</p>
                  <p>el orden es la clave para conseguir el futuro que deseas y lograr las metas que anhelas.</p>
                  <p>descubre cómo →</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className={styles.aboutSection}>
          <h2 className={styles.sectionTitle}>Nosotros</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>x2</h3>
              <p className={styles.statText}>la tasa de conversión</p>
              <button className={styles.plusButton}>+</button>
            </div>
            <div className={styles.statImageCard}>
              <div className={styles.phoneImage}>
                <Image 
                  src="/phone-stats.jpg" 
                  alt="Phone with statistics" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>50%</h3>
              <p className={styles.statText}>clientes que solicitan productos</p>
              <button className={styles.plusButton}>+</button>
            </div>
            <div className={styles.aboutTextCard}>
              <p>Planificamos un análisis exhaustivo de nuestros competidores y audiencia objetivo para determinar que materiales y estrategias de diseño de organización selectiva y efectiva se requieren para producir nuestro servicio en base a tu negocio o necesidad organizativa.</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>90%</h3>
              <p className={styles.statText}>clientes que regresan al comprar de nuevo</p>
              <button className={styles.plusButton}>+</button>
            </div>
            <div className={styles.statImageCard}>
              <div className={styles.phoneImage}>
                <Image 
                  src="/phone-app.jpg" 
                  alt="Phone app interface" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection} id="services">
          <h2 className={styles.sectionTitle}>Servicios</h2>
          <div className={styles.servicesList}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceNumber}>01.</div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Gestión de tareas</h3>
                <p className={styles.serviceDesc}>
                  Gestión de tareas, planificación, organización, control, y cumplimiento de objetivos.
                </p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceNumber}>02.</div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Calendario integrado</h3>
                <p className={styles.serviceDesc}>
                  Planificación, organización, control, y cumplimiento de objetivos.
                </p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceNumber}>03.</div>
              <div className={styles.serviceContent}>
                <h3 className={styles.serviceTitle}>Automatización de flujos de trabajo</h3>
                <p className={styles.serviceDesc}>
                  Automatización de flujos de trabajo, planificación, organización, control, y cumplimiento de objetivos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Projects Section */}
        <section className={styles.projectsSection} id="projects">
          <h2 className={styles.sectionTitle}>Latest Projects</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image 
                  src="/ceramics.jpg" 
                  alt="RAK Ceramics" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>RAK Ceramics</h3>
                <p className={styles.projectDesc}>Planificación y seguimiento de tareas en equipos de trabajo, asignación de responsables y control de plazos.</p>
              </div>
              <button className={styles.viewProjectButton}>+</button>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image 
                  src="/flower-shop.jpg" 
                  alt="Flower Shop" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>E-Side</h3>
                <p className={styles.projectDesc}>Creación de listas de tareas diarias, recordatorios y planificación de objetivos a corto y largo plazo.</p>
              </div>
              <button className={styles.viewProjectButton}>+</button>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image 
                  src="/level.jpg" 
                  alt="Level" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Level Construtor</h3>
                <p className={styles.projectDesc}>Coordinación de eventos, asignación de responsabilidades y control de logística en tiempo real.</p>
              </div>
              <button className={styles.viewProjectButton}>+</button>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage}>
                <Image 
                  src="/minimalist.jpg" 
                  alt="Web site for minimalist" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>Plant-ArCh</h3>
                <p className={styles.projectDesc}>Gestión de sprints, backlog de tareas y seguimiento de avances con metodologías ágiles como Scrum y Kanban.</p>
              </div>
            </div>
          </div>
          <div className={styles.seeMoreContainer}>
            <button className={styles.seeMoreButton}>más proyectos →</button>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className={styles.contactSection} id="contact">
          <h2 className={styles.contactTitle}>Contactanos</h2>
          <div className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre*</label>
              <input type="text" id="name" className={styles.formInput} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono*</label>
              <input type="tel" id="phone" className={styles.formInput} required />
              <small className={styles.formDisclaimer}>Al proporcionar tu información, aceptas recibir actualizaciones y promociones de nosotros.</small>
            </div>
            <div className={styles.formSubmit}>
              <button type="submit" className={styles.submitButton}>Enviar →</button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>IFTech</div>
          <div className={styles.footerLinks}>
            <div className={styles.footerNav}>
              <a href="#about">Nosotros</a>
              <a href="#services">Servicios</a>
            </div>
            <div className={styles.footerSocial}>
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">Dribble</a>
              <a href="#">Behance</a>
            </div>
            <div className={styles.footerNav}>
              <a href="#projects">Proyectos</a>
              <a href="#contact">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}