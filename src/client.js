import axios from "axios";

export const client = axios.create({
  baseURL:"http://localhost:5005"
});

/* client.interceptors.request.use((request) => {
  const token = localStorage.getItem("token")
  if(token) {
    request.headers.Authorization = token
  } 
  return request
})
 */