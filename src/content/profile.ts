// Single source of site content. Mirrors Titli's career profile.yaml
// (headline, summary, experience, case studies, skills). Edit here, not in components.
// Rules: no client names, no client code, no salary, no phone. Never invent numbers.

export type Metric = { value: string; label: string };

export type DiagramNode = { title: string; lines?: string[] };

export type CaseStudy = {
    slug: string;
    title: string;
    summary: string;
    highlights: Metric[];
    problem: string;
    constraints: string[];
    built: string[];
    architecture: {
        flow: DiagramNode[];
        branch?: { from: number; label: string; node: DiagramNode };
        caption: string;
    };
    impact: string[];
    impactNote?: string;
    incident?: string[];
    transferable: string;
    stack: string[];
};

export type Project = {
    name: string;
    description: string;
    href: string;
    label?: string;
    tags: string[];
};

export type Role = {
    company: string;
    title: string;
    period: string;
    location?: string;
    context?: string;
    bullets: string[];
};

export const site = {
    url: "https://www.ihemon.me",
    name: "Istiak Hassan Emon",
    shortName: "Emon",
    headline:
        "Engineering Lead · Full-Stack Product & Platform · TypeScript, Python, Go, Rust",
    summary:
        "Engineering lead who builds the whole product: web, mobile, desktop, backend, and the platform it runs on. I lead four product lines and shipped a radiology reporting web app, a mobile app that serves a whole on-prem fleet from one build, Tauri desktop tools live at 8 labs, a Rust imaging pipeline (70k studies a month) and a control plane for 86 servers.",
    description:
        "Engineering lead who builds whole products: React/Next.js web, Expo mobile, Tauri desktop, Python/Go/Rust backends, and the Kubernetes platform under them.",
    location:
        "Dhaka, Bangladesh (UTC+6) · Remote (overlap EU/US-East) · Open to relocation with visa sponsorship",
    note: "Client names and references available on request (under NDA). Metrics come from production telemetry.",
    email: "hello@ihemon.me",
    links: {
        resume: "https://rxresu.me/emon5122/istiak-hassan-emon",
        resumePdf: "/resume.pdf",
        github: "https://github.com/emon5122",
        githubOrg: "https://github.com/nexisltd",
        linkedin: "https://www.linkedin.com/in/istiak-hassan-emon",
    },
    jobTitle: "Development & Technology Team Lead",
    knowsAbout: [
        "TypeScript",
        "React",
        "Next.js",
        "React Native",
        "Tauri",
        "Python",
        "Go",
        "Rust",
        "Kubernetes",
        "Platform Engineering",
        "Distributed Systems",
        "Engineering Leadership",
    ],
};

