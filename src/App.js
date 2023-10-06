import './App.css';
import MoviePage from './pages/MoviePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<MoviePage/>}/>
        <Route path='/movies' element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
