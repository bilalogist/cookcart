import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { findItem, fetchStores } from "./service";
import { CircularProgress } from "@mui/material";
import { ListGroup } from "react-bootstrap";
import ItemCard from "./components/ItemCard";
import StoresModal from "./components/Stores";
const SearchList = (props) => {
  const [loading, setLoading] = useState(false);
  // const [rowData, setRowData] = useState(Data);
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

        items.push(res?.data);
      }
      storesData[no[i]] = items;
    }
    setRowData(storesData);

    setLoading(false);
  }
  async function getStoreLocators() {
    console.log("Hi");
    const formData = new FormData();
    formData.append("lat", location.lat);
    formData.append("lon", location.lon);
    formData.append("num", 3);
    setLoading(true);
    const res = await fetchStores(formData);
    setLoading(false);
    setStores(res.data);
  }

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
                  class="form-control"
                  placeholder="Search Grocery items"
                />
                <button
                  class="btn btn-outline-secondary"
                  onClick={toggleStoresModal}
                  type="button"
                >
                  Stores
                  {selectedStores.length > 0 && `:${selectedStores.length}`}
                </button>
                <button onClick={handleSearch} class="input-group-text">
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
                  const store = rowData[storeID];
                  return (
                    <div
                      style={{
                        minWidth: "300px",
                      }}
                    >
                      <ListGroup key={index}>
                        <ListGroup.Item>
                          <h5 className="text-center storeName">
                            {stores?.length > 0 &&
                              stores.find((st) => st.no == storeID).name}
                          </h5>
                        </ListGroup.Item>
                        {/* {store.map((items, index) => { */}
                        {[0, 1, 2].map((items, index) => {
                          return (
                            <ListGroup.Item key={index}>
                              <div className="item-card">
                                <ItemCard products={items} />
                              </div>
                            </ListGroup.Item>
                          );
                        })}
                      </ListGroup>
                    </div>
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
        />
      )}
    </>
  );
};

export default SearchList;
