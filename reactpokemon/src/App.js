import { Routes, Route, Link } from 'react-router-dom';
import './App.css';


import Home from './pages/Home/Home';
import Bulbasaur from './pages/Bulbasaur/Bulbasaur';
import Ivysaur from './pages/Ivysaur/Ivysaur';

// o body
function App() {
  return (
    <div className="App">
      <section className="catalogo">
        <h2> <Link exact="true" to="/">POKEMONS</Link>
        </h2>
        <section>
          <article className="nomes" >
            <Link exact="true" to="/bulbasaur">Bulbasaur</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/ivysaur">Ivysaur</Link>
          </article>

          <article className="nomes">
            <a href='http://localhost:3000/ivysaur'>Venusaur</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmeleon</a>
          </article>
          <article className="nomes">
            <a href='#'>Charizard</a>
          </article>
          <article className="nomes">
            <a href='#'>Squirtle</a>
          </article>
          <article className="nomes">
            <a href='#'>Wartortle</a>
          </article>
          <article className="nomes">
            <a href='#'>Blastoise</a>
          </article>
          <article className="nomes">
            <a href='#'>Caterpie</a>
          </article>
          <section className="back_next">
            <button>BACK</button>
            <button className="next">NEXT</button>
          </section>
        </section>
      </section>
          <Routes>
            <Route path='/' exact='true' element={<Home />}></Route>
            <Route path='/bulbasaur' element={<Bulbasaur />}></Route>
            <Route path='/ivysaur' element={<Ivysaur />}></Route>
          </Routes>
     
    </div>

  );
}

export default App;
