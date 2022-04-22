const {getTasksByColumnId} = require("../repository/TableRepository");
const {getAllTables, getColumnsByTableId} = require('../repository/TableRepository')

async function fetchTablesWithColumns() {
  const tables = await getAllTables().then(tables => {
    return tables
  });
  
  let tablesWithColumns = [];
  
  for (const table of tables) {
    table.columns = await getColumnsByTableId(table.id).then(columns => {
      return columns
    });
    
    for (const column of table.columns) {
      column.tasks = await getTasksByColumnId(column.id).then(tasks => {
        return tasks;
      })
    }
    tablesWithColumns.push(table);
  }
  return tablesWithColumns;
}

module.exports = {fetchTablesWithColumns}