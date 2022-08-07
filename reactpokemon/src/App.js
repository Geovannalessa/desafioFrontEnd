//  METAS DO HTML. IMPORTAÇÕES
import logo from './logo.svg';
import './App.css';
import Images from './components/Images';


// o body
function App() {
  return (
    //TUDO FICA EM DENTRO DA DIV
    <div className="App">
      <section className="catalogo">
        <h2>POKEMONS</h2>
        <section>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <article className="nomes">
            <a href='#'>Charmander</a>
          </article>
          <button>BACK</button>
          <button>NEXT</button>

        </section>
      </section>

        <section className="habilidades">
          <Images/>
          <section className= "titulo">
          Rattata
          </section>
          <section className= "quadrado-habilidades">
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
