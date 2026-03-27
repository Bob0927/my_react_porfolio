import React, { useState } from 'react';
import './about.css';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
];

const skillCards = [
    {
        title: 'Web & CMS',
        description:
            'Building and managing modern website experiences with practical frontend and CMS tools.',
        tags: ['WordPress', 'Elementor', 'JavaScript', 'Responsive Web Design'],
        icon: 'grid',
        featured: false,
    },
    {
        title: 'Programming & Data',
        description:
            'Developing application logic and strengthening technical foundations across software and databases.',
        tags: ['Python', 'Java', 'MySQL', 'PostgreSQL'],
        icon: 'nodes',
        featured: false,
    },
    {
        title: 'Cloud / AWS',
        description:
            'Validated cloud foundations with AWS certifications and practical understanding of cloud computing concepts.',
        tags: ['Amazon Web Services (AWS)', 'Cloud Computing', 'AWS Cloud', 'AWS Certified Cloud Practitioner'],
        icon: 'cloud',
        featured: true,
    },
    {
        title: 'AI & Emerging Tech',
        description:
            'Exploring AI, machine learning, and applied technical skills through coursework and certification study.',
        tags: ['AI', 'Machine Learning', 'AWS Certified AI Practitioner', 'Web Development'],
        icon: 'terminal',
        featured: false,
    },
];

const journeyItems = [
    {
        period: 'Aug 2025',
        title: 'Bridge to Brisbane Marathon',
        role: 'Event Volunteer',
        description:
            'Assisted with large-scale event coordination and participant management for a high-volume community event.',
        active: true,
    },
    {
        period: 'Jun 2025',
        title: 'St Lucia Bushcare',
        role: 'Volunteer',
        description:
            'Supported sustainability and community outreach initiatives through local environmental restoration work.',
        active: false,
    },
];

const certifications = [
    {
        id: 'cloud-practitioner',
        status: 'Active',
        title: 'AWS Certified Cloud Practitioner',
        description:
            'Comprehensive validation of AWS Cloud fluency, covering core services, security, architecture, pricing, and support models. Verified foundational knowledge for multi-tenant cloud ecosystems.',
        certificateUrl:
            '/certificates/aws-certified-cloud-practitioner-certificate.pdf',
        issuedDate: 'January 2026',
        highlights: [
            'Cloud Value Proposition & Economics',
            'Shared Responsibility Model Mastery',
        ],
        mark: 'AWS',
        badgeImage: '/certificates/aws-certified-cloud-practitioner.png',
    },
    {
        id: 'ai-practitioner',
        status: 'Active',
        title: 'AWS Certified AI Practitioner',
        description:
            'Specialized validation in Machine Learning concepts and Generative AI on AWS. Focuses on selecting the right foundation models, prompt engineering, and implementing responsible AI.',
        certificateUrl:
            '/certificates/aws-certified-ai-practitioner-certificate.pdf',
        issuedDate: 'March 2026',
        highlights: [
            'Generative AI & Bedrock Implementation',
            'SageMaker Lifecycle & ML Governance',
        ],
        mark: 'AI',
        badgeImage: '/certificates/aws-certified-ai-practitioner.png',
    },
];

const projectBullets = [
    'Art gallery, commission flow, and magic performance sections',
    'Cross-platform traffic funnel from social media to owned website',
    'Password-protected content and custom UI interactions',
    'Brand-focused experience designed for retention and engagement',
];

