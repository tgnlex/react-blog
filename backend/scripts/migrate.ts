import db from '../src/database/db';
import schema from '../src/database/schema/index';
function migrate() {
  db.exec(schema.posts);
  db.exec(schema.subscribers);
};

migrate();
