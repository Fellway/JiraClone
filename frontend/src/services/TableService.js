import React from 'react';
import axios from 'axios';

const fetchTables = async function () {
  return axios.get('/api/tables').then(res => {
    return res.data
  })
};

export default fetchTables;