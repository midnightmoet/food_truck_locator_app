import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Login