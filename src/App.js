import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Bonus from './components/Bonus/Bonus';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Bonus></Bonus>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
