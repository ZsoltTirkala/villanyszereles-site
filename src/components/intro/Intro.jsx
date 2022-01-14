import "./intro.scss";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Üdvözlöm a Perfectamper oldalán!</h1>
          <h3>Elsősorban lakossági megrendelések teljesítésével, kivitelezési, felújítási és karbantartási munkák
            elvégzésével foglalkozom, az egyszerű kapcsoló cserétől az új ház teljes villamos rendszerének
            kialakításáig a jelen kor igényeire szabva. Munkám során kiemelt hangsúlyt fektetek a minőségre és a
            precízitásra, valamint a megbeszélt vagy szerződésben foglalt határidők pontos betartására. A
            lehetőségekhez mérten igyekszem összefésülni az esztétikai szempontokat a szakmai szabályokkal, a
            megrendelői igényekhez igazodva. Amennyiben minőségi villanyszerelést szeretne otthonában, előre
            egyeztetett rejtett költségek nélküli korrekt áron úgy várom megkeresését elérhetőségeimen telefonon
            vagy e-mailben messengesren vagy viberen.</h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
