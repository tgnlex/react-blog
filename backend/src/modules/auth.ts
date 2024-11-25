import {Strategy as LocalStrategy} from 'passport-local';
import verify from '../lib/verify';

// temporary 
function authenticateUserByEmail(email, password) {
  console.info(`Email: `, email);
  console.info(`Password: `, password);
}
class AuthService {
  public local = new LocalStrategy(verify);
  public authenticate = async (email: string, password: string, done) => {
    console.info('local');
    try {
      const user = await authenticateUserByEmail(email, password)
      return done(null, (user));
    } catch (error) {
      return done(error);
    }
  } 
  public serialize(user: any, cb: any) { 
    process.nextTick(function() {
      return cb(null, {
        id: user.id, 
        username: user.username,
        role: user.role
      })
    })
  }
  public deserialize(user: any, cb: any) {
    process.nextTick(function() {
      return cb(null, user);
    })
  }   
};

export default AuthService;