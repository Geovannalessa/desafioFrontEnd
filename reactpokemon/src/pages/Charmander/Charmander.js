import Images from './Images';
import './Charmander.css'
 function Charmander() {
    return (
      
      <section className="habilidades4">
      <Images />
      <section className="titulo">
       Charmander
      </section>
      <section className="quadrado-habilidades4">
        <div>
          fire
        </div>
        
      </section>
      <article className="powers">
        <table>
          <tr>
            hp
            <td>
              <td className="hp4"></td>
            </td>
          </tr>
          <tr>
            attack
            <td>
              <td className="attack4"></td>
            </td>
          </tr>
          <tr>
            defense
            <td>
              <td className="defense4"></td>
            </td>
          </tr>
          <tr>
            speed
            <td>
              <td className="speed4"></td>
            </td>
          </tr>
        </table>
      </article>
    </section>
    );
  }
  export default Charmander;
  
  