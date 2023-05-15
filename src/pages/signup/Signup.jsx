import React from 'react'

const Signup = () => {
  return (
    <div className='signup'>
      <h1>Signup</h1>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Signup