/**
 * Enterprise Engineering Projects for Saurya Janbandhu
 * Exhibited in the 3D Gallery Room & 2D Recruiter Overlay
 */

export const PROJECTS_DATA = [
    {
        id: 'intune-rollout',
        title: 'INTUNE AUTOPILOT',
        subtitle: 'Modern Workplace & Zero-Touch Autopilot',
        category: 'Modern Workplace',
        front: '/textures/gallery/monetuneprzod.webp',
        painted: '/textures/gallery/monetuneprzod_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Inquiry%20Regarding%20Intune%20Deployment',
        description: 'Led the deployment of a 25-tenant Microsoft Intune standardization project for MSP clientele. Configured Autopilot White Glove profiles, packaged and deployed complex Win32 line-of-business applications, and enforced rigorous Conditional Access and device restriction baselines across hybrid environments.',
        highlights: [
            'Standardized 25 client tenants with unified MSP naming conventions',
            'Implemented White Glove Autopilot profiles for zero-touch hardware provisioning',
            'Created compliance and device restriction policies adhering to modern security standards'
        ],
        techStack: [
            '/textures/gallery/intunelogo.webp',
            '/textures/gallery/powershelllogo.webp',
            '/textures/gallery/azurelogo.webp',
            '/textures/gallery/m365logo.webp'
        ],
        tags: ['Microsoft Intune', 'Autopilot', 'Conditional Access', 'Win32 Apps', 'PowerShell']
    },
    {
        id: 'entra-zero-trust',
        title: 'ZERO TRUST ENTRA',
        subtitle: 'SAML 2.0 SSO, Global Secure Access & MFA',
        category: 'Identity & Security',
        front: '/textures/gallery/timberkittyprzod.webp',
        painted: '/textures/gallery/timberkittyprzod_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Inquiry%20Regarding%20Entra%20ID%20Architecture',
        description: 'Architected enterprise identity and zero trust access control using Microsoft Entra ID. Integrated Fortinet firewalls for SAML 2.0 Single Sign-On, deployed Global Secure Access (GSA), established B2B guest federation workflows, and rolled out phishing-resistant authentication methods.',
        highlights: [
            'Configured Fortinet Enterprise Application for seamless SAML Single Sign-On',
            'Implemented Global Secure Access (GSA) and automated enterprise application approval pipelines',
            'Enforced modern phishing-resistant authentication and strict B2B boundary controls'
        ],
        techStack: [
            '/textures/gallery/entralogo.webp',
            '/textures/gallery/securitylogo.webp',
            '/textures/gallery/fortinetlogo.webp',
            '/textures/gallery/azurelogo.webp'
        ],
        tags: ['Entra ID', 'Fortinet SAML', 'Global Secure Access', 'B2B Federation', 'Zero Trust']
    },
    {
        id: 'exchange-cloud-migration',
        title: 'EXCHANGE CLOUD',
        subtitle: 'Hybrid Decommission & Multi-Tenant Consolidation',
        category: 'Cloud Migration',
        front: '/textures/gallery/youngmultiprzod.webp',
        painted: '/textures/gallery/youngmultiprzod_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Inquiry%20Regarding%20Exchange%20Migration',
        description: 'Successfully orchestrated the migration of large enterprises from aging on-premises Exchange servers directly to Exchange Online. Consolidated multi-tenant environments into a single tenant and strengthened email security with DMARC, DKIM, and SPF enforcement.',
        highlights: [
            'Zero-downtime migration of enterprise mailboxes from on-prem Exchange to Exchange Online',
            'Consolidated 2 disparate Exchange Online tenants into a unified organization',
            'Configured advanced email protection, mail flow rules, and modern anti-spoofing protocols'
        ],
        techStack: [
            '/textures/gallery/m365logo.webp',
            '/textures/gallery/powershelllogo.webp',
            '/textures/gallery/securitylogo.webp',
            '/textures/gallery/azurelogo.webp'
        ],
        tags: ['Exchange Online', 'M365', 'Tenant Consolidation', 'DMARC/DKIM', 'PowerShell']
    },
    {
        id: 'sharepoint-copilot-governance',
        title: 'SHAREPOINT COPILOT',
        subtitle: 'Cloud File Migration & Purview Sensitivity Labels',
        category: 'Data Governance',
        front: '/textures/gallery/bioprzod.webp',
        painted: '/textures/gallery/bioprzod_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Inquiry%20Regarding%20SharePoint%20Governance',
        description: 'Automated file server and Dropbox migrations to SharePoint Online and Microsoft Teams using PowerShell PnP and the SharePoint Migration Tool. Implemented Microsoft Purview sensitivity labels for robust data governance in preparation for Microsoft Copilot adoption.',
        highlights: [
            'Migrated multi-terabyte on-prem file repositories and Dropbox to modern SharePoint sites',
            'Automated folder architecture generation and metadata tagging via PowerShell PnP',
            'Enforced Purview sensitivity labels to protect sensitive IP ahead of Copilot indexing'
        ],
        techStack: [
            '/textures/gallery/m365logo.webp',
            '/textures/gallery/powershelllogo.webp',
            '/textures/gallery/securitylogo.webp',
            '/textures/gallery/azurelogo.webp'
        ],
        tags: ['SharePoint Online', 'Microsoft Copilot', 'Purview', 'PowerShell PnP', 'Data Governance']
    },
    {
        id: 'cybersecurity-certnz',
        title: 'FORTINET HARDENING',
        subtitle: 'Fortinet HA, CIS Benchmarks & VLAN Segmentation',
        category: 'Cybersecurity & Networking',
        front: '/textures/gallery/fortinetprzod.webp',
        painted: '/textures/gallery/fortinetprzod_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Inquiry%20Regarding%20Network%20Security',
        description: 'Conducted comprehensive cybersecurity risk audits and implemented CIS benchmarks across Fortinet firewalls. Segmented enterprise network devices in compliance with CERT NZ recommendations, set up High Availability (HA) clusters, and created redundant site-to-site IPsec tunnels.',
        highlights: [
            'Hardened client Fortinet firewalls to CIS benchmarks with standardized policy symmetry',
            'Executed network segmentation according to CERT NZ cyber security guidelines',
            'Migrated legacy networking gear to centrally managed UniFi and Meraki appliances'
        ],
        techStack: [
            '/textures/gallery/fortinetlogo.webp',
            '/textures/gallery/securitylogo.webp',
            '/textures/gallery/powershelllogo.webp',
            '/textures/gallery/azurelogo.webp'
        ],
        tags: ['Fortinet HA', 'CERT NZ', 'CIS Benchmarks', 'UniFi / Meraki', 'IPsec VPN']
    },
    {
        id: 'ha-virtualization-clustering',
        title: 'HYPER-V CLUSTERS',
        subtitle: 'Hyper-V & ESXi High Availability Infrastructure',
        category: 'Infrastructure',
        front: '/textures/gallery/hypervprzod.webp',
        painted: '/textures/gallery/hypervprzod_painted.webp',
        url: 'mailto:jsaurya101@gmail.com?subject=Inquiry%20Regarding%20Virtualization%20Infrastructure',
        description: 'Engineered and maintained clustered High Availability (HA) Hyper-V and VMware ESXi virtualization environments. Supported 24/7 mission-critical operations with redundant clustered Remote Desktop Services (RDS), SQL Server clusters, application servers, and resilient file storage.',
        highlights: [
            'Built clustered Hyper-V failover environments for 24/7 high-uptime requirements',
            'Deployed clustered RDS farms featuring dedicated SQL, application, and file server roles',
            'Decommissioned legacy physical servers with minimal business interruption'
        ],
        techStack: [
            '/textures/gallery/hypervlogo.webp',
            '/textures/gallery/powershelllogo.webp',
            '/textures/gallery/azurelogo.webp',
            '/textures/gallery/securitylogo.webp'
        ],
        tags: ['Hyper-V Clustering', 'VMware ESXi', 'Clustered RDS', 'SQL Server', 'Windows Server']
    }
];
