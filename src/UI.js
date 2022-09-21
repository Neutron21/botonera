import React from "react";
import "./UI.css";
import ColorButton from "./cmpts/colorButton/colorButton";
import Notification from "./cmpts/notification/notification";

function UI() {
  const colors = ["red", "green", "purple", "pink"];
  const [visible, setVisible] = React.useState(false);
  const [colorBack, setColorBack] = React.useState("");

  const handleClick = (event) => {
    console.log("Se hizo click", event.target.id);
    setColorBack(event.target.id);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 6700);
  };

  return (
    <div className="UI">
      <div className="main">
        <h2>Botonera de notificaciones</h2>
        {colors.map((elm) => (
          <ColorButton throwNotification={handleClick} key={elm} color={elm} />
        ))}
      </div>
      {visible && (
        <Notification className="notification" background={colorBack} />
      )}
    </div>
  );
}

export default UI;