export const caseStudies: CaseStudy[] = [
    {
        slug: "radiology-reporting-web",
        title: "Radiology worklist and reporting web app",
        summary:
            "The screen radiologists work in all day: worklist, study reconciliation, collaborative reporting and in-browser image viewing, built on Next.js 15.",
        highlights: [
            { value: "846", label: "of my commits since Mar 2025" },
            { value: "444", label: "releases shipped" },
            { value: "375", label: "active sites on the platform" },
        ],
        problem:
            "Radiologists on a national imaging platform need one fast screen to pick up studies, match them to orders, read the images, write the report with colleagues and send it out, with nothing to install.",
        constraints: [
            "Worklists are long and busy: filtering, sorting and bulk assignment have to stay fast.",
            "Medical images are large DICOM datasets, and they have to open in a browser tab.",
            "More than one person can work on a report at the same time.",
            "The app ships continuously while people are reading, so releases must not break live sessions.",
        ],
        built: [
            "A Next.js 15 App Router app in TypeScript: dashboard, worklist with filters and bulk assignment, study reconciliation, report editor, shareable report links, billing and exports, and chat.",
            "In-browser DICOM viewing and segmentation with Cornerstone3D and vtk.js.",
            "Real-time collaborative report editing on Yjs + Hocuspocus.",
            "A typed data layer: TanStack Query and Table, Zustand, React Hook Form + Zod, on Tailwind 4 and shadcn/Radix.",
            "OpenTelemetry tracing in the browser app, with Vitest unit and Playwright end-to-end tests.",
        ],
        architecture: {
            flow: [
                { title: "Worklist", lines: ["TanStack Table", "filters · bulk assign"] },
                { title: "Reconciliation", lines: ["match study ↔ order"] },
                { title: "Viewer", lines: ["Cornerstone3D · vtk.js", "in the browser"] },
                { title: "Report editor", lines: ["Yjs + Hocuspocus", "live co-editing"] },
                { title: "Platform API", lines: ["Django / DRF", "events + storage"] },
            ],
            branch: {
                from: 3,
                label: "talk it through",
                node: { title: "Chat", lines: ["in-app, per study"] },
            },
            caption:
                "A radiologist picks studies off the worklist, reconciles them with orders, opens the images in the browser and writes the report, with colleagues editing the same document live. Everything reads from and writes to the platform API behind the imaging pipeline in case 4.",
        },
        impact: [
            "846 of the repo's 2,351 commits, from Mar 2025 to now",
            "444 tagged releases through release-please, shipped while radiologists were reading",
            "The working front end of a platform with 375 active sites and 70,651 studies in Sep 2026",
            "Platform-wide median of 8.1 minutes from study arrival to finalised report",
        ],
        impactNote:
            "Commit and release counts from GitHub; platform figures from production telemetry, October 2026.",
        transferable:
            "Any data-heavy operator console: dispatch and logistics, trading and risk desks, support tooling, collaborative editors.",
        stack: [
            "Next.js 15",
            "React",
            "TypeScript",
            "Tailwind 4",
            "shadcn / Radix",
            "TanStack Query + Table",
            "Zustand",
            "React Hook Form + Zod",
            "Cornerstone3D",
            "vtk.js",
            "Yjs",
            "OpenTelemetry",
            "Vitest",
            "Playwright",
        ],
    },
    {
        slug: "universal-mobile-app",
        title: "One mobile app for every on-prem site",
        summary:
            "An Expo / React Native app that finds the user's site on its own, picks the local or public server automatically and delivers push alerts, so a single build serves a whole fleet.",
        highlights: [
            { value: "1", label: "build for every site" },
            { value: "7", label: "Expo / React Native apps" },
            { value: "~170", label: "mobile commits" },
        ],
        problem:
            "The ERP in case 5 runs on its own server at each site. Staff wanted it on their phones, but a separate app per site would never be maintained, and the right server address changes with whether the phone is on the site's network.",
        constraints: [
            "One build, every site: no per-site configuration in the app.",
            "Phones move between the site LAN and mobile data; the app has to follow.",
            "Alerts must arrive even when the app is in the background.",
            "Reuse the existing web UI instead of rewriting the ERP for mobile.",
        ],
        built: [
            "Relay login: the user signs in once, and a relay tells the app which site they belong to and where its server lives.",
            "Local-versus-public server detection with NetInfo, re-checked when the network changes.",
            "A WebView host for the ERP's web UI, native push (Pusher + expo-notifications) and background tasks.",
            "The same detection and notification pattern in an Electron desktop wrapper for the site PCs.",
            "Beyond this app: telehealth patient and provider apps (Expo Router, NativeWind, LiveKit video consults, i18n, secure storage, maps and calendars) and LinkVault, a public offline-first bookmark manager (expo-sqlite, share intent, FlashList, Reanimated, Jest + RNTL).",
        ],
        architecture: {
            flow: [
                { title: "Phone app", lines: ["Expo · React Native"] },
                { title: "Relay login", lines: ["finds the user's site"] },
                { title: "Network check", lines: ["NetInfo", "site LAN or internet"] },
                { title: "Site server", lines: ["ERP web UI", "in a WebView"] },
            ],
            branch: {
                from: 3,
                label: "alerts",
                node: { title: "Push", lines: ["Pusher → expo-notifications", "background tasks"] },
            },
            caption:
                "The app asks the relay where the user's site is, then checks whether the phone can reach that server on the local network or has to go over the internet, and loads the site's web UI. Events from the site arrive as native push notifications.",
        },
        impact: [
            "One APK for every site instead of one build per site",
            "50 of the app's 54 commits, Sep 2025 to Aug 2026",
            "Telehealth patient and provider apps with WebRTC video consults: 27 + 22 commits, Apr to Aug 2026",
            "LinkVault (public): 37 of 39 commits, offline-first on SQLite with a Jest + RNTL test suite",
        ],
        impactNote: "Commit counts from GitHub, October 2026.",
        transferable:
            "Field and frontline apps for multi-tenant or on-prem software: retail, logistics, franchises, any product deployed per customer.",
        stack: [
            "Expo",
            "React Native",
            "Expo Router",
            "NativeWind",
            "expo-notifications",
            "Pusher",
            "NetInfo",
            "react-native-webview",
            "expo-sqlite",
            "LiveKit (WebRTC)",
            "i18next",
            "Electron",
        ],
    },
    {
        slug: "desktop-edge-apps",
        title: "Desktop apps at the edge: router, viewer and lab bridge",
        summary:
            "Three Tauri 2 apps with Rust cores and React UIs that run on the PC beside the equipment: a DICOM router, a native image viewer, and a lab-instrument bridge with WASM plug-ins.",
        highlights: [
            { value: "105", label: "releases across three apps" },
            { value: "25,000+", label: "lab results captured since Jun 2026" },
            { value: "8", label: "labs live in the last 30 days" },
        ],
        problem:
            "Imaging and lab equipment sits next to whatever PC the site owns. Studies have to reach the cloud over shaky links, radiologists wanted a fast native viewer instead of an old Java one, and labs were re-typing results from analyzers that each speak their own ASTM or HL7 dialect.",
        constraints: [
            "Runs on Windows and Linux, on hardware nobody chose for it.",
            "Updates arrive silently and never interrupt work.",
            "Adding a device must not need a new release of the whole app.",
            "Nothing is dropped when the link goes down, and results are never silently mangled.",
        ],
        built: [
            "A lab-instrument bridge (Tauri 2, 59 releases): serial and TCP links, device parsers compiled to WebAssembly and loaded as plug-ins, 17 bidirectional order modules, QC, licensing, data retention and result charts.",
            "A DICOM router (Rust core + React UI, 35 releases): DIMSE SCP/SCU, rule-based routing, a persistent store-and-forward queue, 5 image codecs including JPEG-XL, HTTP forwarding and study previews in Cornerstone3D.",
            "A native DICOM viewer (Tauri 2, 11 releases since Sep 2026) on Cornerstone3D, with deep links and global shortcuts, replacing a Java/OSGi workstation.",
            "Shared desktop plumbing: Tauri updater, autostart, store and deep-link plugins; React UIs on TanStack Router, Query and Table with Radix.",
        ],
        architecture: {
            flow: [
                { title: "Equipment", lines: ["scanners · analyzers", "serial / TCP / DIMSE"] },
                { title: "Rust core", lines: ["protocol framing", "queue · WASM plug-ins"] },
                { title: "React UI", lines: ["Tauri 2 · TanStack"] },
                { title: "Upstream", lines: ["PACS · LIS / ERP API"] },
            ],
            branch: {
                from: 3,
                label: "orders flow back",
                node: { title: "Order modules × 17", lines: ["bidirectional"] },
            },
            caption:
                "Each app keeps the hard part in Rust: protocol framing, queuing and, in the lab bridge, a WASM parser per device family. A React UI on Tauri 2 shows status and lets staff act. Results and studies go upstream; lab orders come back down. A new device is a new plug-in, not a new app release.",
        },
        impact: [
            "Lab bridge live at 8 labs and clinics in the last 30 days (28 accounts installed)",
            "25,000+ analyzer results captured without manual entry since June 2026 (a lower bound)",
            "12 analyzer models from 9 brands connected in the field; ~23 analyzer families supported through plug-ins",
            "105 releases across the three apps, all delivered by auto-update",
            "633 of my commits across the three repos (326 + 228 + 79)",
        ],
        impactNote: "Production figures and GitHub counts, October 2026.",
        transferable:
            "Edge and on-prem desktop software: device and protocol integration, industrial and IoT data capture, point-of-sale, anything that must keep working offline.",
        stack: [
            "Tauri 2",
            "Rust",
            "React",
            "TypeScript",
            "TanStack Router + Query + Table",
            "Radix",
            "WebAssembly",
            "Cornerstone3D",
            "ASTM",
            "HL7",
            "DICOM",
            "Serial / TCP",
        ],
    },
    {
        slug: "rust-imaging-pipeline",
        title: "Rust imaging pipeline at national scale",
        summary:
            "Built the ingest, storage and routing backbone of a national radiology platform in Rust: 375 active sites, mixed equipment, flaky links, and nothing allowed to drop.",
        highlights: [
            { value: "70,651", label: "studies in Sep 2026" },
            { value: "7×", label: "growth in 6 months" },
            { value: "234 ms", label: "p95 operation latency" },
        ],
        problem:
            "A national radiology platform had to receive, store, route and serve medical images from hundreds of imaging sites. The sites run mixed equipment on unreliable links, and every byte is sensitive patient data.",
        constraints: [
            "Speak both the legacy DIMSE protocol suite and modern DICOMweb.",
            "Sites lose connectivity, so nothing may be dropped in transit.",
            "Every byte is patient data: audit everything, keep identities out of downstream datasets.",
            "Small team, so operations had to stay cheap and boring.",
        ],
        built: [
            "A PACS server in Rust from scratch (95 releases): C-STORE/FIND/GET/MOVE/ECHO, WADO-RS/URI, QIDO-RS and STOW-RS, S3/MinIO object storage, a Redis cache behind a circuit breaker, Prometheus metrics and audit logging.",
            "A site-side Rust router with a persistent store-and-forward queue (details in the desktop case).",
            "A de-identification data hub (Rust/Axum) with a 5-zone S3 pipeline from quarantine to delivery, fed by a Go exporter, so imaging data can feed AI training without exposing identity.",
            "A Go study prefetcher and a one-binary Go deployer that brings up the whole stack with automatic DNS.",
        ],
        architecture: {
            flow: [
                { title: "Modalities", lines: ["scanners at each site"] },
                {
                    title: "Site router",
                    lines: ["Rust + Tauri", "queue · routing · codecs"],
                },
                {
                    title: "PACS server",
                    lines: ["Rust", "DIMSE + DICOMweb"],
                },
                {
                    title: "Storage + cache",
                    lines: ["S3 / MinIO", "Redis"],
                },
                {
                    title: "Viewers + reporting",
                    lines: ["web app (case 1)", "events over RabbitMQ"],
                },
            ],
            branch: {
                from: 2,
                label: "PHI-safe export",
                node: {
                    title: "De-identification hub",
                    lines: ["Rust/Axum · 5-zone S3 pipeline"],
                },
            },
            caption:
                "Modalities send to an on-site router that queues, routes and compresses studies, then forwards them to the central PACS. Images land in object storage with a Redis cache; viewers and reporting consume events over RabbitMQ. A separate export path strips identity before data leaves for research and AI datasets.",
        },
        impact: [
            "375 active sites sending studies in the last 30 days",
            "70,651 studies in Sep 2026, up from ~10k in Mar: 7× in 6 months",
            "~62k images and 25.6 GB ingested per day; 6.3M images (4.5 TB) indexed",
            "PACS operation latency p50 52 ms, p95 234 ms",
            "C-STORE failure rate of 0.58% over 3.46M DICOM operations in 30 days",
            "Median 8.1 minutes from study arrival to finalised report",
            "95 + 35 releases shipped without a dedicated ops team",
        ],
        impactNote: "Production figures, October 2026.",
        incident: [
            "On a multi-site radiology platform, images kept arriving but studies stopped reaching radiologists' worklist for two hours, and two server reboots didn't help.",
            "Working from logs after the fact, I traced it to a nightly cleanup job scanning a 10 GB table without an index. A healthcheck mistook the busy workers for dead ones, and our own watchdog then restarted them in an endless loop, sending the job back to the beginning each time.",
            "I shipped an index, a bounded and resumable rewrite of the job, a healthcheck fix and a rolling-window restart breaker in the watchdog. I also added worklist-lag and lock-wait alerts, which caught the next lock convoy within 10 minutes.",
        ],
        transferable:
            "Any high-throughput protocol server, store-and-forward edge system or regulated data pipeline: fintech, IoT, logistics.",
        stack: [
            "Rust",
            "Tauri",
            "Axum",
            "Go",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "S3 / MinIO",
            "Prometheus",
            "Django",
        ],
    },
    {
        slug: "fleet-control-plane",
        title: "Fleet control plane for 86 on-prem servers",
        summary:
            "Designed and led a Go control plane that keeps a multi-site ERP current on 86 servers sitting behind NAT, with no one on site.",
        highlights: [
            { value: "86", label: "on-prem servers managed" },
            { value: "83 / 88", label: "sites on the current release" },
            { value: "85", label: "servers on the WireGuard mesh" },
        ],
        problem:
            "A large ERP runs on its own on-prem server at each of 88 sites (86 servers). Every update, configuration fix and support session used to need a person on site, and versions drifted apart.",
        constraints: [
            "Sites sit behind NAT on consumer-grade links, mostly Windows boxes.",
            "Updates must never interrupt work during opening hours.",
            "Remote access must be audited; no shared SSH keys.",
            "The application is big: 1,001 schema migrations to roll out safely.",
        ],
        built: [
            "A Go management server (68 releases) that holds desired state per site: modules, configuration and versions.",
            "Per-site agents: a sidecar that pulls and applies desired state, a migrator for safe schema rollout, and a sentinel for health and alerting.",
            "A CLI and an audited remote terminal that replace on-site visits and shared credentials.",
            "An operator dashboard in React + TanStack Router/Query/Table with an xterm.js web terminal (45 releases).",
            "dockwarden, my open-source Go container auto-updater, running on every box.",
        ],
        architecture: {
            flow: [
                {
                    title: "Operators",
                    lines: ["CLI · audited terminal"],
                },
                {
                    title: "Control plane",
                    lines: ["Go management server", "desired state"],
                },
                {
                    title: "WireGuard mesh",
                    lines: ["no inbound ports", "at the sites"],
                },
                {
                    title: "Site agents × 86",
                    lines: ["sidecar · migrator", "pull, then apply"],
                },
                {
                    title: "On-prem stack",
                    lines: ["containers", "auto-updated"],
                },
            ],
            branch: {
                from: 3,
                label: "health + heartbeats",
                node: {
                    title: "Sentinel",
                    lines: ["health · alerts → control plane"],
                },
            },
            caption:
                "The hub never pushes into a site. Each site joins a WireGuard mesh, and its agents pull desired state (modules, config, versions) from the control plane and converge. The sentinel reports health back. Every remote command goes through an audited terminal.",
        },
        impact: [
            "88 sites live on 86 on-prem servers (70 Windows, 15 Linux), 85 of them on the mesh",
            "83 of 88 sites on the current release through automatic pull updates",
            "80 sites heartbeating in the last 24 hours (most switch off overnight)",
            "600k+ patient records and 590k+ billing records under management (a lower bound, from a 26-server sample)",
            "42 fleet-wide automation runs since Aug 2026, every remote command audited",
        ],
        impactNote: "Production figures, October 2026.",
        transferable:
            "Edge and retail fleets, IoT, and any company running software on customer premises.",
        stack: ["Go", "WireGuard", "Docker", "PostgreSQL", "S3", "Laravel", "React", "TanStack"],
    },
];

