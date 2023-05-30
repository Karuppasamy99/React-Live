import {Link} from 'react-router-dom'

export default NavItems = () => {
    return (
        <div className="nav-items">
                <ul>
                    <li key='home'><Link to='/'>Home</Link></li>
                    <li key='about'><Link to='/about'>About</Link></li>
                    <li key='contact'><Link to='/contact'>Contact</Link></li>
                    <li key='cart'><Link to='/cart'>Cart</Link></li>
                    
                </ul>
            </div>
    )
}