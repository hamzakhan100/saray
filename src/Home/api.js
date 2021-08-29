import axios from "axios";
import config from "../config";

async function getBookingsByCity(city) {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.post(
      config.baseUrl + "/listing/search",
      { city },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return result;
  } catch (error) {
    throw error;
  }
}

export default { getBookingsByCity };
