import img from '../../img/food-logo.png';
import NavBar from './NavBar';


const Title = () => {
    return (
        <div className="flex-row">
            <a href="/">
                <img src={img} className='h-24'/>
                <span>ChappathiGPT</span>
            </a>
        </div>
        
    )
}

const Header = () => {
    return (
        <div className="flex justify-between">
            <Title />
            <NavBar />
        </div>
    )
}

export default Header;