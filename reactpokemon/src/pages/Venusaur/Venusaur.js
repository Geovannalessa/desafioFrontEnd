import Images from './Images';
import './Venusaur.css'
 function Venusaur() {
    return (
      
      <section className="habilidades3">
      <Images />
      <section className="titulo">
        Venusaur
      </section>
      <section className="quadrado-habilidades3">
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
              <td className="hp3"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack3"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense3"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed3"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Venusaur;
  
  