import React from "react";
import "../App.css";
import banner from "../images/banner.jpg";
import Product from "./Product";
import product1 from "../images/download.jpg";
import product2 from "../images/mixer.png";
import product3 from "../images/watch.png";
import product4 from "../images/speaker.png";
import product5 from "../images/mobile.png";
import product6 from "../images/monitor.png";



// import data from './data.json'

function Home() {

  
  return (
    <div className="home">
      <div className="home_container">
        <img src={banner} alt="amazon prime" className="home_image"></img>
        <div className="home_row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constants Innovation Creates Radically Successful Buisnesses Paperback"
            price={11.96}
            rating={5}
            image={product1}
          />
          <Product
            id="12345628"
            title="Kenwood kMix stand mixer for Baking , stylish kitchen Mixer with Glass Bowl"
            price={239.0}
            rating={4}
            image={product2}
          />
        </div>
        <div className="home_row">
          <Product
            id="12321461"
            title="Samsung LC49G98SSUXEN 49 Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={product3}
          />
          <Product
            id="12321981"
            title="Amazon Echo (3rd generaton) | Smart speaker with Alexa, Charcoal febric"
            price={98.99}
            rating={5}
            image={product4}
          />
          <Product
            id="12387341"
            title="New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image={product5}
          />
        </div>
        <div className="home_row">
          <Product
            id="12364341"
            title="Samsung LC49RG98SSUXEN 49 Curved LED Gaming Monitor - Super Ultra Wide Dual WHQO 1528 x 1448"
            price={1094.98}
            rating={4}
            image={product6}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
