import React from "react";
import img3 from './img/3.svg'
import img4 from './img/4.svg'
import img5 from './img/5.svg'
import img6 from './img/6.svg'


const NavContent = () => {
    return (
        <section>
            <div className="nav-content">
                <img src={img3} /><span>Free shipping</span>
                <img src={img4} /><span>Awarded Product Design</span>
                <img src={img5} /><span>Ecofriendly Approach</span>
                <img src={img6} /><span>Crafted in Spain</span>
                <span id="text">4.8 Star Reviews</span>
            </div>
        </section>
    )
}

export default NavContent;