export type CommandResponse = {
    type: "text" | "error" | "code" | "list" | "table";
    content: string | string[] | { [key: string]: string }[];
};

export const COMMANDS: { [key: string]: string } = {
    help: "List all available commands",
    skills: "List all skills and expertise",
    experience: "Show work experience",
    projects: "List all projects",
    education: "Show educational background",
    clear: "Clear the terminal",
    contact: "Show contact information",
    certifications: "List all certifications",
    awards: "Show awards and achievements",
};

export const SKILLS_DETAILS = {
    "full-stack": {
        title: "Full-Stack Development",
        description: `Extensive experience in both frontend and backend development with expertise in:
    
    Frontend:
    - React & Next.js for building modern, performant web applications
    - TypeScript for type-safe development
    - State management with Redux, Zustand, and React Query
    
    Backend:
    - Django & FastAPI for Python-based backends
    - Laravel for PHP applications
    - Golang for high-performance services
    - Express.js for Node.js applications
    
    Database:
    - PostgreSQL, MySQL for relational databases
    - MongoDB for NoSQL solutions
    - Redis for caching and real-time features`,
    },
    devops: {
        title: "DevOps",
        description: `Expertise in DevOps practices and tools:
    
    Containerization:
    - Docker for application containerization
    - Kubernetes for container orchestration
    - Helm for Kubernetes package management
    
    CI/CD:
    - Jenkins for automation pipelines
    - GitHub Actions for CI/CD workflows
    - ArgoCD for GitOps practices
    
    Infrastructure:
    - Terraform for infrastructure as code
    - Ansible for configuration management
    - Traefik for reverse proxy and load balancing`,
    },
    security: {
        title: "Networking & Cybersecurity",
        description: `Strong background in security testing and network infrastructure:
    
    Security Testing:
    - Penetration testing of web applications
    - Bug bounty hunting on platforms like HackerOne
    - Vulnerability assessment and reporting
    
    Tools & Platforms:
    - Kali Linux for security testing
    - Burp Suite for web security testing
    - Metasploit for exploitation testing
    
    Network Security:
    - Firewall configuration and management
    - VPN setup and maintenance
    - Security policy implementation`,
    },
    cloud: {
        title: "Cloud Platforms",
        description: `Experience with major cloud providers and services:
    
    AWS:
    - EC2, ECS, and EKS for compute
    - S3 and RDS for storage
    - CloudFront for CDN
    
    Google Cloud:
    - Compute Engine
    - Cloud Run
    - Cloud Storage
    
    Azure:
    - Azure Kubernetes Service
    - Azure Functions
    - Azure DevOps
    
    Others:
    - DigitalOcean Droplets and Kubernetes
    - Oracle Cloud Infrastructure
    - Linode/Akamai Cloud`,
    },
    ai: {
        title: "Machine Learning & AI",
        description: `Experience in AI and ML technologies:
    
    Technologies:
    - OpenAI API integration
    - LangChain for AI applications
    - Sentiment analysis
    
    Applications:
    - Natural Language Processing
    - Text classification
    - AI-powered automation
    
    Tools:
    - Python ML libraries
    - TensorFlow and PyTorch
    - Hugging Face transformers`,
    },
};

