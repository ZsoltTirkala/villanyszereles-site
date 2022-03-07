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
        <h2>Kapcsolat</h2>
        <p>Telefonon: +36-30-824-9936</p>
        <p>Emailen: perfectamper@gmail.com / szookelajos@gmail.com</p>
      </div>
    </div>
  );
}