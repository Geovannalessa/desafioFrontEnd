import { Routes, Route, Link } from 'react-router-dom';
import './App.css';


import Home from './pages/Home/Home';
import Bulbasaur from './pages/Bulbasaur/Bulbasaur';
import Ivysaur from './pages/Ivysaur/Ivysaur';
import Venusaur from './pages/Venusaur/Venusaur';
import Charmander from './pages/Charmander/Charmander';
import Charmaleon from './pages/Charmaleon/Charmaleon';
import Charizard from './pages/Charizard/Charizard';
import Squirtle from './pages/Squirtle/Squirtle';
import Wartortle from './pages/Wartortle/Wartortle';
import Blastoise from './pages/Blastoise/Blastoise';
import Pikachu from './pages/Pikachu/Pikachu';
import Next from './pages/Next/Next';

function App() {
<Routes>
        <Route path='/next' element={<Next />}></Route>
      </Routes>
  return (

    <div className="App">
      <section className="catalogo">
        <h2>
          <Link exact="true" to="/">POKEMONS</Link>
        </h2>
        <section>
          <article className="nomes" >
            <Link exact="true" to="/bulbasaur">Bulbasaur</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/ivysaur">Ivysaur</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/venusaur">Venusaur</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/charmander">Charmander</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/charmaleon">Charmaleon</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/charizard">Charizard</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/squirtle">Squirtle</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/wartortle">Wartortle</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/blastoise">Blastoise</Link>
          </article>

          <article className="nomes">
            <Link exact="true" to="/pikachu">Pikachu</Link>
          </article>

          <section className="back_next">

            <button className="next">
            <a href='http://localhost:3000/next'>
                NEXT
            </a>
            </button>
          </section>

        </section>
      </section>
      <Routes>
        <Route path='/' exact='true' element={<Home />}></Route>
        <Route path='/bulbasaur' element={<Bulbasaur />}></Route>
        <Route path='/ivysaur' element={<Ivysaur />}></Route>
        <Route path='/venusaur' element={<Venusaur />}></Route>
        <Route path='/charmander' element={<Charmander />}></Route>
        <Route path='/charmaleon' element={<Charmaleon />}></Route>
        <Route path='/charizard' element={<Charizard />}></Route>
        <Route path='/squirtle' element={<Squirtle />}></Route>
        <Route path='/wartortle' element={<Wartortle />}></Route>
        <Route path='/blastoise' element={<Blastoise />}></Route>
        <Route path='/pikachu' element={<Pikachu />}></Route>
      </Routes>
    </div>

  );
}

export default App;