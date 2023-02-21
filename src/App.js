import './App.css';
import Rent from './Rent';
import Practice from './Practice';
import Upload from './Upload';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/rent" element={< Rent />} />
        <Route path="/practice" element={< Practice />} />
        <Route path="/upload" element={< Upload />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
