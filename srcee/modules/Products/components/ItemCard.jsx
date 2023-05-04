import React, { useState } from "react";

const ItemCard = ({ products }) => {
  const [selected, setSelected] = useState(0);

  function handleChange(next) {
    if (next && selected + 1 < products.length) {
      setSelected(selected + 1);
    } else if (!next && selected - 1 >= 0) {
      setSelected(selected - 1);
    }
  }

  return (
    <div className="">
      <div className="row ">
        <div className="col-5">
          <div className="item-image">
            <img className="img-prop" src={products[selected]?.image} />
            {/* <div class="overlay-weight">{lastPart}</div> */}
            <div class="added-overlay"></div>
          </div>
        </div>
        <div className="col-7 align-self-center">
          <div className="item-price">
            <div class="pricetag-label">PRICE</div>
            <span class="pricetag">${products[selected]?.price}</span>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="item-detail">
            <p class="item-productname">{products[selected]?.description}</p>
            <p class="item-storename">{products[selected]?.store}</p>
          </div>
        </div>

        <div className="footer">
          <p onClick={() => handleChange(false)}>{"Previous"}</p>
          <p onClick={() => handleChange(true)}>{"Next"}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
