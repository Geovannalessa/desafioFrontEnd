import Images from './Images';
import './Ivysaur.css'
 function Ivysaur() {
    return (
      
      <section className="habilidades2">
      <Images />
      <section className="titulo">
        Ivysaur
      </section>
      <section className="quadrado-habilidades2">
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
              <td className="hp2"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack2"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense2"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed2"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Ivysaur;
  
  