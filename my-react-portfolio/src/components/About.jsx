import React from 'react';
import '../pages/about.css';

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

function About() {
    return (
        <>
            <section className="hero-panel" id="about">
                <div className="hero-copy">
                    <span className="hero-kicker">
                        Master of IT - Cloud Architect
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
                        <a className="hero-actions__secondary" href="#certificates">
                            View Certificates
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-photo-card" aria-label="Profile photo">
                        <img
                            src={`${import.meta.env.BASE_URL}profile.jpeg`}
                            alt="Wei Wang profile photo"
                        />
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

        </>
    );
}

export default About;
