import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import "./Styles/app.css"
import Home from './pages/Home';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