export const EXPERIENCE_DETAILS = {
    trodad: {
        title: "Team Lead, Development & Technology at TRODAD International LTD.",
        period: "February 2025 - Present",
        description: `Key Achievements and Responsibilities:

    Leadership:
    - Lead development team across multiple domains
    - Architect enterprise systems for healthcare, e-commerce, and blockchain
    - Manage full-stack development and infrastructure automation
    
    Technical Implementation:
    - Built zero-knowledge privacy mixer on Solana
    - Fine-tuned medical AI models for radiology
    - Integrated DICOM networks for medical imaging
    - Deployed IoT-enabled healthcare workflows
    - Managed CI/CD pipelines for ERP systems
    
    Technologies Used:
    - Kubernetes, Docker for containerization
    - AI/ML integration and model fine-tuning
    - Blockchain development (Solana, Rust)
    - Healthcare systems (DICOM, HL7)
    - DevOps and automation tools`,
    },
    nexis: {
        title: "Lead Developer & Founder at Nexis LTD",
        period: "September 2021 - February 2025",
        description: `Key Achievements and Responsibilities:

    Leadership:
    - Founded and scaled engineering company from ground up
    - Managed 44+ production microservices serving real customers
    - Architected complete infrastructure using Terraform/Kubernetes/Ansible
    - Maintained 99.9% uptime across all production services
    
    Projects Delivered:
    - E-commerce platforms with payment gateway integration
    - SaaS systems (HRM, school management, digital menus)
    - Internal tools and automation systems
    - GitOps workflows and CI/CD pipelines
    - Published reusable NPM packages
    
    Key Technical Achievements:
    - Built complete microservices architecture
    - Implemented infrastructure as code
    - Automated deployment pipelines
    
    Technologies Used:
    - Next.js, React, TypeScript
    - Python, Django, FastAPI
    - Docker, Kubernetes, Terraform
    - AWS, GCP
    - PostgreSQL, MongoDB`,
    },
    bounty: {
        title: "Bug Bounty Hunter",
        period: "2016 - Present",
        description: `Achievements and Activities:

    Platforms:
    - HackerOne
    - Bugcrowd
    - Private Programs
    
    Types of Vulnerabilities Found:
    - SQL Injection
    - Cross-Site Scripting (XSS)
    - Remote Code Execution
    - Authentication Bypasses
    - Business Logic Flaws
    
    Notable Achievements:
    - Multiple critical vulnerabilities discovered
    - Recognition from major tech companies
    - Consistent top performer in programs
    
    Skills Developed:
    - Advanced penetration testing
    - Security research
    - Vulnerability assessment
    - Report writing`,
    },
    burgerlab: {
        title: "Systems Support Assistant at myBurgerLab",
        period: "January 2020 - June 2021",
        description: `Role and Responsibilities:

    System Management:
    - Maintained and optimized ERP system
    - Troubleshot technical issues
    - Implemented system updates
    
    Process Improvement:
    - Streamlined order management
    - Enhanced inventory tracking
    - Improved reporting systems
    
    Technical Support:
    - Provided user training
    - Created documentation
    - Managed system backups
    
    Technologies Used:
    - ERP Systems
    - SQL Databases
    - Network Management
    - System Administration`,
    },
};

export const PROJECTS_DETAILS = {
    "business-idea": {
        title: "Global Business Idea Generator",
        description: `A sophisticated AI-powered system that generates business ideas based on location and market trends.
    
    Technical Implementation:
    - LangChain for AI orchestration
    - OpenAI GPT models for idea generation
    - SerpAPI for real-time market data
    - Next.js frontend with TypeScript
    
    Features:
    - Country-specific business suggestions
    - Market trend analysis
    - Competitive landscape assessment
    - Financial viability estimation
    
    Impact:
    - Helped entrepreneurs identify opportunities
    - Provided data-driven business insights
    - Streamlined market research process`,
    },
    "sentiment-analysis": {
        title: "YouTube Video Sentiment Analysis",
        description: `Machine learning-powered system for analyzing YouTube comment sentiments.
    
    Technical Stack:
    - Python backend with Flask
    - Natural Language Processing
    - Machine Learning models
    - YouTube Data API
    
    Features:
    - Real-time comment analysis
    - Sentiment classification
    - Trend visualization
    - Automated reporting
    
    Impact:
    - Helped content creators understand audience
    - Improved content strategy
    - Enhanced engagement metrics`,
    },
    "qr-generator": {
        title: "QR Code Generator",
        description: `Advanced QR code generation system with customization options.
    
    Technical Stack:
    - Next.js frontend
    - TypeScript for type safety
    - QR code generation libraries
    - Custom design system
    
    Features:
    - Multiple QR code formats
    - Custom colors and styles
    - Bulk generation
    - Analytics tracking
    
    Impact:
    - Streamlined marketing operations
    - Enhanced tracking capabilities
    - Improved user engagement`,
    },
    "url-shortener": {
        title: "URL Shortener",
        description: `Efficient URL shortening service with analytics and tracking.

Technical Stack:
- Next.js frontend
- TypeScript for type safety
- Custom backend API
- Database for storing URLs and analytics

Features:
- Custom short URLs
- Real-time analytics
- User authentication

Impact:
- Simplified link management
- Comprehensive usage analytics
- Enhanced brand consistency`,
    },
};

export const AWARDS_DETAILS = {
    "high-achiever": {
        title: "High Achiever Award",
        date: "10 August 2020",
        description: `Awarded by SEGi University for outstanding academic performance.

Recognition:
- Exceptional academic achievement
- Consistent high performance
- Leadership qualities`,
    },
};

