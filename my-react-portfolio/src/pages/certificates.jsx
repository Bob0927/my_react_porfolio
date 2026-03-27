import './certificates.css';

const certificates = [
    {
        id: 'cloud-practitioner',
        status: 'Active',
        title: 'AWS Certified Cloud Practitioner',
        description:
            'Comprehensive validation of AWS Cloud fluency, covering core services, security, architecture, pricing, and support models. Verified foundational knowledge for multi-tenant cloud ecosystems.',
        certificateUrl:
            '/certificates/aws-certified-cloud-practitioner-certificate.pdf',
        issuedDate: 'January 2024',
        highlights: [
            'Cloud Value Proposition & Economics',
            'Shared Responsibility Model Mastery',
        ],
        tile: 'gold',
        mark: 'aws',
    },
    {
        id: 'ai-practitioner',
        status: 'Active',
        title: 'AWS Certified AI Practitioner',
        description:
            'Specialized validation in Machine Learning concepts and Generative AI on AWS. Focuses on selecting the right foundation models, prompt engineering, and implementing responsible AI.',
        certificateUrl:
            '/certificates/aws-certified-ai-practitioner-certificate.pdf',
        issuedDate: 'March 2024',
        highlights: [
            'Generative AI & Bedrock Implementation',
            'SageMaker Lifecycle & ML Governance',
        ],
        tile: 'teal',
        mark: 'AI',
    },
];

function Certificates() {
    return (
        <main className="certificates-page">
            <section className="certificates-hero">
                <div className="certificates-hero__copy">
                    <p className="certificates-kicker">Verification Portal</p>
                    <h1>
                        Architectural
                        <span> Core Validation.</span>
                    </h1>
                </div>
                <span className="certificates-accent" aria-hidden="true" />
            </section>

            <section className="certificates-grid" aria-label="AWS certificates">
                {certificates.map((certificate) => (
                    <article className="certificate-card" key={certificate.id}>
                        <div className="certificate-card__top">
                            <div
                                className={`certificate-tile certificate-tile--${certificate.tile}`}
                                aria-hidden="true"
                            >
                                <div className="certificate-tile__inner">
                                    <span>{certificate.mark}</span>
                                </div>
                            </div>

                            <span className="certificate-status">
                                {certificate.status}
                            </span>
                        </div>

                        <div className="certificate-card__body">
                            <h2>{certificate.title}</h2>
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
                                <span aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </article>
                ))}
            </section>

            <section className="certificates-expansion">
                <div>
                    <h2>Expanding the Protocol</h2>
                    <p>
                        Currently pursuing AWS Certified Solutions Architect -
                        Associate. Deployment scheduled for Q3 2026.
                    </p>
                </div>

                <div className="certificates-expansion__blocks" aria-hidden="true">
                    <span />
                    <span />
                </div>
            </section>

            <footer className="certificates-footer">
                <p>© 2024 Wei Wang. Architectural Core Systems.</p>
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
                    <a className="is-active" href="#top">
                        Verification Portal
                    </a>
                    <a href="#top">Privacy</a>
                </div>
            </footer>
        </main>
    );
}

export default Certificates;
