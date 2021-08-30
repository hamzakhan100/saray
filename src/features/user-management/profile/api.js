import axios from "axios";
import config from "../../../config";

async function getBlogs() {
  try {
    const token = localStorage.getItem("token");
    return await axios.get(config.baseUrl + "/blog", {
      headers: { Authorization: "Bearer " + token },
    });
  } catch (error) {
    alert(error);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getBlogs };
