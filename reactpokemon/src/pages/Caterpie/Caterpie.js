import Images from './Images';
import './Caterpie.css'
 function Caterpie() {
    return (
      
      <section className="habilidades11">
      <Images />
      <section className="titulo">
      Caterpie
      </section>
      <section className="quadrado-habilidades11">
        <div>
          water
        </div>
        
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp11"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack11"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense11"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed11"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Caterpie;
  
  