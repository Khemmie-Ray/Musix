import TrendingMusic from "./components/TrendingMusic"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <header>
        <Link to="/" className="logo">Musix</Link>
        <nav>
          <Link>Contact Us</Link>
          <Link to="SignUp">Sign Up</Link>
        </nav>
      </header>
      <main>
        <div>
          <h1>Let makes this more interesting</h1>
          <p>Create your own custom playlist</p>
          <button>create playlist</button>
        </div>
        <TrendingMusic />
      </main>
      <footer>
        <p>&copy; Musix 2023</p>
      </footer>
    </div>
  )
}

export default Home;