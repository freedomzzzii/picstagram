import './App.scss';
import 'animate.css';

// components
import Navbar from './components/navbar/Navbar';
// pages
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Home />
    </div>
  );
}

export default App;
