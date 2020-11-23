import axios from "axios";
const KEY = "AIzaSyCZmUFOC9myjcOXHkR16G10LVee6SQfYs4";

export const baseParams = {
  part: "snippet",
  maxResult: 10,
  key: KEY,
};
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
