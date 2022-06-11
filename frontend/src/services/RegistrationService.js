import axios from "axios";

const registerUser = async function(username, password) {
  return axios.post(`/api/register`, {
    "username": username,
    "password": password
  }).then(res => {
    return res.data
  })
}

export default registerUser;