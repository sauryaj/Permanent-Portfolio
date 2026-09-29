/**
 * Profile & Bio Configuration for Saurya Janbandhu
 */
export const PROFILE_DATA = {
    name: 'Saurya Janbandhu',
    shortName: 'Saurya',
    title: 'Senior System Engineer | Modern Workplace Engineer',
    headline: 'Modern Workplace & Cloud Infrastructure Engineer',
    location: 'Timaru / Dunedin, New Zealand',
    email: 'jsaurya101@gmail.com',
    phone: '028 8514 7790',
    phoneIntl: '+64 28 8514 7790',
    visaStatus: 'Valid New Zealand Resident Visa (Full Work Authorization)',
    objective: "Enthusiastic and results-driven Modern Workplace & Senior System Engineer with deep expertise in Microsoft Intune, Entra ID, enterprise cloud migrations, high-availability virtualization, and cybersecurity hardening. Proven record in architecting secure, automated cloud environments for multi-tenant MSP clientele.",
    socials: {
        github: 'https://github.com/sauryaj',
        linkedin: 'https://www.linkedin.com',
        email: 'mailto:jsaurya101@gmail.com',
        phone: 'tel:+642885147790',
        resume: '/Saurya_Janbandhu_CV.pdf',
    },
    workHistory: [
        {
            company: 'Focus Technology Group',
            location: 'Timaru, New Zealand',
            period: 'January 2025 - Present',
            role: 'Senior System Engineer',
            highlights: [
                'Deployed 25-tenant Microsoft Intune environment standardization project across clientele.',
                'Led decommissioning of aging on-premises servers and migration to cloud environments complying with MSP standard naming conventions.',
                'Implemented High Availability (HA) failover clusters on Fortinet and UniFi infrastructure.',
                'Managed clustered HA RDS server farms, including SQL Server, application servers, and file servers.',
                'Built AI-assisted tooling and PowerShell workflows to streamline MSP standards for the Intune engineering team.',
                'Standardized Conditional Access and Intune device restriction policies across the company.',
                'Conducted cybersecurity risk audits and implemented CIS benchmarks across Fortinet firewall policies with IPsec VPN connectivity.',
                'Executed cloud migrations from Dropbox to SharePoint and Google Workspace to Exchange Online.'
            ]
        },
        {
            company: 'CodeBlue Ltd.',
            location: 'Dunedin, New Zealand',
            period: 'April 2021 - January 2025',
            role: 'Trusted Advisor / System Engineer',
            highlights: [
                'Administered core Microsoft server ecosystems: Active Directory Services, Exchange, and SQL Server.',
                'Engineered endpoint deployment pipelines via PowerShell, MDT, and Microsoft Intune for Modern Workplace.',
                'Implemented VLAN segmentation and remediation according to CERT NZ cyber security recommendations.',
                'Managed enterprise firewalls, client network switching, routing, VOIP, and camera servers.',
                'Delivered client-facing trusted advisory, vendor liaising, and comprehensive site documentation.'
            ]
        },
        {
            company: 'DTSL',
            location: 'Dunedin, New Zealand',
            period: 'April 2020 - April 2021',
            role: 'IT Support Engineer',
            highlights: [
                'Provided client-side technical break-fix support, software troubleshooting, and hardware reimaging for tier-1 partner vendors (HP, Dell, Lenovo IBM).',
                'Managed incident and service request lifecycles via ticketing systems with strict adherence to change management SLA policies.'
            ]
        },
        {
            company: 'Smart I.T. Solutions',
            location: 'New Zealand',
            period: 'August 2019 - March 2020',
            role: 'IT Support Engineer',
            highlights: [
                'Supported hardware installations, desktop configuration, network switches, and peripheral usability standards.'
            ]
        }
    ],
    qualifications: [
        {
            institution: 'Southern Institute of Technology',
            location: 'Invercargill, New Zealand',
            period: '2019 - 2020',
            degree: 'Post Graduate Diploma in Information Technology (Level 8)'
        },
        {
            institution: 'Ness Wadia College of Commerce',
            location: 'Pune, India',
            period: '2014 - 2018',
            degree: 'Bachelor of Computer Applications (BCA)'
        }
    ],
    certifications: [
        {
            name: 'Microsoft 365 Certified: Endpoint Administrator Associate',
            code: 'MD-102',
            issuer: 'Microsoft',
            category: 'Modern Workplace'
        },
        {
            name: 'Microsoft Certified: Security, Compliance, and Identity',
            code: 'SC-500',
            issuer: 'Microsoft',
            category: 'Cybersecurity'
        },
        {
            name: 'Fortinet Network Security Expert',
            code: 'NSE 1',
            issuer: 'Fortinet',
            category: 'Network Security'
        },
        {
            name: 'Google Cloud OnBoard',
            code: 'GCP',
            issuer: 'Google Cloud',
            category: 'Cloud Computing'
        },
        {
            name: 'MTA: Networking Fundamentals',
            code: 'MTA',
            issuer: 'Microsoft',
            category: 'Networking'
        }
    ],
    technicalSkills: {
        'Modern Workplace & Cloud': ['Microsoft Intune', 'Autopilot White Glove', 'Entra ID (Azure AD)', 'Conditional Access', 'M365 Copilot Governance', 'Exchange Online', 'SharePoint Online'],
        'Cybersecurity & Network': ['Fortinet HA', 'CIS Benchmark Hardening', 'UniFi / Meraki', 'IPsec & SSL-VPN', 'VLAN Segmentation', 'CERT NZ Guidelines', 'SAML SSO'],
        'Virtualization & Systems': ['Hyper-V Clustering', 'VMware ESXi', 'Clustered RDS & SQL', 'Windows Server 2022/2019', 'Docker', 'Active Directory & GPO'],
        'Automation & Operations': ['PowerShell Scripting', 'PowerShell PnP', 'ConnectWise Manage', 'Halo PSA', 'ServiceNow', 'AI-assisted MSP Automation']
    }
};
