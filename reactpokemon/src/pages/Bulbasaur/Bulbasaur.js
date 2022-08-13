import Images from './Images';
import './Bulbasaur.css'
 function Bulbasaur() {
    return (
      
      <section className="habilidades1">
      <Images />
      <section className="titulo">
        Bulbasaur
      </section>
      <section className="quadrado-habilidades1">
        <div>
          grass
        </div>
        <div>
          poison
        </div>
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp1"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack1"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense1"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed1"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Bulbasaur;
  
  