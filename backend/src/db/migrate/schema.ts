
const users = `
  CREATE TABLE users IF NOT EXISTS  (
    username TEXT
    email TEXT,
    password_hash TEXT,
    salt
    age INTEGER, 
    role TEXT
  )
`

const posts = ` 
  CREATE TABLE posts IF NOT EXISTS (
    title TEXT,
    content TEXT, 
    category TEXT
  )
`;