const projectCards = [
    {
        id: 'furry-fandom-portfolio',
        tags: ['WordPress', 'Elementor', 'JavaScript'],
        title: 'Furry Fandom Portfolio Website',
        description:
            'A personal portfolio hub built with WordPress to showcase furry fandom identity, digital artwork, and magic performance content while converting social media traffic into long-term audience engagement.',
        bullets: [
            ...projectBullets,
            'Content layering strategy: social media attracts, website deepens engagement',
            'Commission and storytelling sections support product-style audience journeys',
        ],
        link: 'https://loic0927.com',
        visual: 'tablet',
    },
    {
        id: 'interactive-food-culture',
        tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
        title: 'Interactive Food Culture Website',
        description:
            'A fully front-end project promoting healthy eating, cultural food exploration, and community recipe sharing through interactive UI components, dynamic content updates, and user-driven submission flows.',
        bullets: [
            'Interactive world map with region-based food culture exploration',
            'Recipe submission flow with instant DOM-generated content cards',
            'Email notification integration to simulate real-world app behavior',
            'Structured user journey: Learn, Explore, and Participate',
            'Demonstrates DOM manipulation, interaction design, and front-end information architecture',
            'Balances educational content, usability, and community participation goals',
        ],
        link: 'https://bob0927.github.io/deco7140_development/work_phase_4/',
        visual: 'network',
    },
    {
        id: 'react-portfolio-website',
        tags: ['React', 'Vite', 'CSS', 'Responsive UI'],
        title: 'React Portfolio Website',
        description:
            'A modern personal portfolio website built with React and Vite to present my technical profile, certifications, and recent projects through a polished single-page experience.',
        bullets: [
            'Component-based page structure for reusable sections and cleaner UI organization',
            'State-driven mobile navigation using React hooks for responsive interaction flow',
            'Dynamic project and certification rendering with mapped data objects',
            'Custom CSS visual system with distinctive project cards, gradients, and layout hierarchy',
            'Responsive single-page portfolio experience designed for desktop and mobile viewing',
            'Demonstrates React fundamentals, Vite workflow, and modern front-end presentation techniques',
        ],
        link: 'https://github.com/Bob0927',
        visual: 'reactfolio',
    },
];

