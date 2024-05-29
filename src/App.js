import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';

function App() {
  return (
    <>
    <Navbar name ='Any Heading Here'/>
    <div className="coantainer my-5">
       <MainSection/>
    </div>
   
    </>
  );
}

export default App;
