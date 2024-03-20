import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmBody from "./components/FilmBody";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import NotFound from './components/NotFound'
 import MovieDetails from './components/MovieDetails'
import TvShow from './components/TvShow'


function App() {
  return (
   <BrowserRouter>
      <div className="App">
       
          <MyNav />
        
          <Routes>
       
    
              <Route  path="/TvShow" element={<TvShow/>}/> 

             <Route  path="/"  element={<FilmBody/>} />
             
             
             <Route path="/movie/:filmId" element={<MovieDetails />} />



              {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>     

        
        <footer>
          <MyFooter />
        </footer>
      </div>
   </BrowserRouter>
  );
}

export default App;

