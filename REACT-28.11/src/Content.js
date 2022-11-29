import React from "react";
import img9 from './img/design.svg';
import img8 from './img/footprint.svg';
import img7 from './img/made.svg';
import img6 from './img/wood.svg';
import img5 from './img/company.svg';


const Content = () => {
    return (
        <div>
  <section className="section-10">
    <div className="box box-1">
      <img src={img9} alt="" className="design" />
      <h2>DESIGN</h2>
      <p>We create furniture pieces with personality, designed to transform your space.</p>
      <button>Learn More</button>
    </div>
    <div className="box box-2">
      <img src={img8} alt="" className="footprint" />
      <h2>FOOTPRINT</h2>
      <p>We are committed to look after what we love, nature.</p>
      <button>Learn More</button>
    </div>
    <div className="box box-3">
      <img src={img7} alt="" className="made" />
      <h2>MADE</h2>
      <p>Our local design, and production in the village of Iscar, Spain.</p>
      <button>Learn More</button>
    </div>
    <div className="box box-4">
      <img src={img6} alt="" className="wood" />
      <h2>WOOD</h2>
      <p>Our characteristic and main material, and its unique and timeless attributes.</p>
      <button>Learn More</button>
    </div>
  </section>
  <div className="last">
    <p>Those who are talking about us...</p>
    <img src={img5} alt="" />
  </div>
</div>
    )
}

export default Content;