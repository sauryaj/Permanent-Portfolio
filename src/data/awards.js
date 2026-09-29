/**
 * Certifications, Accreditations & Qualifications for Saurya Janbandhu
 * Presented in the About Room & Recruiter Overlays
 */

export const AWARDS_DATA = {
    sotd: {
        id: 'certifications-microsoft',
        layout: 'certificate_grid',
        title: 'Microsoft Professional Certifications',
        items: [
            {
                label: 'Microsoft 365 Certified: Endpoint Administrator Associate (MD-102)',
                date: 'Issued by Microsoft',
                image: '/textures/about/SOTD.webp',
                url: 'https://learn.microsoft.com/en-us/credentials/certifications/modern-desktop-administrator-associate/'
            },
            {
                label: 'Microsoft Certified: Security, Compliance, and Identity (SC-500)',
                date: 'Issued by Microsoft',
                image: '/textures/about/SOTD.webp',
                url: 'https://learn.microsoft.com/'
            },
            {
                label: 'MTA: Networking Fundamentals',
                date: 'Issued by Microsoft',
                image: '/textures/about/SOTD.webp',
                url: 'https://learn.microsoft.com/'
            }
        ],
        platformConfig: { label: 'MICROSOFT CERTIFIED', color: '#0078D4', icon: '🛡️' }
    },
    sotm: {
        id: 'certifications-industry',
        layout: 'certificate_grid',
        title: 'Network & Cloud Credentials',
        items: [
            {
                label: 'Fortinet Certified: Network Security Expert (NSE 1)',
                date: 'Issued by Fortinet',
                image: '/textures/about/SOTM.webp',
                url: 'https://www.fortinet.com/'
            },
            {
                label: 'Google Cloud OnBoard: Cloud Architecture',
                date: 'Issued by Google Cloud',
                image: '/textures/about/SOTM.webp',
                url: 'https://cloud.google.com/'
            }
        ],
        platformConfig: { label: 'NETWORK & CLOUD', color: '#EE3124', icon: '🌐' }
    },
    other: {
        id: 'academic-degrees',
        layout: 'certificate_grid',
        title: 'Academic Degrees & Higher Education',
        items: [
            {
                label: 'Post Graduate Diploma in Information Technology (Level 8)',
                date: 'Southern Institute of Technology (New Zealand) • 2019-2020',
                image: '/textures/about/SOTY.webp',
                url: 'https://www.sit.ac.nz/'
            },
            {
                label: 'Bachelor of Computer Applications (BCA)',
                date: 'Ness Wadia College of Commerce (India) • 2014-2018',
                image: '/textures/about/SOTY.webp',
                url: null
            }
        ],
        platformConfig: { label: 'EDUCATION', color: '#107C41', icon: '🎓' }
    }
};
