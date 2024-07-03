
import AllPics from '../AllPics/AllPics';
import Header from '../Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route 
        path='/'
        element = {
          <>
            <Header />
            <AllPics />
          </>
        }
        />
        <Route 
        path='/saved'
        element = {
          <>
            <Header />
            <p>saved</p>
          </>
        }
        />
      </Routes>
    </div>
  );
}

export default App;
