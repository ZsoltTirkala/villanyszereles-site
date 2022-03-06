import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Kapcsolat.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Név" required="required"/>
          <input type="text" placeholder="Email" />
          <input type="tel" pattern='((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})' id="phone" name="phone" placeholder="+36301234567" required="required" />
          <textarea placeholder="Üzenet"></textarea>
          <button type="submit">Küldés</button>
          {message && <span>Köszönöm! Amint tudom felkeresem!</span>}
        </form>
      </div>
    </div>
  );
}