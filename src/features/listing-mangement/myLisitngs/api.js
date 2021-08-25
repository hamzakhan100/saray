import axios from "axios";
import config from "../../../config";

async function fetchListings() {
  try {
    const token = localStorage.getItem("token");
    return await axios.get(config.baseUrl + "/listing/hosted", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function listingDetail(listingId) {
  try {
    const token = localStorage.getItem("token");
    return await axios.get(config.baseUrl + `/listing/${listingId}`, {
        headers: {
            Authorization: "Bearer " + token,
          },
    });
  } catch (error) {
    throw error;
  }
}

export default { fetchListings, listingDetail };
