import AuthService from '@/modules/auth';
import passport from 'passport';
const auth = new AuthService();

passport.use(auth.local);

passport.serializeUser(auth.serialize)
passport.deserializeUser(auth.deserialize);


export { passport };