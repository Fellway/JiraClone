const {client} = require('../../config/DbConfig')

async function getAllTables() {
  return (await client.query(`SELECT * FROM public.tables`)).rows
}

async function getColumnsByTableId(id) {
  return (await client.query(`SELECT * FROM public.columns WHERE table_id = '${id}' ORDER BY priority asc`)).rows
}

async function getTasksByColumnId(id) {
  return (await client.query(`SELECT * FROM public.tasks WHERE column_id = '${id}'`)).rows
}

module.exports = {getAllTables, getColumnsByTableId, getTasksByColumnId}