const {client} = require('../../config/DbConfig')

async function getColumnsByTableId(id) {
  return (await client.query(`SELECT * FROM public.columns WHERE table_id = '${id}' ORDER BY priority DESC`)).rows
}

async function pumpColumnPriority(column_id) {
  await client.query(`UPDATE public.columns SET priority = priority + 1 WHERE id = '${column_id}'`)
}

async function createNewColumn(title, tableId,priority) {
  console.log(title, tableId, priority)
  await client.query(`INSERT INTO public.columns ("name", table_id, priority) VALUES('${title}', ${tableId}, ${priority})`)
}

module.exports = {pumpColumnPriority, getColumnsByTableId, createNewColumn}