export const moreWork: Project[] = [
    {
        name: "Lepti",
        label: "founder project · not public yet",
        description:
            "A VPN and proxy service built from zero: a Go control API (accounts, billing, seats, passkeys + TOTP), Go node agents that reconcile xray / hysteria and nftables, and a Rust desktop client.",
        href: "https://github.com/nexisltd",
        tags: ["Go", "Rust", "WireGuard / nftables", "Passkeys"],
    },
    {
        name: "Sniprl",
        description:
            "Open-source URL shortener with click analytics. Next.js, Prisma + PostgreSQL, next-auth, TanStack Query, React Hook Form + Zod.",
        href: "https://github.com/emon5122/url-handler",
        tags: ["Next.js", "Prisma", "TypeScript"],
    },
    {
        name: "GitOps platform foundation",
        label: "production cluster · edge design + demo",
        description:
            "A production k3s + ArgoCD cluster for one product line (Longhorn, CloudNativePG, MinIO, kube-prometheus; 35 app manifests), plus Terraform, Packer and Ansible across Oracle Cloud, Proxmox and EKS. The linked repo is the hub-and-spoke pull model for 40+ edge sites: a design with a public demo, not yet deployed.",
        href: "https://github.com/emon5122/argocd-hub-spoke",
        tags: ["Kubernetes", "ArgoCD", "Terraform", "Ansible"],
    },
    {
        name: "dockwarden",
        description:
            "Docker container auto-updater and health monitor in Go. 16 releases; runs on every server of the fleet above.",
        href: "https://github.com/emon5122/dockwarden",
        tags: ["Go", "Docker"],
    },
    {
        name: "onionforge",
        description:
            "Publish any HTTP service as a persistent Tor onion service without changing the application.",
        href: "https://github.com/emon5122/onionforge",
        tags: ["Go", "Tor", "Docker"],
    },
    {
        name: "cableops",
        description:
            "Network topology designer and cable-management canvas on TanStack Start, tRPC, Drizzle and better-auth. 13 releases.",
        href: "https://github.com/emon5122/cableops",
        tags: ["TypeScript", "TanStack Start", "tRPC"],
    },
    {
        name: "scalerunnergh",
        label: "early",
        description:
            "Ephemeral, GPU-aware, autoscaling GitHub Actions runner orchestrator with Prometheus metrics.",
        href: "https://github.com/emon5122/scalerunnergh",
        tags: ["Go", "Docker", "CI"],
    },
    {
        name: "country & date2word",
        description:
            "Small open-source TypeScript utilities published on npm under @nexisltd.",
        href: "https://github.com/nexisltd",
        tags: ["TypeScript", "npm"],
    },
];

