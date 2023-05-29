import img from '../../img/food-logo.png';
import NavBar from './NavBar';


const Title = () => {
    return (
        <div className="title">
            <a href="/">
                <img src={img} height='100'/>
                <h1>ChappathiGPT</h1>
            </a>
        </div>
        
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <NavBar />
        </div>
    )
}

export default Header;