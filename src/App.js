import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import NavBreak from './Component/NavBreak';
import Header from './Component/Header';
import Main from './Component/Main';
import HeaderBreak from './Component/HeaderBreak';

function App() {
  return (
    <div>
      <Navbar />
      <NavBreak />
      <Header />
      <HeaderBreak />
      <Main />
    </div>
  );
}

export default App;
