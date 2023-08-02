import http from "k6/http";

export const options = {
  stages: [{
    duration: '10s',
    target: 5
  }, {
    duration: '15s',
    target: 200
  }]
}

export default function () {
  let response = http.get('https://api.escuelajs.co/api/v1/products')
}