import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div className="my-40 text-center">
            <h1 className=" text-7xl mb-8 font-bold">Oops</h1>
            <p className="mb-4 text-2xl">{error.status ===404 && <div><h1>error pages is not found</h1></div>}</p>
            <p className="mb-4 text-2xl">{error.statusText}</p>
            <Link to='/' className="text-2xl py-1 px-4 rounded-lg bg-red-500 text-white">Home</Link>
        </div>
    )
}

export default ErrorPage