import axios from "axios";

let url = "https://nahida.cc/lolicon/?"

function requestAPI(arg) {
  const response = axios(url + arg);
  return response;
}

export { requestAPI };