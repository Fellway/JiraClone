import React from 'react';
import axios from 'axios';

const createTask = async function (task) {
  return axios.post(`/api/tasks`, {
    "title": task.title,
    "description": task.description,
    "columnId": task.columnId
  }).then(res => {
    return res.data
  })
};

export default createTask;