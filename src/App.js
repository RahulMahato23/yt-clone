import './App.css';
import {Routes,BrowserRouter,Route} from "react-router-dom";
import AddVideoCard from './pages/AddVideoCard';
import Home from './pages/Home';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AddVideoCard" element={<AddVideoCard />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
