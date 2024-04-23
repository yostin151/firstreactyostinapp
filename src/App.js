import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yostin welcomes you to my react app.
        </p>
        <a
          className="App-link"
          href="https://yostinpoveda.online/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CLICK here to Go to my other website built with js, html5 and css, hosted via domain and ipv4
        </a>
      </header>
    </div>
  );
}

export default App;
