import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className='text-6xl font-bold mb-4'>404 - Page Not Found</h1>
            <p className="text-lg">The page you are looking for does not exist.</p>
            <p className="text-lg mt-2">You will be redirected to the homepage shortly.</p>
        </div>
    );
}

export default NotFound;