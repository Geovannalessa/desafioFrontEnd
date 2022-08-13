import Images from './Images';
import './Blastoise.css'
 function Bulbasaur() {
    return (
      
      <section className="habilidades">
      <Images />
      <section className="titulo">
        Bulbasaur
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
    );
  }
  export default Bulbasaur;
  
  