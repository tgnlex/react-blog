import { Main } from '../../../styled';




function Login() {
  return (
    <Main>
      <h1>Login!</h1>
      <form id="login-form">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <label htmlFor="password">Password</label>
        <input name="password" type='password' />
        <label htmlFor="remember">Remember my Account.</label>
        <input name="remember" type="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </Main>
  )
}

export default Login;