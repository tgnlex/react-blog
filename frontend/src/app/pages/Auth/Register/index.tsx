import { Main } from '../../../styled';


function Register () {
  return (
    <Main>
      <h1>Create Account!</h1>
      <form className="registehr-form">
        <div id="group-username" className="control-group">
          <label htmlFor="username">Username</label>
          <input name="username" />
        </div>
        <div id="group-email" className="control-group">
          <label htmlFor="email">Email</label>
          <input name="email"/>
        </div>
        <div id="group-password" className="control-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <label htmlFor="confirm">Confirm Pasword</label>
          <input type="password" name="confirm" />
        </div>
        <div id="group-age" className="control-group">
          <label htmlFor="age">Enter your Age</label>
          <input type="number" name="age" />
        </div>
      </form>
    </Main>
  )
}

export default Register;