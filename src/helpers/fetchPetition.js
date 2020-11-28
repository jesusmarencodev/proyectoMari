import { URL_BASE } from "../globales/url";

export const fetchPetitionGet = (endpoint, method = 'GET') =>{
  const url = `${URL_BASE}${endpoint}`;

   return fetch(url,{
    method,
    headers : {
      'Content-Type':'application/json'
    },
    //body : JSON.stringify(data)
  });
}

export const fetchPetitionOthers = (endpoint, data, method = 'GET') =>{
  const url = `${URL_BASE}${endpoint}`;
  console.log(url)
  console.log(data)
  console.log(method)

   return fetch(url,{
    method,
    headers : {
      'Content-Type':'application/json'
    },
    body : JSON.stringify(data)
  });
}