export const CONTACT_DETAILS = {
    "contact-info": {
        title: "Contact Information",
        description: `Get in touch with me:

Email: emon5122@gmail.com
Phone: +8801738812828
Location: Dhaka, Bangladesh

Professional Profiles:
- GitHub: https://github.com/emon5122
- LinkedIn: https://www.linkedin.com/in/istiak-hassan-emon/

I'm always open to discussing new opportunities, collaborations, or just having a technical chat!`,
    },
};

export const EDUCATION_DETAILS = {
    "segi-university": {
        title: "Bachelor in IT - Computer Networking",
        institution: "SEGi University",
        year: "2021",
        description: `Bachelor's Degree in Information Technology
    
Specialization: Computer Networking
Year of Completion: 2021

Key Achievements:
- High Achiever Award recipient
- Specialized in network infrastructure and security
- Completed final year project on Facial Recognition for Social Engineering`,
    },
    "segi-college": {
        title: "Diploma in IT",
        institution: "SEGi College",
        year: "2019",
        description: `Diploma in Information Technology

Year of Completion: 2019

Key Projects:
- KidoLearn - Kid learning application (Final year project)
- Various technical implementations and practical assignments`,
    },
    "dhaka-board": {
        title: "Secondary School Certificate - Science",
        institution: "Dhaka Board",
        year: "2015",
        description: `Secondary School Certificate

Stream: Science
Year of Completion: 2015

Focus Areas:
- Mathematics
- Physics
- Chemistry
- Biology`,
    },
};

export const CERTIFICATIONS_DETAILS = {
    "ethical-hacking": {
        title: "Complete Ethical Hacking",
        issuer: "Udemy",
        date: "23 March 2017",
        description: `Comprehensive certification in ethical hacking and cybersecurity.

Key Areas Covered:
- Network Security
- Web Application Security
- System Hacking
- Malware Threats
- Social Engineering
- Cryptography

Certificate URL: https://www.udemy.com/certificate/UC-G5HGPISQ/`,
    },
    leadership: {
        title: "2017 Leadership Camp",
        issuer: "SEGi College, Kota Damansara",
        date: "March 2017",
        description: `Leadership development program focusing on:

- Team Management
- Project Leadership
- Communication Skills
- Problem Solving
- Strategic Planning`,
    },
    "english-upper": {
        title: "Upper-Intermediate English",
        issuer: "SEGi University",
        date: "15 August 2016",
        description: `Advanced English language certification

Skills Certified:
- Business Communication
- Academic Writing
- Professional Presentation
- Advanced Grammar
- Technical Documentation`,
    },
    ielts: {
        title: "English For IELTS",
        issuer: "British Council",
        date: "April 2016",
        description: `IELTS preparation certification covering:

- Academic Writing
- Speaking Skills
- Listening Comprehension
- Reading Analysis
- Test Strategies`,
    },
};

