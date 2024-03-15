import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import FilmBody from "./components/FilmBody";


function App() {
  return (
    <div className="App">
      <header>
        <MyNav />
      </header>
      <section>
     
      </section>
      <main>
      
        <FilmBody/>
      </main>
     
      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;

