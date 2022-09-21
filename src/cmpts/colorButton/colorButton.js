import './colorButton.css';

function ColorButton({throwNotification, color}) {
   
    return ( 
        <button
            id={color} 
            className={`colorButton ${color}`}
            onClick={throwNotification}>{color}</button>
     );
}

export default ColorButton;