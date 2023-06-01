import {Link} from 'react-router-dom'

export default NavItems = () => {
    return (
        <div className="nav-items">
                <ul className='flex justify-between m-5'>
                    <li key='home' className='p-5'><Link to='/'>Home</Link></li>
                    <li key='about' className='p-5'><Link to='/about'>About</Link></li>
                    <li key='contact'className=' p-5'><Link to='/contact'>Contact</Link></li>
                    <li key='cart' className='p-5'><Link to='/cart'>Cart</Link></li>
                    <li key='restaurant' className='p-5'><Link to='/restaurant'>Restaurant</Link></li>
                    <li key='restaurant' className='p-5'><Link to='/accordian'>Accordian</Link></li>
                    
                </ul>
            </div>
    )
}