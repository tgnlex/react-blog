

const insert = (table, data) => `
  INSERT INTO ${table} (${data})
`;

const all = table => `SELECT * FROM ${table}`;

const find = (table, id) => `
  SELECT * FROM ${table} WHERE ID = ${id}
`;
const remove = (table, id) => `
  DELETE FROM ${table} WHERE ID = ${id}
`;


const sql = {
  insert: insert,
  remove: remove,
  find: find, 
  all: all
};

export default sql;