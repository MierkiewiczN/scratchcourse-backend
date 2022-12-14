const axios = require("axios");

const post = async (message) => {
  return await axios.post(message.route, message.body).catch(function (error) {
    console.log(error);
  });
};

const postWithCorrectHeader = async(url, msg) => {
  const requestConfig = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await axios.post(
    url,
    msg,
    requestConfig
  );
  return res;
};

const postWithAuthorization = async (message, token) => {
  let config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return await axios
    .post(message.route, message.body, config)
    .catch(function (error) {
      console.log(error);
    });
};

const put = async (message) => {
  return await axios.put(message.route, message.body).catch(function (error) {
    console.log(error);
  });
};

const get = async (message) => {
  return await axios.get(message.route).catch(function (error) {
    console.log(error);
  });
};

const deleteReq = async (message) => {
  return await axios.delete(message.route).catch(function (error) {
    console.log(error);
  });
};

const message = (route, body) => {
  return { route: route, body: body };
};

module.exports = { post, postWithAuthorization, put, get, deleteReq, message, postWithCorrectHeader };
