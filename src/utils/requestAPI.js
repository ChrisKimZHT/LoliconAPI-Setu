import axios from "axios";

let url = "https://s1.chriskim.top/loli?"

function requestAPI(arg) {
  const response = axios(url + arg);
  return response;
}

export { requestAPI };