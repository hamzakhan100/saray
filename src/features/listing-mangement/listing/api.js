import axios from "axios";
import config from "../../../config";

async function addListing(listing) {
  try {
    const token = localStorage.getItem("token");
    return await axios.post(config.baseUrl + "/listing", listing, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function authenticate(user) {
  try {
    return await axios.post(config.baseUrl + "/user/authenticate", user);
  } catch (error) {
    throw error;
  }
}

async function confirmBooking(listingId, bookingDetails) {
  try {
    return await axios.post(
      config.baseUrl + "/listing/booking",
      { listingId, bookingDetails },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  } catch (error) {
    throw error;
  }
}

export default { addListing, authenticate, confirmBooking };
