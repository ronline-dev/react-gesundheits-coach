import logo from './logo.svg';
import './App.css';

function Logo() {
  return (
    <img src={logo} className="App-logo" alt="logo" />
  )
}

function App() {
  return (
    <div className="gesundheits-container">
      <header id="gesundheits-header" className="gesundheits-header">
        <Logo />
        <p>
          Edit Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div id="gesundheits-content" className="gesundheits-contentpusher-container">
        <div className="gesundheits-contenpusher">
          <div className="content">
            <h1>
              Ernährung + Fitness<br />
              in Düsseldorf und Umgebung
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
