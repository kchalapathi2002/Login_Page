import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
    <Router>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
