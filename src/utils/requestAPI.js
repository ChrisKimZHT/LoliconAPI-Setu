import axios from "axios";

let url = window.Config.apiURL;

function requestAPI(arg) {
  const response = axios(url + arg);
  return response;
}

export { requestAPI };