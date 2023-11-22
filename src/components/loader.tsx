import { Html } from "@react-three/drei";

const Loader = () => {
    return (
        <Html>
            <div className="flex items-center justify-center">
                <div className="bottom-2 h-20 w-20 animate-spin rounded-full border-blue-500 border-t-blue-500 border-opacity-20">
                    Loading...
                </div>
            </div>
        </Html>
    );
};

export default Loader;
