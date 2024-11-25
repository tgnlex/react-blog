import crypto from 'node:crypto';
import v from '../lib/vars/index.ts';
import type { HashFn } from '../types/index.ts';
let vars = v.crypto;

const checkHash: HashFn =  (password: string, user: any, cb: (error: Error, hashed_password: Buffer) => any): void => {
  return crypto.pbkdf2(password, user.salt, vars.iters, vars.len, vars.alg, cb);
}
  
export default checkHash;
