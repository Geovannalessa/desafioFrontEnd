import Images from './Images';
import './Pikachu.css'
 function Pikachu() {
    return (
      <section className="habilidades10">
      <Images />
      <section className="titulo">
      Pikachu
      </section>
      <section className="quadrado-habilidades10">
        <div>
          eletric
        </div>
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp10"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack10"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense10"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed10"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Pikachu;
  
  