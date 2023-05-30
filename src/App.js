import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/navbar/Navbar';
import { Banner } from './components/banner/Banner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