export function getCommandResponse(command: string): CommandResponse {
    const cmd = command.trim().toLowerCase();

    switch (cmd) {
        case "help":
            return {
                type: "table",
                content: Object.entries(COMMANDS).map(([cmd, desc]) => ({
                    Command: cmd,
                    Description: desc,
                })),
            };

        case "education":
            return {
                type: "text",
                content: `Education:

SEGi University (2021)
Bachelor in IT - Computer Networking
- High Achiever Award recipient
- Specialized in network infrastructure and security
- Final year project: Facial Recognition for Social Engineering

SEGi College (2019)
Diploma in IT
- Developed KidoLearn, a learning application for children
- Focused on practical implementations and technical skills

Dhaka Board (2015)
Secondary School Certificate - Science
- Strong foundation in Mathematics and Sciences
- Excellent academic performance`,
            };

        case "certifications":
            return {
                type: "text",
                content: `Certifications:

Complete Ethical Hacking (Udemy, March 2017)
- Comprehensive cybersecurity training
- Practical experience in penetration testing
- Certificate: UC-G5HGPISQ

2017 Leadership Camp (SEGi College)
- Team management and project leadership
- Strategic planning and communication skills

Upper-Intermediate English (SEGi University, August 2016)
- Advanced business communication
- Technical documentation skills

English For IELTS (British Council, April 2016)
- Academic writing and speaking
- Professional communication skills`,
            };

        case "skills":
            return {
                type: "text",
                content: `Technical Skills:

Full-Stack Development
- React, Next.js, Vue.js, TypeScript
- Django, FastAPI, Laravel, PHP
- Node.js, Express, Nest.js, Golang
- PostgreSQL, MongoDB, Redis, MySQL

DevOps & Infrastructure
- Docker, Kubernetes, Terraform, Ansible
- AWS, GCP, Azure, DigitalOcean
- GitOps, ArgoCD, GitHub Actions
- CI/CD, Infrastructure as Code
- Traefik, Nginx, Load Balancing

Blockchain & Cryptography
- Solana, Rust, Anchor Framework
- Zero-Knowledge Proofs
- Smart Contracts, Web3.js
- Cryptocurrency Integration

Security & Networking
- Penetration Testing (OWASP Top 10)
- Bug Bounty Hunting (HackerOne, Bugcrowd)
- Network Security, Kali Linux
- Burp Suite, Metasploit

AI/ML & Data Science
- LangChain, OpenAI API Integration
- TensorFlow, PyTorch, Hugging Face
- Medical AI Model Fine-tuning
- NLP, Sentiment Analysis, Computer Vision

Cloud Platforms
- AWS (EC2, S3, RDS, Lambda, ECS)
- Google Cloud Platform
- Microsoft Azure
- Oracle Cloud, Linode

Project Management
- Team Leadership & Mentoring
- Agile/Scrum Methodologies
- Strategic Planning
- Cross-functional Collaboration`,
            };

        case "experience":
            return {
                type: "text",
                content: `Professional Experience:

Team Lead, Development & Technology at TRODAD International LTD. (Feb 2025 - Present)
- Lead development team across healthcare, e-commerce, and blockchain domains
- Architect enterprise systems with Kubernetes/Docker infrastructure
- Built zero-knowledge privacy mixer on Solana
- Fine-tuned medical AI models and integrated DICOM networks
- Manage CI/CD pipelines for ERP systems

Lead Developer & Founder at Nexis LTD (Sept 2021 - Feb 2025)
- Founded and scaled company managing 44+ production microservices
- Architected complete infrastructure using Terraform/Kubernetes/Ansible
- Delivered e-commerce platforms, SaaS systems, and internal tools
- Built GitOps workflows and automated CI/CD pipelines
- Maintained 99.9% uptime across all services

Bug Bounty Hunter (2016 - Present)
- Discovered critical vulnerabilities on HackerOne and Bugcrowd
- Worked with major tech companies
- Specialized in web application security (OWASP Top 10)
- Consistent top performer in programs

Systems Support Assistant at myBurgerLab (Jan 2020 - June 2021)
- Maintained ERP system operations for restaurant chain
- Improved operational efficiency
- Provided technical support and training`,
            };

        case "projects":
            return {
                type: "text",
                content: `Notable Projects:

Global Business Idea Generator
- AI-powered business suggestion system
- Integrates market trends and location data
- Uses LangChain and OpenAI

YouTube Video Sentiment Analysis
- Machine learning for comment analysis
- Real-time sentiment classification
- Python & Flask implementation

QR Code Generator
- Advanced QR code customization
- Multiple format support
- Built with Next.js

URL Shortener
- Efficient URL shortening service
- Analytics and tracking
- Modern web technologies`,
            };

        case "awards":
            return {
                type: "text",
                content: `Awards and Achievements:

High Achiever Award (SEGi University, 2020)
- Recognition for outstanding academic performance
- Demonstrated excellence in technical subjects
- Leadership and innovation in projects

Other Achievements:
- Multiple successful bug bounty submissions
- Recognition from major tech companies
- Leadership in community projects`,
            };

        case "contact":
            return {
                type: "text",
                content: `Contact Information:

Email: emon5122@gmail.com
Phone: +8801738812828
Location: Dhaka, Bangladesh

Professional Profiles:
GitHub: https://github.com/emon5122
LinkedIn: https://www.linkedin.com/in/istiak-hassan-emon/

Feel free to reach out for collaborations or opportunities!`,
            };

        case "clear":
            return {
                type: "text",
                content: "clear",
            };

        default:
            return {
                type: "error",
                content: `Command not found: ${cmd}. Type 'help' to see available commands.`,
            };
    }
}
