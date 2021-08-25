import axios from "axios";
import config from "../../config";

async function register(user) {
  try {
    return await axios.post(config.baseUrl + "/user/register", user);
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

export default { register, authenticate };
