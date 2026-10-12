import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    poweredByHeader: false,
    // Old case-study slugs (still linked from older resume PDFs). Served by Vercel as 308s.
    async redirects() {
        return [
            { source: "/work/device-integration-engine", destination: "/work/desktop-edge-apps", permanent: true },
            { source: "/work/lepti-vpn", destination: "/#more-work", permanent: true },
        ];
    },
};

export default nextConfig;
