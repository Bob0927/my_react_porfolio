import React from 'react';

const journeyItems = [
    {
        period: 'June 2026',
        title: 'Brisbane Marathon Festival',
        role: 'Information Center Volunteer',
        description:
            'Supported event participants and visitors at the information center by answering questions, providing directions, and assisting with event-day communication during a large-scale community marathon event.',
        active: true,
    },
    {
        period: 'August 2025',
        title: 'Bridge to Brisbane Marathon',
        role: 'Event Volunteer',
        description:
            'Assisted with large-scale event coordination and participant management for a high-volume community event.',
        active: false,
    },
    {
        period: 'June 2025',
        title: 'St Lucia Bushcare',
        role: 'Volunteer',
        description:
            'Supported sustainability and community outreach initiatives through local environmental restoration work.',
        active: false,
    },
];

function Volunteer() {
    return (
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
    );
}

export default Volunteer;
