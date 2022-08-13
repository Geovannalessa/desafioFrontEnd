import Images from './Images';
import './Charmaleon.css'
 function Charmaleon() {
    return (
      
      <section className="habilidades5">
      <Images />
      <section className="titulo">
        Charmaleon
      </section>
      <section className="quadrado-habilidades5">
        <div>
          fire
        </div>
        
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp5"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack5"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense5"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed5"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Charmaleon;
  
  