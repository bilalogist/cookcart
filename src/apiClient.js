import axios from "axios";
import { SnackBar } from "./components";
// const API_URL = window.location.origin;
// const API_URL = "http://cookcart.net:82";
const API_URL = process.env.REACT_APP_API_URL;

const apiClient = async ({
  endpoint,
  type,
  data,
  isPrivate,
  params,
  isBlob,
  noRedirect = false,
  headers,
}) => {
  const response = {
    data: null,
    error: false,
    errors: {},
  };

  const config = {
    method: type,
    url: API_URL + "/" + endpoint,
    params,
    data,
    ...(isBlob && { responseType: "blob" }),
    ...(isPrivate && {
      headers: {
        authorization: "getToken()",
      },
    }),
  };
  console.log(config.url);

  try {
    const res = await axios(config);

    response.data = res?.data;
    response.error = false;
  } catch (error) {
    if (isBlob) {
      // When the response type is set to BLOB response data attribute is set to blob object
      // here we are converting blob to json object incase of error to read error message
      error.response.data = JSON.parse(await error?.response?.data.text());
    }

    if (error.isAxiosError && !error?.response) {
      SnackBar("error", "🤷 Oops! Server not responding.");
    } else if (error?.response?.status === 401) {
      // logout();
    } else if (error?.response?.status >= 500) {
      SnackBar("error", "Internal server error");
    } else if (error?.response?.status === 404) {
      SnackBar("error", "Not Found");
      // if (!noRedirect) {
      //     history.push('/app/not-found');
      // }
    } else if (error?.response?.status === 403) {
      SnackBar("error", "Not Authorized");
      // if (!noRedirect) {
      //     history.push('/app/dashboard');
      // }
    } else {
      SnackBar("error", error?.response?.data?.message);
    }
    response.error = true;
    response.errors = error?.response?.data?.data?.errors
      ? error?.response?.data?.data?.errors
      : [];
  }
  return response;
};

export default apiClient;
