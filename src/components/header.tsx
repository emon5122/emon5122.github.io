const Headers = () => {
    return (
        <nav className="absolute top-0 z-10 flex w-full justify-between px-2">
            <a href="/">
                <p className="text-4xl font-extrabold">IHE</p>
            </a>
            <div className="flex justify-center space-x-2">
                <a href="/about">
                    <p className="text-2xl font-semibold">About</p>
                </a>
                <a href="/portfolio">
                    <p className="text-2xl font-semibold">Portfolio</p>
                </a>
                </div>
        </nav>
    );
};
export default Headers;
