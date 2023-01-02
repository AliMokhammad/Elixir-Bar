import axiosClient, { suffix } from "./axiosClient";

const getSearchParams = (params = {}) =>
  Object.entries(params)
    .map((pair) => pair.map(encodeURIComponent).join("="))
    .join("&");

const getFullEndpoint = ({ endpoint, params }) => {
  const searchParams = getSearchParams(params);
  let url = `${suffix}/${endpoint}`;
  if (searchParams) url = `${url}?${searchParams}`;
  return url;
};

const getData = async ({ endpoint, params }) => {
  return axiosClient
    .get(getFullEndpoint({ endpoint, params }))
    .then((response) => ({ data: response.data, success: true }))
    .catch((err) => {
      console.log({ err });
      return { data: null, success: false };
    });
};

export { getData };
