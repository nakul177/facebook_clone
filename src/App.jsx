import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Posts } from './Components/Posts/Posts';

function App() {
  return (
    <div className="App">
    <Header/>
    <Posts/>
    </div>
  );
}

export default App;
