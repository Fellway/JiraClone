import React from 'react';
import axios from 'axios';

const createColumn = async function (column) {
  console.log(column)
  return axios.post(`/api/columns`, {
    "title": column.columnTitle,
    "order": column.columnOrder,
    "tableId": column.tableId
  }).then(res => {
    return res.data
  })
};

export default createColumn;