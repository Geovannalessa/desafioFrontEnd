import Images from './Images';
import './Blastoise.css'
 function Blastoise() {
    return (
      
      <section className="habilidades9">
      <Images />
      <section className="titulo">
      Blastoise
      </section>
      <section className="quadrado-habilidades9">
        <div>
          water
        </div>
        
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp9"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack9"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense9"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed9"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Blastoise;
  
  