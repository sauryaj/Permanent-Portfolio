import { PROFILE_DATA } from './src/data/profile.js';
import { PROJECTS_DATA } from './src/data/projects.js';
import { STUDIO_DATA } from './src/data/studioContent.js';
import { AWARDS_DATA } from './src/data/awards.js';

function buildJsonLd() {
    const graph = [];

    // --- 1. Person: Central node of the Knowledge Graph ---
    const person = {
        '@type': 'Person',
        '@id': '#person',
        name: PROFILE_DATA.name,
        jobTitle: PROFILE_DATA.title,
        description: PROFILE_DATA.objective,
        email: PROFILE_DATA.email,
        telephone: PROFILE_DATA.phoneIntl,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'New Zealand',
            addressLocality: 'Timaru / Dunedin'
        },
        knowsAbout: [
            'Microsoft Intune',
            'Microsoft Entra ID',
            'Exchange Online',
            'SharePoint Online',
            'Cybersecurity Hardening',
            'Fortinet Firewalls',
            'Hyper-V Clustering',
            'PowerShell Automation',
            'CERT NZ Security Guidelines'
        ],
        alumniOf: PROFILE_DATA.qualifications.map(q => ({
            '@type': 'EducationalOrganization',
            name: q.institution
        })),
        worksFor: {
            '@type': 'Organization',
            name: 'Focus Technology Group'
        }
    };
    graph.push(person);

    // --- 2. WebSite ---
    const website = {
        '@type': 'WebSite',
        '@id': '#website',
        name: `${PROFILE_DATA.name} | Modern Workplace & Systems Engineering Portfolio`,
        description: PROFILE_DATA.objective,
        publisher: { '@id': '#person' }
    };
    graph.push(website);

    // --- 3. ProfilePage ---
    const profilePage = {
        '@type': 'ProfilePage',
        '@id': '#profilepage',
        mainEntity: { '@id': '#person' },
        about: { '@id': '#person' }
    };
    graph.push(profilePage);

    // --- 4. ItemList: Portfolio Projects ---
    graph.push({
        '@type': 'ItemList',
        '@id': '#projectslist',
        name: `Engineering Projects by ${PROFILE_DATA.name}`,
        description: 'Enterprise Microsoft Intune, Cloud Migration, and Infrastructure projects.',
        numberOfItems: PROJECTS_DATA.length,
        itemListElement: PROJECTS_DATA.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'CreativeWork',
                name: p.title,
                description: p.description,
                creator: { '@id': '#person' },
                keywords: p.tags ? p.tags.join(', ') : ''
            }
        }))
    });

    return {
        '@context': 'https://schema.org',
        '@graph': graph
    };
}

function getLlmsContent() {
    let md = `# ${PROFILE_DATA.name} - Professional Systems Engineer Portfolio\n\n`;
    md += `> ${PROFILE_DATA.headline} based in ${PROFILE_DATA.location}.\n\n`;
    md += `## Contact & Legal Status\n`;
    md += `- Email: ${PROFILE_DATA.email}\n`;
    md += `- Phone: ${PROFILE_DATA.phone}\n`;
    md += `- Legal Status: ${PROFILE_DATA.visaStatus}\n\n`;
    md += `## Professional Summary\n`;
    md += `${PROFILE_DATA.objective}\n\n`;

    md += `## Work Experience\n`;
    PROFILE_DATA.workHistory.forEach(job => {
        md += `### ${job.role} — ${job.company} (${job.period})\n`;
        md += `*Location: ${job.location}*\n`;
        job.highlights.forEach(h => {
            md += `- ${h}\n`;
        });
        md += `\n`;
    });

    md += `## Certifications\n`;
    PROFILE_DATA.certifications.forEach(cert => {
        md += `- **${cert.name}** (${cert.code}) - ${cert.issuer}\n`;
    });
    md += `\n`;

    md += `## Featured Enterprise Projects\n`;
    PROJECTS_DATA.forEach(proj => {
        md += `### ${proj.title}\n`;
        md += `**Category:** ${proj.category} | **Focus:** ${proj.subtitle}\n`;
        md += `${proj.description}\n`;
        if (proj.highlights) {
            proj.highlights.forEach(h => {
                md += `- ${h}\n`;
            });
        }
        md += `\n`;
    });

    return md;
}

export function generateSeoHtml() {
    return {
        name: 'generate-seo-html',
        transformIndexHtml(html) {
            try {
                const siteTitle = `${PROFILE_DATA.name} | Modern Workplace & Systems Engineer`;
                const siteDescription = `Interactive 3D portfolio of ${PROFILE_DATA.name}. Specializing in Microsoft Intune, Entra ID, enterprise cloud migrations, and Fortinet cybersecurity.`;

                const jsonLdSchemas = buildJsonLd();
                const jsonLdScript = `\n  <script type="application/ld+json">\n${JSON.stringify(jsonLdSchemas, null, 2)}\n  </script>\n`;

                let transformedHtml = html.replace(
                    /<title>(.*?)<\/title>/,
                    `<title>${siteTitle}</title>`
                );

                if (transformedHtml.includes('<meta name="description"')) {
                    transformedHtml = transformedHtml.replace(
                        /<meta name="description" content="(.*?)"\s*\/?>/,
                        `<meta name="description" content="${siteDescription}" />`
                    );
                }

                transformedHtml = transformedHtml.replace('</head>', `${jsonLdScript}</head>`);
                return transformedHtml;
            } catch (error) {
                console.error('SEO Plugin Error:', error);
                return html;
            }
        },

        async generateBundle() {
            const content = getLlmsContent();
            this.emitFile({
                type: 'asset',
                fileName: 'llms.txt',
                source: content
            });
        }
    };
}
