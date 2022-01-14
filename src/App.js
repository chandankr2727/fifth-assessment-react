import './App.css';
import Home from './Components/Home';
import StudentList from './Components/StudentList';
import About from './Components/About';
import Error from './Components/Error';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import StudentContextProvider from './Components/StudentContext';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='header'>
          <Link to="" className='nav'>Home</Link>
          <Link to="/students" className='nav'>Students</Link>
          <Link to="/about" className='nav'>About</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          
          <Route exact path="/students/*" element={<StudentContextProvider> <StudentList /> </StudentContextProvider>} />
          
          <Route exact path="/about" element={<About />} />
          <Route  element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
