import {Link} from 'react-router-dom';

const Navbar = () =>{
    return(
        <nav className='bg-gray-800 py-5 mb-3'>
            <div className='container mx-auto flex justify-between items-center'>
            <ul className='flex  space-x-5'>
                <li>
                <Link to="/"  className='text-white hover:text-gray-300'>Character</Link>
                </li>
                
            </ul>
            </div>
            
        </nav>
    )
}
export default Navbar;