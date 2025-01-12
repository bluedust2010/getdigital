import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './shared/Navbar/Navbar';
import Home from './screens/Home/Home';
import Footer from './shared/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
