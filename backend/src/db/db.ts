import connect from "../config/service/sqlite";

const db = connect('auth.db');

function init(db: any) {
  console.info('Initializing db...')
  return db;
}

init(db);

export default db;
