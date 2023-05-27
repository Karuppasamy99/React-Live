import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
    return (
        <h1 className="title">ChappathiGPT</h1>
    )
}

const NavItem = () => {
    return (
        <ul className="navBar">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            
        </ul>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <NavItem />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Header />)