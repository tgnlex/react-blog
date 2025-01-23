const posts = ` 
  CREATE TABLE posts IF NOT EXISTS (
    id PRIMARY KEY AUTOINCREMENT NOY NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL, 
    category TEXT
  )
`;
const subscribers = `
  CREATE TABLE subscribers IF NOT EXISTS (
    id PRIMARY KEY AUTOINCREMENT NOT NULL,
    email TEXT NOT NULL,
  )
`
const schema = {
  posts: posts,
  subscribers: subscribers
};

export default schema;