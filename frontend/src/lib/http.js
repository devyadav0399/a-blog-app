import axios from "axios";

const domain =
  import.meta.env.MODE === "production" ? "" : "http://localhost:3000";

const http = (url, { method = "GET", data = undefined }) => {
  return axios({
    url: `${domain}${url}`,
    method,
    data,
  });
};

const get = (url, opts = {}) => http(url, { ...opts });
const post = (url, opts = {}) => http(url, { method: "POST", ...opts });
const put = (url, opts = {}) => http(url, { method: "PUT", ...opts });
const deleteData = (url, opts = {}) => http(url, { method: "DELETE", ...opts });

const methods = {
  get,
  post,
  put,
  delete: deleteData,
};

export default methods;
