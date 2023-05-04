import React, { useState, useEffect } from "react";

const ItemCard = ({ items, selected, setRowData, rowData, index, storeID }) => {
  // const [selected, setSelected] = useState(0);
  // console.log(products);
  // const { selected, items } = products;
  // useEffect(() => {
  //   const temp = rowData;
  //   const items = temp[storeID][index];
  //   items[selected].selected = true;
  //   setRowData(temp);
  // }, []);

  function handleChange(next) {
    if (next && selected + 1 < items.length) {
      const temp = JSON.parse(JSON.stringify(rowData));

      temp[storeID][index].selected = selected + 1;

      setRowData(temp);
    } else if (selected - 1 >= 0) {
      const temp = JSON.parse(JSON.stringify(rowData));

      temp[storeID][index].selected = selected - 1;

      setRowData(temp);
    }
  }

  function handleDelete() {
    console.log("index", index);
    const temp = JSON.parse(JSON.stringify(rowData));

    const currProducts = JSON.parse(JSON.stringify(temp[storeID]));
    
  console.log(currProducts);
  const removed = currProducts.splice(index,1);
  console.log("removed", removed);
  console.log(currProducts);

    temp[storeID] = currProducts;

    // console.log(temp);
    setRowData(temp);
  }

  return (
    <div data-store={storeID} className="">
      <div className="row ">
        <div className="col-5">
          <div className="item-image">
            <img className="img-prop" src={items[selected]?.image} />
            {/* <div class="overlay-weight">{lastPart}</div> */}
            <div class="added-overlay"></div>
          </div>
        </div>
        <div className="col-7 align-self-center">
          <div className="item-price">
            <div class="pricetag-label">PRICE</div>
            <span class="pricetag">${items[selected]?.price}</span>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="item-detail">
            <p class="item-productname">{items[selected]?.description}</p>
            <p class="item-storename">{items[selected]?.store}</p>
          </div>
        </div>

        <div className="footer">
          <p onClick={() => handleChange(false)}>{"Previous"}</p>
          <p onClick={handleDelete}>{"Delete"}</p>
          <p onClick={() => handleChange(true)}>{"Next"}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
