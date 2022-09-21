import React from 'react';
import './notification.css';
import '../colorButton/colorButton.css';
import icon from '../../assets/icon.svg';

function Notification({background}) {

  const [read, setRead] = React.useState(false);

    const readUnRead = () => {
        setRead(!read);
        console.log('Notificacion', read);
      }

    return ( 
        <div className={`notification ${background} ${read && 'dis'}`} onClick={readUnRead}>
            <img src={icon} className='icon-size' alt='icon-person'/>
            <span className='title'>Color {background} left a comment</span>
            <span className='time'>Just now</span>
            <span className='content'>Can you review this MR?</span>
        </div>
    );
}

export default Notification;