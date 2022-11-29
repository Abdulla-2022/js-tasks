import React from "react";
import logo from './img/logo.svg'

const Header = () => {
    return(
        <header>
            <nav>
                <ul className="menu-list">
                    <li><a href="#">Wooden Furnuture</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">Stories</a></li>
                </ul>
            </nav>
            <div className="logo">
            <img src={logo} alt="logo" />
            </div>
            <div className="emty">
                {/* не удалять! используется для росполоэнгия хедера */}
            </div>
        </header>
    )
}

export default Header;