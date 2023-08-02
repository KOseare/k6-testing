import http from "k6/http";

export const options = {
  duration: '20s',
  vus: 1
}

export default function () {
  let response = http.get('https://api.escuelajs.co/api/v1/products')
}