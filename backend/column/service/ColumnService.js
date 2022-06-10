const {getColumnsByTableId, pumpColumnPriority, createNewColumn} = require('../repository/ColumnRepository');

async function addNewColumn(tableId, priority, title) {
  console.log(tableId)
  const columns = await getColumnsByTableId(tableId).then(columns => {
    return columns;
  });
  
  let filteredColumns = columns.filter(column => column.priority >= priority);
  for (const column of filteredColumns) {
    await pumpColumnPriority(column.id);
  }
  
  await createNewColumn(title, tableId, priority);
}

module.exports = {addNewColumn}