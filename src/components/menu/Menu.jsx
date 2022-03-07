import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Rólam</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Munkáim</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#prices">Árak</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Kapcsolat</a>
        </li>
      </ul>
    </div>
  );
}
