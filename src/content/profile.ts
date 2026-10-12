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
        "Engineering Lead · Platform & Distributed Systems · Rust, Go, Kubernetes",
    summary:
        "Engineering lead who designs and runs platforms that must work at scale: Rust and Go systems, Kubernetes, GitOps, on-prem fleets. I lead four product lines and shipped an imaging backbone (70k studies/month), a fleet control plane (86 servers) and a delivery pipeline with ~1,500 releases in 18 months.",
    description:
        "Engineering lead for platform and distributed systems in Rust, Go and Kubernetes. Case studies: a national-scale imaging pipeline, a control plane for 86 on-prem servers, a VPN product built from zero, and a Rust + WASM device integration engine.",
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
        "Rust",
        "Go",
        "Kubernetes",
        "Platform Engineering",
        "Distributed Systems",
        "GitOps",
        "Site Reliability Engineering",
        "Engineering Leadership",
    ],
};

export const caseStudies: CaseStudy[] = [
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
            "A site-side router in Rust + Tauri (35 releases): full DIMSE SCP/SCU suite, rule-based routing, a persistent store-and-forward queue, 5 image codecs including JPEG-XL, and auto-update.",
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
                    lines: ["events over RabbitMQ"],
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
            "Next.js",
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
        stack: ["Go", "WireGuard", "Docker", "PostgreSQL", "S3", "Laravel"],
    },
    {
        slug: "lepti-vpn",
        title: "Lepti: building a VPN product from zero",
        summary:
            "Founder-built VPN and proxy service: control API, node agents and a desktop client, designed security-first from the first commit.",
        highlights: [
            { value: "0 → 1", label: "product, end to end" },
            { value: "8", label: "repositories" },
            { value: "Passkeys", label: "+ TOTP from day one" },
        ],
        problem:
            "Family members studying abroad needed reliable, censorship-resistant access to the internet. A personal fix grew into a product with accounts, billing and seats.",
        constraints: [
            "Has to work on networks that actively block VPN traffic.",
            "Accounts hold payment and access rights, so authentication must be strong without being annoying.",
            "Nodes come and go; their config must converge without manual edits.",
        ],
        built: [
            "A Go control API: accounts, billing, seats, passkeys (WebAuthn) and TOTP.",
            "A Go node agent that reconciles xray / hysteria proxy config and nftables firewall rules from the control API.",
            "A Rust desktop client that fetches its profile and connects.",
        ],
        architecture: {
            flow: [
                {
                    title: "Desktop client",
                    lines: ["Rust", "fetches profile"],
                },
                {
                    title: "Control API",
                    lines: ["Go · billing · seats", "passkeys + TOTP"],
                },
                {
                    title: "Node agents",
                    lines: ["Go", "reconcile config"],
                },
                {
                    title: "Proxy nodes",
                    lines: ["xray / hysteria", "nftables"],
                },
            ],
            caption:
                "The control API issues credentials and assigns seats. Node agents reconcile proxy configuration and firewall rules toward what the API says. Clients fetch a profile from the API, then connect straight to a node.",
        },
        impact: [
            "Took the product from idea to a working service: API, node fleet and desktop client",
            "Security-first auth: passkeys and TOTP instead of passwords alone",
            "Declarative node config: agents converge on desired state instead of hand-edited servers",
        ],
        transferable:
            "Zero-to-one product ownership: networking, auth, billing and client software in one person's hands.",
        stack: ["Go", "Rust", "xray", "hysteria", "nftables", "WebAuthn / passkeys", "TOTP"],
    },
    {
        slug: "device-integration-engine",
        title: "Plugin-based Rust + WASM device integration engine",
        summary:
            "A desktop bridge that captures results from lab instruments over ASTM and HL7, with each device family's parser shipped as a WASM plug-in.",
        highlights: [
            { value: "25,000+", label: "results captured since Jun 2026" },
            { value: "8", label: "labs live in the last 30 days" },
            { value: "12", label: "analyzer models in the field" },
        ],
        problem:
            "Clinical labs re-typed analyzer results by hand: slow and error-prone. Every instrument speaks its own dialect of ASTM or HL7, and every lab has a different mix.",
        constraints: [
            "Runs on whatever Windows or Linux PC sits beside the instrument.",
            "Adding a device must not need a new release of the whole app.",
            "Orders flow both ways, and results must never be silently mangled.",
        ],
        built: [
            "A Rust + Tauri desktop bridge (~500 commits, 90 releases) with serial and TCP links.",
            "Device parsers compiled to WebAssembly and loaded as plug-ins, one per device family.",
            "17 bidirectional order modules, quality control and licensing.",
        ],
        architecture: {
            flow: [
                { title: "Instrument", lines: ["serial / TCP"] },
                { title: "Framing", lines: ["ASTM / HL7"] },
                {
                    title: "WASM plug-in",
                    lines: ["one parser per", "device family"],
                },
                { title: "Normalised results", lines: ["QC checks"] },
                { title: "Host system API", lines: ["LIS / ERP"] },
            ],
            branch: {
                from: 4,
                label: "orders flow back",
                node: {
                    title: "Order modules × 17",
                    lines: ["bidirectional"],
                },
            },
            caption:
                "Raw instrument traffic is framed by protocol, then handed to the WASM parser for that device family, which emits normalised results for the host system. Orders travel the other way. A new device is a new plug-in, not a new app release.",
        },
        impact: [
            "Live at 8 labs and clinics in the last 30 days (28 accounts installed)",
            "25,000+ analyzer results captured without manual entry since first production in June 2026 (a lower bound)",
            "12 analyzer models from 9 brands connected in the field, over TCP and serial, one-way and bidirectional",
            "~23 analyzer families supported through plug-ins; 17 bidirectional order modules",
            "90 releases shipped with auto-update",
        ],
        impactNote: "Production figures, October 2026.",
        transferable:
            "Device and protocol integration, plug-in architectures, industrial and IoT data capture.",
        stack: ["Rust", "Tauri", "WebAssembly", "ASTM", "HL7", "Serial / TCP"],
    },
];

