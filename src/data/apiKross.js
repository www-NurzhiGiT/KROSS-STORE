import axios from "axios";

const apiKross = axios.create({
  //   baseURL: "https://api.krossstore.com/v1",
  baseURL: "https://api.escuelajs.co/api/v1",
  headers: {
    // "Authorization": "Bearer YOUR_API_KEY"
    "Content-Type": "application/json",
  },
});

export default apiKross;
