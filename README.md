# 🌐 Saurya Janbandhu | 3D Systems Engineering Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-0.182-black?style=for-the-badge&logo=threedotjs" alt="Three.js" />
  <img src="https://img.shields.io/badge/R3F-9.4-purple?style=for-the-badge&logo=react" alt="React Three Fiber" />
  <img src="https://img.shields.io/badge/GSAP-3.14-green?style=for-the-badge&logo=greensock" alt="GSAP" />
  <img src="https://img.shields.io/badge/Vite-7.3-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
</div>

<br/>

Interactive 3D WebGL portfolio for **Saurya Janbandhu**, Senior System Engineer and Modern Workplace specialist based in New Zealand (Timaru / Dunedin). 

The portfolio presents enterprise infrastructure migrations, Microsoft Intune & Entra ID deployments, Fortinet cybersecurity hardening, and PowerShell automation through an infinite corridor and 4 themed interactive 3D rooms.

---

## 🏗️ 3D Experience Architecture

```mermaid
graph TD;
    A[App.jsx] --> B[SceneProvider Context];
    A --> C[Three.js Canvas];
    A --> D[2D Recruiter HUD & SEO Layer];
    
    C --> E[Experience.jsx];
    E --> F[RoomWarmup Pre-compiler];
    E --> G[Infinite Corridor Navigation];
    
    G --> H[🖼️ Gallery Room: 6 Enterprise Case Studies];
    G --> I[🖥️ Studio Room: Infrastructure & Tech Monitors];
    G --> J[📬 Contact Room: Interactive Inquiry Dock];
    G --> K[☁️ About Room: Career Milestones & Certifications];
```

---

## 📁 Data Layer Architecture

The site uses a zero-dependency, strongly-typed **Local Data Store** located in `src/data/`:
- **[`src/data/profile.js`](src/data/profile.js)**: Bio, career work history (Focus Technology Group, CodeBlue, DTSL), academic qualifications, and Microsoft & Fortinet certifications.
- **[`src/data/projects.js`](src/data/projects.js)**: 6 core enterprise engineering case studies (25-Tenant Intune Rollout, Entra ID Zero Trust, Exchange & SharePoint Migrations, Fortinet HA, Clustered Hyper-V/ESXi).
- **[`src/data/studioContent.js`](src/data/studioContent.js)**: Modern workplace guides and technical architecture articles.
- **[`src/data/awards.js`](src/data/awards.js)**: Microsoft MD-102, SC-500, Fortinet NSE 1, and academic credentials.

---

## 🛠️ Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production bundle:**
   ```bash
   npm run preview
   ```

---

## 📬 Contact Information

- **Name**: Saurya Janbandhu
- **Email**: [jsaurya101@gmail.com](mailto:jsaurya101@gmail.com)
- **Phone**: 028 8514 7790 (+64 28 8514 7790)
- **Location**: Timaru / Dunedin, New Zealand
- **Status**: Valid New Zealand Resident Visa (Full Work Authorization)
