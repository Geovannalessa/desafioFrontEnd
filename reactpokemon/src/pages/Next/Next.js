import './Next.css'

import { Routes, Route, Link } from 'react-router-dom';

import Home from '../Home/Home';
import Caterpie from '../Caterpie/Caterpie';

function Next() {
    return (
        <div className="App">
            <section className="catalogo">
                <h2>
                    <Link exact="true" to="/">POKEMONS</Link>
                </h2>
                <section>
                    <article className="nomes" >
                        <Link exact="true" to="/caterpie">Caterpie</Link>
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/ivysaur">Ivysaur</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/venusaur">Venusaur</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/charmander">Charmander</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/charmaleon">Charmaleon</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/charizard">Charizard</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/squirtle">Squirtle</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/wartortle">Wartortle</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/blastoise">Blastoise</Link> */}
                    </article>

                    <article className="nomes">
                        {/* <Link exact="true" to="/pikachu">Pikachu</Link> */}
                    </article>

                    <section className="back_next">
                        <button>BACK</button>
                        <button className="next">NEXT</button>
                    </section>

                </section>
            </section>
            <Routes>
                <Route path='/' exact='true' element={<Home />}></Route>
                <Route path='/caterpie' exact='true' element={<Caterpie />}></Route>
            </Routes>
        </div>
    )
}
export default Next;