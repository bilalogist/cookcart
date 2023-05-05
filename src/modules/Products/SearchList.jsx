import { useEffect, useState, useMemo } from "react";
import { findItem, fetchStores, tempRes } from "./service";
import { CircularProgress } from "@mui/material";
import { ListGroup } from "react-bootstrap";
import ItemCard from "./components/ItemCard";
import StoresModal from "./components/Stores";
import { SnackBar } from "../../components";
import Button from "@mui/material/Button";

const SearchList = (props) => {
  const [loading, setLoading] = useState(false);
  const [rowData, setRowData] = useState({});
  const [search, setSearch] = useState("");
  const [selectedStores, setSelectedStores] = useState([]);
  const [stores, setStores] = useState([]);
  const [storesModal, setStoresModal] = useState(false);
  const [location, setLocation] = useState({
    lat: 29.735577,
    lon: -95.511747,
  });
  useEffect(() => {
    getStoreLocators();
  }, []);

  useEffect(() => {
    if (Object.keys(rowData).length > 0) {
      const filteredKeys = Object.keys(rowData).filter((key) =>
        selectedStores.includes(key)
      );
      const filteredObj = filteredKeys.reduce((acc, key) => {
        acc[key] = rowData[key];
        return acc;
      }, {});

      setRowData(filteredObj);
    }
  }, [selectedStores]);

  const toggleStoresModal = () => {
    setStoresModal(!storesModal);
  };

  async function handleSearch() {
    // return setRowData(tempRes);

    if (selectedStores?.length <= 0) {
      return SnackBar("error", "Please select store first.");
    }

    if (search.split("").length <= 0) {
      return SnackBar("error", "Please enter something to search.");
    }

    const item = search.trim().split(",");
    const no = selectedStores;
    const num = 5;

    const storesData = {};
    setLoading(true);
    for (let i = 0; i < no.length; i++) {
      const items = [];
      for (let k = 0; k < item.length; k++) {
        const formData = new FormData();
        formData.append("item", item[k]);
        formData.append("no", no[i]);
        formData.append("num", num); //change later
        const res = await findItem(formData);

        items.push({ items: res?.data, selected: 0 });
      }
      storesData[no[i]] = items;
    }
    console.log(storesData);
    setRowData(storesData);

    setLoading(false);
  }
  async function getStoreLocators() {
    const formData = new FormData();
    formData.append("lat", location.lat);
    formData.append("lon", location.lon);
    formData.append("num", 3);
    setLoading(true);
    const res = await fetchStores(formData);
    setLoading(false);
    setStores(res.data);
  }

  function handlePurchase(storeID) {
    const data = rowData[storeID];
    if (data.length > 0) {
      const ids = data.map((group) => {
        return group.items[group.selected];
      });
    }
  }

  function getSelectedItems(storeID) {
    const data = rowData[storeID];

    if (data?.length > 0) {
      const ids = data.map((group) => {
        return group.items[group.selected];
      });
      return ids;
    } else return [];
  }

  const calcTotal = useMemo(() => {
    return (storeID) => {
      const items = getSelectedItems(storeID);
      const sum = items.reduce((a, b) => {
        console.log(a, b);
        return a + parseFloat(b?.price);
      }, 0);

      return sum;
    };
  }, [rowData]);

  console.log("RowData", rowData);
  return (
    <>
      <div className="">
        <div className="container center">
          <div className="row gy-2">
            <div className="col-12">
              <div className="input-group input-group-lg">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e?.target?.value)}
                  className="form-control"
                  placeholder="Search Grocery items"
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={toggleStoresModal}
                  type="button"
                >
                  Stores
                  {selectedStores.length > 0 && `:${selectedStores.length}`}
                </button>
                <button onClick={handleSearch} className="input-group-text">
                  <i
                    className="fa fa-search"
                    onClick={handleSearch}
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {loading ? (
            <div className="center">
              <CircularProgress style={{ color: "black" }} />
            </div>
          ) : (
            <div
              className="d-flex justify-content-center"
              style={{ width: "90%", margin: "0 auto" }}
            >
              <div
                className="d-flex flex-row flex-nowrap"
                style={{ overflowX: "auto" }}
                // style={{
                //   display: "flex",
                //   flexWrap: "nowrap",
                // }}
              >
                {Object.keys(rowData).map((storeID, index) => {
                  const itemsGroup = rowData[storeID];
                  console.log(itemsGroup);
                  return (
                    itemsGroup.length > 0 && (
                      <div className="wrapper" key={index}>
                        <ListGroup>
                          <ListGroup.Item>
                            <h5 className="text-center storeName">
                              {stores?.length > 0 &&
                                stores?.find((st) => st.no == storeID).name}
                            </h5>
                          </ListGroup.Item>
                          {itemsGroup.map((product, index) => {
                            return (
                              <ListGroup.Item key={index}>
                                <div className="item-card">
                                  <ItemCard
                                    selected={product.selected}
                                    items={product.items}
                                    index={index}
                                    setRowData={setRowData}
                                    storeID={storeID}
                                    rowData={rowData}
                                  />
                                </div>
                              </ListGroup.Item>
                            );
                          })}
                          <ListGroup.Item>
                            <div className="d-flex justify-content-around align-items-baseline">
                              <Button
                                // className="btn btn-lg btn-block btn-outline-secondary "
                                onClick={() => handlePurchase(storeID)}
                                type="button"
                                // variant="Text"
                              >
                                Purchase
                              </Button>
                              <h5>${Number(calcTotal(storeID)).toFixed(2)}</h5>
                            </div>
                          </ListGroup.Item>
                        </ListGroup>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
      {storesModal && (
        <StoresModal
          stores={stores}
          selectedStores={selectedStores}
          setSelectedStores={setSelectedStores}
          open={storesModal}
          toggleModal={toggleStoresModal}
          loading={loading}
          getStoreLocators={getStoreLocators}
        />
      )}
    </>
  );
};

export default SearchList;
