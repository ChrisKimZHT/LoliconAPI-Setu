import axios from "axios";

let url = "https://dev.chriskim.cn/api/loli?"

function requestAPI(arg) {
  const response = axios(url + arg);
  return response;
}

export { requestAPI };