import Images from './Images';
import './Charizard.css'
 function Charizard() {
    return (
      
      <section className="habilidades6">
      <Images />
      <section className="titulo">
      Charizard
      </section>
      <section className="quadrado-habilidades6">
        <div>
          fire
        </div>
        
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp6"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack6"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense6"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed6"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Charizard;
  
  