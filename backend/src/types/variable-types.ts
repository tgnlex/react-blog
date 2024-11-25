type AuthRedirectUrl = '/login';
type AuthRouteOptions = { failureRedirect: string, failureMessage: boolean };
type AuthLoginSQL = `SELECT * FROM users WHERE email = ?`;
type HashKeyLength = 32;
type HashIterCount = 320000;
type HashAlgorithm = 'sha256';
export type {
  AuthRedirectUrl,
  AuthRouteOptions, 
  AuthLoginSQL,
  HashKeyLength, 
  HashIterCount,
  HashAlgorithm
}
