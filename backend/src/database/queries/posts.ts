import sql from '../../library/sql/index.ts';
import db from '../db.ts';
const table = "posts"
const service = {
  table: table,
  insert: async(post) => {
    const stmt = await db.prepare(sql.insert(table, post));
    const data = await stmt.run();
    if (!data) return;
    console.log(data);
  },
  find: async (id) => {
    const stmt = await db.prepare(sql.find(table, '?'));
    const data = await stmt.get(id);
    if (!data) return;
    return data;
  },
  all: async () => {
    const posts = [];
    const stmt = await db.prepare(sql.all(table));
    for (const post of stmt.iterate()) {
      if (!post) break;
      posts.push(post);
      continue;
    }
    return posts;
  },
};

export default service;