import logo from './logo.svg';
import './App.css';
import AboutPage  from './page/AboutPage'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage  from './page/HomePage';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound}/> */}
       
      </Routes>
    </BrowserRouter>

  );
}

export default App;
