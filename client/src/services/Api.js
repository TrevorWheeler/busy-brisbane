import axios from "axios";
require("now-env");
export default () => {
  return axios.create({
    baseURL: "https://busy-brisbane-server-m12gtcgxk.now.sh/",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
};
