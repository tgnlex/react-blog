
const addr = (host, port, prefix = "http") => 
  `${prefix}://${host}:${port}/`;

export {
  addr
}