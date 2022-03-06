import "./intro.scss";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="img/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Üdvözlöm weboldalamon</h1>
          <h2>Szőke Lajos villanyszerelő vagyok.</h2>
          <h3>
            Elsősorban lakossági megrendelések teljesítésével, kivitelezési, felújítási
            és karbantartási munkák elvégzésével foglalkozom, az egyszerű kapcsoló cserétől az új ház
            teljes villamos rendszerének kialakításáig a jelen kor igényeire szabva.
            Munkám során kiemelt hangsúlyt fektetek a minőségre és a precízitásra, valamint a megbeszélt
            vagy szerződésben foglalt határidők pontos betartására.
            A lehetőségekhez mérten igyekszem összefésülni az esztétikai szempontokat a szakmai
            szabályokkal, a megrendelői igényekhez igazodva.
            Amennyiben minőségi villanyszerelést szeretne otthonában, előre egyeztetett rejtett költségek
            nélküli korrekt áron úgy várom megkeresését elérhetőségeimen,
            telefonon vagy e-mailben, messengeren vagy viberen.
          </h3>
          <h3 id="intro-list">A teljesség igénye nélkül vállalom az alábbi feladatokat:
          <ul>
            <li>
              - Elektromos hibák, zárlatok keresését és megszüntetését
            </li>
            <li>
              - Lakások elektromos rendszerének felülvizsgálatát
            </li>
            <li>
              - Lakás elosztók cseréjét
            </li>
            <li>
              - Kismegszakítók korszerűsítését cseréjét
            </li>
            <li>
              - Életvédelmi relé (FI-relé) hálózatba építését
            </li>
            <li>
              - Vezetékek cseréjét
            </li>
            <li>
              - Teljes villamos rendszer modernizálását
            </li>
            <li>
              - Lámpák felszerelését
            </li>
            <li>
              - Mozgás érzékelők beszerelését
            </li>
            <li>
              - Alkony kapcsolók beszerelését
            </li>
            <li>
              - Rejtett led világítások kiépítését
            </li>
            <li>
              - Kapcsolók áthelyezését, cseréjét
            </li>
            <li>
              - Mobiltelefonról vezérelhető smart kapcsolók „okoskapcsolók” beépítését
            </li>
            <li>
              - Dugaljak áthelyezését cseréjét
            </li>
            <li>
              - Elektromos sütő bekötését garanciával
            </li>
            <li>
              - Elektromos tűzhely bekötését garanciával
            </li>
            <li>
              - Elektromos bojler bekötését garanciával
            </li>
            <li>
              - Új építésű ingatlan tervek szerinti alapszerelését és teljes hálózatának kiépítését
            </li>
          </ul>
          </h3>
        </div>
      </div>
    </div>
  );
}
