import React from 'react';

const certificateAsset = (fileName) =>
    `${import.meta.env.BASE_URL}certificates/${fileName}`;

const certifications = [
    {
        id: 'solutions-architect-associate',
        status: 'Active',
        title: 'AWS Certified Solutions Architect - Associate',
        description:
            'Validates the ability to design secure, resilient, high-performing, and cost-optimized architectures on AWS using the AWS Well-Architected Framework.',
        certificateUrl: certificateAsset(
            'AWS%20Certified%20Solutions%20Architect%20-%20Associate.pdf',
        ),
        issuedDate: 'July 2026',
        highlights: [
            'Resilient & High-Performing Architectures',
            'Secure & Cost-Optimized AWS Solutions',
        ],
        mark: 'SAA',
        badgeImage: certificateAsset(
            'aws-certified-solutions-architect-associate.png',
        ),
    },
    {
        id: 'cloud-practitioner',
        status: 'Active',
        title: 'AWS Certified Cloud Practitioner',
        description:
            'Comprehensive validation of AWS Cloud fluency, covering core services, security, architecture, pricing, and support models. Verified foundational knowledge for multi-tenant cloud ecosystems.',
        certificateUrl: certificateAsset(
            'aws-certified-cloud-practitioner-certificate.pdf',
        ),
        issuedDate: 'January 2026',
        highlights: [
            'Cloud Value Proposition & Economics',
            'Shared Responsibility Model Mastery',
        ],
        mark: 'AWS',
        badgeImage: certificateAsset(
            'aws-certified-cloud-practitioner.png',
        ),
    },
    {
        id: 'ai-practitioner',
        status: 'Active',
        title: 'AWS Certified AI Practitioner',
        description:
            'Specialized validation in Machine Learning concepts and Generative AI on AWS. Focuses on selecting the right foundation models, prompt engineering, and implementing responsible AI.',
        certificateUrl: certificateAsset(
            'aws-certified-ai-practitioner-certificate.pdf',
        ),
        issuedDate: 'March 2026',
        highlights: [
            'Generative AI & Bedrock Implementation',
            'SageMaker Lifecycle & ML Governance',
        ],
        mark: 'AI',
        badgeImage: certificateAsset('aws-certified-ai-practitioner.png'),
    },
];

function Certificates() {
    return (
        <section className="content-section content-section--alt" id="certificates">
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
                        Continuing to deepen expertise in cloud
                        architecture and production-ready system design,
                        with a focus on secure, resilient, and
                        cost-optimized AWS solutions.
                    </p>
                </div>

                <div className="certificates-expansion__blocks" aria-hidden="true">
                    <span />
                    <span />
                </div>
            </div>
        </section>
    );
}

export default Certificates;
