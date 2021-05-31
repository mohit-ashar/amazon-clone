import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        ></img>
      </div>
      <div className="home__row">
        {/* Product */}
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          rating={5}
        />
        <Product
          id="49538094"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-Beater, Dough Hook and Whisk, 5 litre Glass Bowl"
          price={239.0}
          image="https://m.media-amazon.com/images/I/61oscgd0KXL._AC_UY218_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        {/* Product */}
        <Product
          id="49532094"
          title="Noise ColorFit Pro 2- India's No. 1 Basic Smartwatch with 24x7 Dynamic Heart Rate Tracking, 10 Day Battery, Full Touch HD Display & Multi-Sports Mode (Jet Black)"
          price={30.0}
          image="https://m.media-amazon.com/images/I/61xzuXWWozS._AC_UY218_.jpg"
          rating={4}
        />
        <Product
          id="49589094"
          title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
          price={98.99}
          image="https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY218_.jpg"
          rating={5}
        />
        <Product
          id="2113131"
          title="New Apple 11-inch iPad Pro with Apple M1 chip (2021 Model)
          "
          price={598.0}
          image="https://m.media-amazon.com/images/I/81a-rN2A3DS._AC_UY218_.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        {/* Product */}
        <Product
          id="213113131"
          title="Samsung 27 inch (68.6 cm) Curved Bezel Less, Speakers, Fabric Textured Back Side, FHD, VA Panel with DP, HDMI, VGA, Audio in, Headphone Ports - LC27T550FDWXXL"
          price={298.0}
          image="https://m.media-amazon.com/images/I/91+fneWO62L._AC_UY218_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
