import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-a15b2.firebaseio.com/",
});

export default instance;
