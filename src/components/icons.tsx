import {
    siAmazon,
    siAnsible,
    siDjango,
    siDocker,
    siExpress,
    siFlask,
    siGithub,
    siGithubactions,
    siGoland,
    siGooglecloud,
    siJenkins,
    siKalilinux,
    siKubernetes,
    siLaravel,
    siLinux,
    siMongodb,
    siNextdotjs,
    siOpenai,
    siPostgresql,
    siPython,
    siReact,
    siRedis,
    siTailwindcss,
    siTensorflow,
    siTerraform,
    siTypescript,
    siVercel,
} from "simple-icons";

export function TechIcon({
    name,
    size = 24,
    className = "",
}: {
    name: string;
    size?: number;
    className?: string;
}) {
    const icons: { [key: string]: { path: string; hex: string } } = {
        github: siGithub,
        react: siReact,
        nextjs: siNextdotjs,
        typescript: siTypescript,
        python: siPython,
        django: siDjango,
        docker: siDocker,
        kubernetes: siKubernetes,
        aws: siAmazon,
        gcp: siGooglecloud,
        tensorflow: siTensorflow,
        openai: siOpenai,
        postgresql: siPostgresql,
        mongodb: siMongodb,
        redis: siRedis,
        golang: siGoland,
        laravel: siLaravel,
        express: siExpress,
        tailwindcss: siTailwindcss,
        vercel: siVercel,
        githubactions: siGithubactions,
        jenkins: siJenkins,
        terraform: siTerraform,
        ansible: siAnsible,
        linux: siLinux,
        kalilinux: siKalilinux,
        flask: siFlask,
    };

    const icon = icons[name.toLowerCase()];
    if (!icon) return null;

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={icon.path} />
        </svg>
    );
}