export const experience: Role[] = [
    {
        company: "TRODAD International Ltd",
        title: "Development & Technology Team Lead",
        period: "Feb 2025 – present",
        location: "Dhaka, Bangladesh",
        context:
            "Lead engineering across four product lines: a national radiology platform, a multi-site ERP, a lab-instrument integration product and a consumer health platform.",
        bullets: [
            "Built and run the hiring loop, mentor engineers into owners of production services, and set the architecture and code-review standards every team ships on.",
            "Built the product surfaces as well as the backends: a Next.js radiology reporting app, Tauri desktop apps for routing, viewing and lab integration, and an Expo app that serves every ERP site from one build.",
            "Built a Rust imaging server and site router that grew 7× in 6 months to 70,651 studies a month from 375 active sites, at p95 234 ms.",
            "Designed and led a Go fleet control plane for an ERP live at 88 sites on 86 servers; automatic pull updates keep 83 of 88 sites on the current release.",
            "Built a Rust + WASM device integration engine: live at 8 labs, ~23 analyzer families supported, 25,000+ results captured since June 2026, 59 releases.",
            "Made rollout repeatable: a one-binary Go deployer for the full stack and a production k3s + ArgoCD GitOps cluster for one product line.",
            "Defined the release process (trunk + release PRs, release-please, goreleaser, Tauri auto-update) that shipped ~1,500 tagged releases in 18 months.",
        ],
    },
    {
        company: "Nexis Ltd",
        title: "Founder",
        period: "Sep 2021 – present",
        location: "Dhaka, Bangladesh",
        context:
            "Self-employed. Full-time founder and lead engineer until Feb 2025; part-time since then, alongside my role at TRODAD.",
        bullets: [
            "Founded and run a software company delivering multi-tenant SaaS (HRM, education, school management, digital menus, e-commerce, SSO) on React/Next.js and Django; own architecture, delivery and client relationships.",
            "Built the infrastructure-as-code foundation: Terraform across Oracle Cloud, Proxmox and AWS EKS, with Packer and Ansible, reused by every product.",
            "Built a Go logistics backend and published open-source npm packages.",
            "Launched Lepti (2026), a VPN and proxy service, from zero.",
        ],
    },
    {
        company: "myBurgerLab",
        title: "Systems Support Assistant",
        period: "Jan 2020 – Jun 2021",
        location: "Malaysia",
        bullets: [],
    },
    {
        company: "ZE Enterprise",
        title: "Web Developer Intern",
        period: "May – Aug 2019",
        location: "Shah Alam, Malaysia",
        bullets: [],
    },
];

