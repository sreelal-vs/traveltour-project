import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import Header from './Component/Header';
import "./Styles/app.css"


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header/>
        <Routes>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

