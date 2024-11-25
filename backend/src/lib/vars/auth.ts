import type { AuthRedirectUrl, AuthRouteOptions, AuthLoginSQL } from "../../types";
const auth_redirect: AuthRedirectUrl = '/login';
const auth_options: AuthRouteOptions = { failureRedirect: auth_redirect, failureMessage: true };
const auth_login_stmt: AuthLoginSQL = `SELECT * FROM users WHERE email = ?`;


type AuthVariables = {
  redirect: AuthRedirectUrl;
  options: AuthRouteOptions;
  stmt: AuthLoginSQL;
};

const auth: AuthVariables = {
  redirect: auth_redirect, 
  options: auth_options,
  stmt: auth_login_stmt,
};

export default auth;
export type { AuthVariables }