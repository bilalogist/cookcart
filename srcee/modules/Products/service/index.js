import apiClient from "../../../apiClient";
export const findItem = async (data) => {
  return apiClient({
    data,
    endpoint: "shop/finditem2.php",
    type: "post",
  });
};
export const fetchStores = async (data) => {
  return apiClient({
    data,
    endpoint: "shop/storelocator2.php",
    type: "post",
  });
};
