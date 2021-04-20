import logo from './logo.svg';
import axios from "axios";
import './App.css';

function App() {
  // fetch('http://realworld-docker.com/api/posts')
  //     .then(response => response.json())
  const makeRequest = () => {
    axios.get('/api/testWithAuth')
        .then(response => console.log(response));
    console.log("Request")
  };

  //     .then(data => setState({posts: data}));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. HELOOO!!WorlDDDDDDDDDD!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={makeRequest}>click me NOW!!!!</button>
      </header>
    </div>
  );
}

export default App;