export const education = [
    { school: "SEGi University", degree: "BIT, Computer Networking", year: "2022" },
    { school: "SEGi College", degree: "Diploma", year: "2019" },
];

export const skills: { group: string; items: string[] }[] = [
    {
        group: "Web",
        items: [
            "TypeScript",
            "React",
            "Next.js (App Router)",
            "TanStack Router / Query / Table / Form / Start",
            "Tailwind CSS",
            "shadcn / Radix",
            "Zustand",
            "React Hook Form + Zod",
            "tRPC",
            "Recharts",
            "Framer Motion",
            "Vite",
            "Vitest",
            "Playwright",
        ],
    },
    {
        group: "Mobile",
        items: [
            "React Native",
            "Expo",
            "Expo Router",
            "NativeWind",
            "Offline-first (expo-sqlite)",
            "Push notifications",
            "WebRTC video (LiveKit)",
            "i18next",
            "Jest + RNTL",
        ],
    },
    {
        group: "Desktop",
        items: ["Tauri 2 (Rust + React)", "Electron", "Auto-update", "Deep links", "WebAssembly plug-ins"],
    },
    {
        group: "Backend",
        items: [
            "Python: Django / DRF, FastAPI, Celery",
            "Node.js: Express, Next.js route handlers",
            "Go: Gin",
            "Rust: Axum",
            "PHP: Laravel",
            "REST APIs",
            "Protocol servers (DICOM, HL7, ASTM)",
            "RabbitMQ",
            "Distributed services",
        ],
    },
    {
        group: "Platform & infrastructure",
        items: [
            "Kubernetes (k3s)",
            "ArgoCD / GitOps",
            "Terraform",
            "Packer",
            "Ansible",
            "Docker",
            "Traefik",
            "Longhorn",
            "WireGuard",
            "Prometheus / Grafana / Loki",
            "OpenTelemetry",
            "GitHub Actions",
            "release-please",
            "goreleaser",
            "On-prem fleet management",
            "AWS EKS",
            "Oracle Cloud",
            "Proxmox",
        ],
    },
    {
        group: "Data",
        items: [
            "PostgreSQL (CloudNativePG)",
            "Redis",
            "S3 / MinIO",
            "SQLite",
            "Prisma",
            "Drizzle",
            "Message queues",
            "Staged data pipelines",
            "Large schema migrations",
        ],
    },
    {
        group: "Security",
        items: [
            "Passkeys / WebAuthn",
            "TOTP",
            "next-auth / better-auth",
            "De-identification pipelines",
            "Audited remote access",
            "WireGuard / nftables",
            "Tor onion services",
            "Secure release and auto-update",
            "Security background: offensive testing and responsible disclosure",
        ],
    },
    {
        group: "Leadership",
        items: [
            "Leading 4 product lines",
            "Hiring loop and interviews",
            "Mentoring engineers into service owners",
            "Architecture and code-review standards",
            "Release process (~1,500 releases)",
            "Founder: clients and delivery",
            "Shipping on web, mobile, desktop and backend",
        ],
    },
];

export function getCaseStudy(slug: string) {
    return caseStudies.find((c) => c.slug === slug);
}