function About() {
    const [photoError, setPhotoError] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const handleAnchorClick = () => {
        setMobileNavOpen(false);
    };

    return (
        <main className="about-page">
            <header className="about-topbar">
                <div className="about-topbar__inner">
                    <button
                        className="about-topbar__brand"
                        type="button"
                    >
                        Portfolio
                    </button>

                    <nav className="about-topbar__nav" aria-label="Primary">
                        {navItems.map((item) => (
                            <a href={`#${item.id}`} key={item.id}>
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <a className="about-topbar__cta" href="#contact">
                        Contact Me
                    </a>

                    <button
                        className={`about-topbar__menu ${mobileNavOpen ? 'is-active' : ''}`}
                        onClick={() => setMobileNavOpen((open) => !open)}
                        type="button"
                        aria-expanded={mobileNavOpen}
                        aria-label="Toggle navigation"
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                {mobileNavOpen ? (
                    <div className="about-topbar__mobile">
                        {navItems.map((item) => (
                            <a
                                href={`#${item.id}`}
                                key={item.id}
                                onClick={handleAnchorClick}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                ) : null}
            </header>

            <div className="about-content">
                <section className="hero-panel" id="about">
                    <div className="hero-copy">
                        <span className="hero-kicker">
                            Master of IT ??Cloud Architect
                        </span>
                        <h1>
                            Building Scalable
                            <br />
                            <span>Full-Stack Solutions</span>
                            <br />
                            in the Cloud
                        </h1>
                        <p className="hero-description">
                            Detail-oriented IT professional specializing in AWS
                            cloud architecture, full-stack development, and
                            data-driven systems. I design resilient digital
                            experiences that balance technical depth with user
                            value.
                        </p>

                        <div className="hero-tags" aria-label="Core skills">
                            <span>AWS</span>
                            <span>React</span>
                            <span>Cloud</span>
                            <span>AI</span>
                        </div>

                        <div className="hero-actions">
                            <a className="hero-actions__primary" href="#projects">
                                View Projects
                            </a>
                            <a className="hero-actions__secondary" href="#contact">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-credential">
                            <span
                                className="hero-credential__icon"
                                aria-hidden="true"
                            />
                            <div>
                                <p>Certification</p>
                                <strong>AWS Certified</strong>
                            </div>
                        </div>

                        <div className="hero-photo-card" aria-label="Profile photo">
                            {!photoError ? (
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Wei Wang profile"
                                    onError={() => setPhotoError(true)}
                                />
                            ) : (
                                <div className="hero-photo-fallback">
                                    <span>WW</span>
                                    <p>Add your photo to public/profile-photo.jpg</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="content-section content-section--alt" id="skills">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">The Toolkit</span>
                            <h2>Technical Proficiency</h2>
                        </div>
                        <p className="section-copy">
                            Leveraging industry-standard technologies to deliver
                            robust cloud-native applications.
                        </p>
                    </div>

                    <div className="skills-grid">
                        {skillCards.map((card) => (
                            <article
                                className={`skill-card ${card.featured ? 'skill-card--featured' : ''}`}
                                key={card.title}
                            >
                                <span
                                    className={`skill-card__icon skill-card__icon--${card.icon}`}
                                    aria-hidden="true"
                                />
                                <h3>{card.title}</h3>
                                <p>{card.description}</p>
                                <ul>
                                    {card.tags.map((tag) => (
                                        <li key={tag}>{tag}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="content-section" id="projects">
                    <div className="section-head section-head--line">
                        <h2>Recent Projects</h2>
                        <div className="section-head__line" />
                        <span>2026</span>
                    </div>

                    <div className="projects-grid">
                        {projectCards.map((project, index) => (
                            <article
                                className={`project-card ${index === 1 ? 'project-card--offset' : ''}`}
                                key={project.id}
                            >
                                <div className="project-card__visual">
                                    <div
                                        className={`project-visual project-visual--${project.visual}`}
                                    >
                                        <span />
                                        <span />
                                        <span />
                                        {project.visual === 'network' ? <span /> : null}
                                    </div>
                                </div>

                                <div className="project-card__content">
                                    <div className="project-card__tags">
                                        {project.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <div className="project-card__body">
                                        <p>{project.description}</p>
                                        <ul>
                                            {project.bullets.map((item) => (
                                                <li key={item}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Visit Project
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="content-section content-section--alt">
                    <div className="section-head section-head--centered">
                        <span className="section-kicker">Validated Expertise</span>
                        <h2>Cloud Certifications</h2>
                    </div>

                    <div className="certificates-grid" aria-label="AWS certificates">
                        {certifications.map((certificate) => (
                            <article className="certificate-card" key={certificate.id}>
                                <div className="certificate-card__top">
                                    <div className="certificate-mark" aria-hidden="true">
                                        <div className="certificate-mark__inner">
                                            <img
                                                src={certificate.badgeImage}
                                                alt=""
                                                onError={(event) => {
                                                    event.currentTarget.style.display = 'none';
                                                    const fallback =
                                                        event.currentTarget.nextElementSibling;
                                                    if (fallback) {
                                                        fallback.style.display = 'grid';
                                                    }
                                                }}
                                            />
                                            <span className="certificate-mark__fallback">
                                                {certificate.mark}
                                            </span>
                                        </div>
                                    </div>

                                    <span className="certificate-status">
                                        {certificate.status}
                                    </span>
                                </div>

                                <div className="certificate-card__body">
                                    <h3>{certificate.title}</h3>
                                    <p>{certificate.description}</p>

                                    <ul className="certificate-highlights">
                                        {certificate.highlights.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="certificate-card__footer">
                                    <div>
                                        <span className="certificate-label">
                                            Issued Date
                                        </span>
                                        <strong>{certificate.issuedDate}</strong>
                                    </div>

                                    <a
                                        href={certificate.certificateUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Verify Credential
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="certificates-expansion">
                        <div>
                            <h3>Expanding the Protocol</h3>
                            <p>
                                Currently pursuing AWS Certified Solutions
                                Architect - Associate, with continued focus on
                                cloud architecture and production-ready system
                                design.
                            </p>
                        </div>

                        <div className="certificates-expansion__blocks" aria-hidden="true">
                            <span />
                            <span />
                        </div>
                    </div>
                </section>

                <section className="content-section content-section--narrow" id="experience">
                    <h2 className="journey-title">Volunteer Experiences</h2>
                    <div className="journey-timeline">
                        {journeyItems.map((item) => (
                            <article className="journey-item" key={item.title}>
                                <span
                                    className={`journey-item__dot ${item.active ? 'is-active' : ''}`}
                                    aria-hidden="true"
                                />
                                <div>
                                    <span className="journey-item__period">
                                        {item.period}
                                    </span>
                                    <h3>{item.title}</h3>
                                    <strong>{item.role}</strong>
                                    <p>{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>

            <footer className="about-footer" id="contact">
                <div className="about-footer__inner">
                    <p>c 2026 Wei Wang | Master of IT Professional</p>
                    <div>
                        <a
                            href="https://www.linkedin.com/in/bob0927"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/Bob0927"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                        <a href="mailto:0927bob@gmail.com">Email</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}

export default About;

