import axios from "axios";
const instance = axios.create({
  baseURL: "https://us-central1-challenge-609ba.cloudfunctions.net/api",
});

export default instance;

// http://localhost:5001/challenge-609ba/us-central1/api
