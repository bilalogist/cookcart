import { useEffect, useState } from "react";
import { findItem, fetchStores } from "./service";
import { Button } from "react-bootstrap";
import StoresModal from "./components/Stores";
const Products = () => {
  const [search, setSearch] = useState("");
  const [stores, setStores] = useState([]);
  const [selectedStores, setSelectedStores] = useState([]);
  const [productModal, setProductModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    lat: 29.735577,
    lon: -95.511747,
  });

  async function handleSearch() {
    const formData = new FormData();
    formData.append("item", search);
    formData.append("no", 2066);
    formData.append("num", 5);
    const res = await findItem(formData);
    console.log(res);
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
  const getCurrentLocation = () => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        setLocation({ lat, lon });
      });
  };

  useEffect(() => {
    console.log("hi");
    // getCurrentLocation();
    getStoreLocators();
  }, []);

  const toggleProductModal = () => {
    setProductModal(!productModal);
  };
  return (
    <>
      <h3>Search Grocery</h3>
      <div className="container">
        <div className="row gy-2">
          <div className="col-12">
            <div className="search-box">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.type === "blur") {
                    handleSearch();
                  }
                }}
                type="text"
              />
              <i
                className="fa fa-search"
                onClick={handleSearch}
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <div className="col-12 ">
            <Button
              onClick={toggleProductModal}
              variant="secondary"
              className="me-2"
            >
              Stores
            </Button>
            <Button onClick={handleSearch} variant="success">
              Search
            </Button>
          </div>
        </div>
      </div>
      {productModal && (
        <StoresModal
          stores={stores}
          selectedStores={selectedStores}
          setSelectedStores={setSelectedStores}
          open={productModal}
          toggleModal={toggleProductModal}
          loading={loading}
        />
      )}
    </>
  );
};

export default Products;
