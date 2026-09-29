/**
 * Studio Content Data for Saurya Janbandhu
 * 
 * This file contains enterprise engineering case studies and architecture guides
 * exhibited on the floating monitors in the Studio Room.
 */

export const PLATFORM_CONFIG = {
    blog: {
        color: '#0078D4',
        accentColor: '#005A9E',
        icon: '📄',
        label: 'Whitepaper',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'Architecture',
        shape: 'tv',
    },
    phonefront: {
        color: '#107C41',
        accentColor: '#0B5A2F',
        icon: '🛡️',
        label: 'Security Advisory',
        shape: 'phone',
    },
    cloud: {
        color: '#D83B01',
        accentColor: '#A82A00',
        icon: '☁️',
        label: 'Cloud Deployment',
        shape: 'tv',
    }
};

const RAW_CONTENT_DATA = [
    {
        id: 'studio-001',
        platform: 'blog',
        title: 'Zero-Touch Windows 11 Onboarding with Intune & Autopilot',
        description: 'Complete architecture guide for deploying White Glove Windows Autopilot provisioning profiles in hybrid Azure AD / Entra ID environments.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Intune%20Autopilot%20Architecture',
        date: '2026-02-15',
        views: '4.8K',
        duration: '8 min read',
    },
    {
        id: 'studio-002',
        platform: 'linkedin',
        title: 'Fortinet Next-Gen Firewalls with Entra ID SAML 2.0 SSO',
        description: 'Hardening perimeter security and eliminating legacy credential vulnerabilities by federating Fortinet administrative and SSL-VPN logins directly into Entra ID with Conditional Access.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Fortinet%20SAML%20Federation',
        date: '2025-11-20',
        views: '3.6K',
        duration: '6 min read',
    },
    {
        id: 'studio-003',
        platform: 'phonefront',
        title: 'CERT NZ Cybersecurity Hardening Checklist for MSPs',
        description: 'Actionable steps for network segmentation, conditional access baselines, and MFA enforcement to protect mid-market organizations against modern ransomware vectors.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=CERT%20NZ%20Hardening',
        date: '2025-09-12',
        views: '5.2K',
        duration: '5 min read',
    },
    {
        id: 'studio-004',
        platform: 'cloud',
        title: 'High Availability Clustered Hyper-V for Mission-Critical RDS',
        description: 'Configuring resilient failover clustering with shared iSCSI/FC storage to achieve 99.99% uptime for multi-host Remote Desktop Services and SQL Server workloads.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Clustered%20Hyper-V%20Design',
        date: '2025-06-18',
        views: '4.1K',
        duration: '10 min read',
    },
    {
        id: 'studio-005',
        platform: 'blog',
        title: 'Automating Multi-Tenant SharePoint Migrations with PowerShell PnP',
        description: 'Best practices for batching multi-terabyte file share migrations into structured SharePoint libraries while preserving file integrity and metadata.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=SharePoint%20PowerShell%20Automation',
        date: '2025-03-10',
        views: '2.9K',
        duration: '7 min read',
    },
    {
        id: 'studio-006',
        platform: 'linkedin',
        title: 'Zero Trust Network Architecture: Microsoft Entra Private Access',
        description: 'Replacing legacy point-to-site VPN tunnels with identity-driven Global Secure Access and granular Least Privilege conditional access policies.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Zero%20Trust%20Entra%20Access',
        date: '2025-01-22',
        views: '3.7K',
        duration: '6 min read',
    }
];

export const CONTENT_DATA = RAW_CONTENT_DATA;

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
