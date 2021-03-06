import axios from "axios";

import config from "../../config";

async function getMessages(conversationId) {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.get(config.baseUrl + "/chat/" + conversationId, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return result.data;
  } catch (error) {
    throw error;
  }
}

async function getAllConversations() {
  try {
    const token = localStorage.getItem("token");
    const result = await axios.get(config.baseUrl + "/chat/all", {
      headers: { Authorization: "Bearer " + token },
    });
    return result;
  } catch (error) {
    throw error;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getMessages, getAllConversations };
