import Database from 'better-sqlite3';
import {DB} from '../../constants';
import path from 'path';

function connect(filename: string, options = {}) {
  const filepath = path.resolve(DB, filename)
  const db = new Database(filepath, options);
  return db;
};

export default connect;