export const moreWork: Project[] = [
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
            "Network topology designer and cable-management tool. 13 releases.",
        href: "https://github.com/emon5122/cableops",
        tags: ["TypeScript", "Networking"],
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
            "Built a Rust imaging server and site router that grew 7× in 6 months to 70,651 studies a month from 375 active sites, at p95 234 ms.",
            "Designed and led a Go fleet control plane for an ERP live at 88 sites on 86 servers; automatic pull updates keep 83 of 88 sites on the current release.",
            "Built a Rust + WASM device integration engine: live at 8 labs, ~23 analyzer families supported, 25,000+ results captured since June 2026, 90 releases.",
            "Made rollout repeatable: a one-binary Go deployer for the full stack and a production k3s + ArgoCD GitOps cluster for one product line.",
            "Defined the release process (trunk + release PRs, release-please, goreleaser, Tauri auto-update) that shipped ~1,500 tagged releases in 18 months.",
        ],
    },
    {
        company: "Nexis Ltd",
        title: "Founder & Lead Engineer",
        period: "Sep 2021 – present",
        location: "Dhaka, Bangladesh",
        bullets: [
            "Founded and run a software company delivering multi-tenant SaaS (HRM, school management, digital menus, e-commerce, SSO); own architecture, delivery and client relationships.",
            "Built the infrastructure-as-code foundation: Terraform across Oracle Cloud, Proxmox and AWS EKS, with Packer and Ansible, reused by every product.",
            "Built a Go logistics backend and published open-source npm packages.",
            "Launched Lepti, a VPN and proxy service, from zero.",
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
    { school: "SEGi University", degree: "BIT, Computer Networking", year: "2021" },
    { school: "SEGi College", degree: "Diploma", year: "2019" },
];

export const skills: { group: string; items: string[] }[] = [
    {
        group: "Languages",
        items: ["Rust", "Go", "TypeScript", "Python", "PHP", "SQL", "Shell / PowerShell"],
    },
    {
        group: "Backend & distributed systems",
        items: [
            "Distributed services",
            "Protocol servers (DICOM, HL7, ASTM)",
            "Axum",
            "Gin",
            "Django / DRF",
            "Celery",
            "RabbitMQ",
            "REST APIs",
            "Tauri",
            "WebAssembly plug-ins",
            "Next.js",
            "Laravel",
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
            "Message queues",
            "Staged data pipelines",
            "Large schema migrations",
        ],
    },
    {
        group: "Security",
        items: [
            "De-identification pipelines",
            "Passkeys / WebAuthn",
            "TOTP",
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
            "Ownership across 6 production languages",
        ],
    },
];

export function getCaseStudy(slug: string) {
    return caseStudies.find((c) => c.slug === slug);
}
