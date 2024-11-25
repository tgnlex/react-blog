import auth from './auth';
import crypto from './crypto'
import type {CryptoVariables} from './crypto';
type Variables = {
  auth: any;
  crypto: CryptoVariables;
}
const v: Variables = {
  auth: auth,
  crypto: crypto
} as const;
export default v;