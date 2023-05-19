import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div>
          <header>
        <Link to="/" className="logo">Musix</Link>
        <nav>
          <Link>Contact Us</Link>
          <Link to="SignUp" className="signup">Sign Up</Link>
        </nav>
      </header>
      <form action="">
        <p>Welcome to Musix! Sign up for a unique experience.</p>
        <input type="text" placeholder="Username" required/>
        <input type="email" placeholder="Email address" required/>
        <input type="password" placeholder="Enter password" required/>
        <input type="password" placeholder="Confirm password" required/>
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUp