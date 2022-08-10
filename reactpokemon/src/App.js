// import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Images from './components/Images';
import Bulbasaur from './components/Bulbasaur';

// o body
function App() {
  return (
    <div className="App">
      <section className="catalogo">
        <h2>POKEMONS</h2>
        <section>
        
            <article className="nomes" >
              <Link to="/bulbasaur">Bulbasaur</Link>
              <Routes>
                <Route path='/bulbasaur' element={Bulbasaur} />
              </Routes>
            </article>


          <article className="nomes">
            <a href='#'>Ivysaur</a>
          </article>
          <article className="nomes">
            <a href='#'>Venusaur</a>
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

      <section className="habilidades">
        <Images />
        <section className="titulo">
          Rattata
        </section>
        <section className="quadrado-habilidades">
          <div>
            grass
          </div>
          <div>
            grass
          </div>
        </section>
        <article className="powers">
          <table>
            <tr>
              hp
              <td>
                <td className="hp"></td>
              </td>
            </tr>
            <tr>
              attack
              <td>
                <td className="attack"></td>
              </td>
            </tr>
            <tr>
              defense
              <td>
                <td className="defense"></td>
              </td>
            </tr>
            <tr>
              speed
              <td>
                <td className="speed"></td>
              </td>
            </tr>
          </table>
        </article>
      </section>
    </div>
  );
}

export default App;
