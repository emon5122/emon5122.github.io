import Link from "next/link";

const Headers = () => {
    return (
        <nav className="absolute top-0 z-10 flex w-full justify-between px-2">
            <Link href="/">
                <p className="text-4xl font-extrabold">IHE</p>
            </Link>
            <div className="flex justify-center space-x-2">
                <Link href="/about">
                    <p className="text-2xl font-semibold">About</p>
                </Link>
                <Link href="/portfolio">
                    <p className="text-2xl font-semibold">Portfolio</p>
                </Link>
                </div>
        </nav>
    );
};
export default Headers;
