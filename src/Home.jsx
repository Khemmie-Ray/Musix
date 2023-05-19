import TrendingMusic from "./components/TrendingMusic"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <header>
        <Link to="/" className="logo">Musix</Link>
        <nav>
          <Link c>Contact Us</Link>
          <Link to="SignUp" className="signup">Sign Up</Link>
        </nav>
      </header>
      <main>
        <div className="content">
          <h1>Let makes this more interesting!</h1>
          <p>Create your own custom playlist</p>
          <Link to="/signup">create playlist.</Link>
        </div>
        <div className="music-container">
        <TrendingMusic />
        </div>
      </main>
      <footer>
        <p>&copy; Musix 2023</p>
      </footer>
    </div>
  )
}

export default Home;