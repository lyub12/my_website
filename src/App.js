import {Switch, Route, Link} from 'react-router-dom'
import logo from './tanuki.png';
import './App.css';

import Home from './Home'
import About from './About'
import Blog from './Blog'
import LiveStream from './Livestream';

function App() {
  return (
    <div className="App">


      {/* Header */}
      <header className="main-header">
        <h2 className="title">Lyub12</h2>
        <nav className="main-header-nav">
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Blog</Link>
          <Link>LiveStream</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/livestream" component={Livestream} />
      </Switch>

      {/* Intro section */}
      <section className="intro-section">

        <div>
          <h3>Welcome to my site</h3>
          <p>Its still a work in progress but I looking forard to completing this along with a lot of ther thigns as well.</p>
        </div>
        
        <div className="intro-image-container">
          <img src={logo} alt="logo" />
        </div>

      </section>




    </div>
  );
}

export default App;
