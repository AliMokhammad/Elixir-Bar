import axios from "axios";
import SettingsActions from "redux/actions/settings";
const { setLoading } = SettingsActions;

const axiosClient = axios.create({
  baseURL: `https://www.thecocktaildb.com`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const switchLoader = (loading) => {
  window.dispatch(setLoading({ loading }));
};

axiosClient.interceptors.request.use(
  function (config) {
    switchLoader(true);
    return config;
  },
  function (error) {
    switchLoader(false);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    switchLoader(false);
    return response;
  },
  function (error) {
    switchLoader(false);
    return Promise.reject(error);
  }
);

export const suffix = "api/json/v1/1";
export default axiosClient;
