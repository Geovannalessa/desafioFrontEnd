import Images from './Images';
import './Squirtle.css'
 function Squirtle() {
    return (
      
      <section className="habilidades7">
      <Images />
      <section className="titulo">
        Squirtle
      </section>
      <section className="quadrado-habilidades7">
        <div>
          water
        </div>
        
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp7"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack7"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense7"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed7"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Squirtle;
  
  