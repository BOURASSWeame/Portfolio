const experiencesData = [

    {
        type: 'education',
        title: 'Cycle d’Ingénieur – Génie Informatique (GI)',
        organization: 'École Nationale de l’Intelligence Artificielle et du Digital (ENIAD)',
        location: 'Berkane',
        period: '2024 – Présent',
        icon: 'graduation-cap',
        details: [
            { text: '2ᵉ année du cycle ingénieur', icon: 'book-open' }
        ]
    },
    {
        type: 'education',
        title: 'Diplôme Universitaire de Technologie (DUT) – Génie Informatique',
        organization: 'École Supérieure de Technologie',
        location: 'Salé',
        period: '2022 – 2024',
        icon: 'graduation-cap',
        details: [
            { text: 'Cycle DUT - Spécialisation Génie Informatique', icon: 'book' }
        ]
    },
    {
        type: 'education',
        title: 'Baccalauréat en Sciences Physiques',
        organization: 'Lycée Moulay Ismail',
        location: 'Casablanca',
        period: '2021 – 2022',
        icon: 'graduation-cap',
        details: [
            { text: 'Baccalauréat Sciences Physiques - Mention Bien', icon: 'award' }
        ]
    },

        {
        type: 'work',
        title: 'Stage Technique – Division Transformation Digitale (DSI)',
        organization: 'Al Barid Bank',
        location: 'Rabat',
        period: 'Mai – Juillet 2024',
        icon: 'briefcase',
        details: [
            { text: 'Conception et intégration de modules de gestion des virements pour l’application client', icon: 'code' },
            { text: 'Participation à la migration de Keycloak vers une version récente', icon: 'shield-check' },
            { text: 'Développement du front-end d’une solution de télétravail (Tailwind UI, Strapi, Astro)', icon: 'laptop' }
        ]
    },
    
    {
        type: 'work',
        title: 'Stage d’Initiation',
        organization: 'Redal',
        location: 'Rabat',
        period: 'Mai – Juin 2023',
        icon: 'briefcase',
        details: [
            { text: 'Développement d’une application web full-stack', icon: 'code' },
            { text: 'Support technique et administration réseau', icon: 'network' },
            { text: 'Maintenance des systèmes informatiques', icon: 'server' }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const timelineContainer = document.getElementById('experience-timeline');
    if (!timelineContainer) return;

    let html = '<div class="timeline-line"></div>';

    experiencesData.forEach((item, index) => {
        // En alternance sur PC (gauche/droite)
        const isLeft = index % 2 === 0;
        
        const detailsList = item.details.length > 0 
            ? `<ul class="timeline-details mt-2">
                ${item.details.map(detail => `
                    <li class="d-flex align-items-start mb-2">
                        <i data-lucide="${detail.icon}" class="detail-icon mr-2 mt-1"></i>
                        <span>${detail.text}</span>
                    </li>
                `).join('')}
               </ul>`
            : '';

        const typeClass = item.type === 'work' ? 'timeline-item-work' : 'timeline-item-edu';
        const badgeColorClass = item.type === 'work' ? 'badge-cyan-glow' : 'badge-purple-glow';
        
        // Configuration des badges et icônes
        const typeBadge = item.type === 'work' 
            ? `<span class="badge ${badgeColorClass} mb-2 d-inline-flex align-items-center"><i data-lucide="briefcase" class="mr-1" style="width:14px;height:14px;"></i> Stage Technique</span>` 
            : `<span class="badge ${badgeColorClass} mb-2 d-inline-flex align-items-center"><i data-lucide="graduation-cap" class="mr-1" style="width:14px;height:14px;"></i> Formation</span>`;

        html += `
            <div class="timeline-row ${isLeft ? 'timeline-row-left' : 'timeline-row-right'} ${typeClass}">
                <div class="timeline-dot"><i data-lucide="${item.icon}"></i></div>
                <div class="timeline-content card-glow">
                    ${typeBadge}
                    <h5 class="text-white timeline-title mt-1">${item.title}</h5>
                    <div class="timeline-meta my-2">
                        <span class="meta-org text-gradient-glow d-inline-flex align-items-center"><i data-lucide="home" class="mr-1" style="width:14px;height:14px;"></i> ${item.organization}</span>
                        <span class="meta-loc text-muted ml-md-3 d-inline-flex align-items-center"><i data-lucide="map-pin" class="mr-1" style="width:14px;height:14px;"></i> ${item.location}</span>
                        <span class="meta-date text-muted ml-md-3 d-inline-flex align-items-center"><i data-lucide="calendar" class="mr-1" style="width:14px;height:14px;"></i> ${item.period}</span>
                    </div>
                    ${detailsList}
                </div>
            </div>
        `;
    });

    timelineContainer.innerHTML = html;
    
    // Initialise les icônes Lucide après injection HTML
    if (window.lucide) {
        window.lucide.createIcons();
    }
});
