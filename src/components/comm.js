import React from "react";
import { useState, useEffect } from "react";
import { Data } from "./Data";
import Product from "./Product";


function comm() {
  const [pdata, setPdata] = useState([]);

  useEffect(() => {
    Data().then((res) => setPdata(res));
  }, []);

  return (
    <div>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </div>

      {pdata.map((value, index) => (
        <div key={index} className="home__row">
          <Product
            id={value.id}
            title={value.title}
            price={value.price}
            image={value.image}
            rating={value.rating}
          />
        </div>
      ))}
    </div>
  );
}

/* import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal; */


export default comm;
