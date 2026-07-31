import React from 'react';

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
        id: 'creana-social-media-management-platform',
        tags: ['Django', 'Python', 'JavaScript', 'PostgreSQL', 'Responsive UI', 'Analytics'],
        title: 'Creana Social Media Management Platform',
        description:
            'A full-stack Django project designed for social media content management, campaign planning, post scheduling, engagement tracking, and performance analysis through a responsive web interface.',
        bullets: [
            'Multi-format post creation with article, image, carousel, and video support',
            'Campaign planning workflow with drafts, scheduled publishing, and visibility controls',
            'Engagement system including likes, shares, comments, replies, and notifications',
            'Analytics dashboard for post performance, campaign insights, views, and engagement trends',
            'User authentication, workspace-based access control, and role-based permissions',
            'Responsive interface designed for desktop, tablet, and mobile usage',
        ],
        link: 'https://bob0927.github.io/Deco/',
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
    {
        id: 'creatormind',
        tags: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'YouTube API', 'Vercel', 'Python'],
        title: 'CreatorMind',
        description:
            'An AI-powered content analysis platform designed for content creators, enabling YouTube video analysis and performance insight extraction to optimize engagement and growth strategies.',
        bullets: [
            'Integrated YouTube Data API to fetch real-time video statistics including views, likes, and engagement metrics',
            'Built full-stack architecture using Next.js for the frontend and FastAPI for the backend',
            'Implemented dynamic analysis pages with real-time data rendering and API handling',
            'Designed a user-friendly dashboard for content performance insights and recommendations',
            'Deployed the frontend on Vercel with optimized build configuration and routing',
            'Focused on creator-oriented analytics to support content strategy decisions',
        ],
        link: 'https://creator-mind-xi.vercel.app/',
        visual: 'network',
    },
];

function Projects() {
    return (
        <section className="content-section" id="projects">
            <div className="section-head section-head--line">
                <h2>Projects</h2>
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
    );
}

export default Projects;
