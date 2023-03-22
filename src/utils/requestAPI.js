import axios from "axios";

let url = "https://s3.chriskim.top/lolicon/?"

function requestAPI(arg) {
  const response = axios(url + arg);
  return response;
}

export { requestAPI };