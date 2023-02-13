import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login.jsx";

const INIT_STATE = {
  cartTotal: 0,
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
