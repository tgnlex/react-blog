import passport from 'passport';
import checkHash from '../utils/hash';
import {timingSafeEqual} from 'crypto';

const db = require('../../database/db');
import type {Hash } from '../utils/hash';

async function verify(email: string, password: string, cb: any) {
  await db.get('SELECT * FROM users WHERE email = ?', [ email ],async function(err: any, user: any) {
    if (err) {return cb(err); }
    if (!user) { return cb(null, false, { message: 'Incorrect email or password'})}
    await checkHash(password, user, function(err: any, hashedPassword: Hash) {
      if (err) { return cb(err) }
      if (!timingSafeEqual(user.hashed_password, hashedPassword)) {
        return cb(null, false, {message: 'Incorrect username or password'})
      }
      return cb(null, user)
    })
  })
}

export default verify;