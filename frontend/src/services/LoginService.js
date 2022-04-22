import React from 'react';
import axios from 'axios';

const loginUser = async function (credentials) {
  return axios.post(`/api/login`, {
    "username": credentials.username,
    "password": credentials.password
  }).then(res => {
    return res.data
  })
};

export default loginUser;