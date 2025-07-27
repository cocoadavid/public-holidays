import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4">
                <ul className="flex space-x-4">
                    <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
                    <Link to="/countries" className="text-gray-800 hover:text-blue-500">Countries</Link>
                    <Link to="/about" className="text-gray-800 hover:text-blue-500">About</Link>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;