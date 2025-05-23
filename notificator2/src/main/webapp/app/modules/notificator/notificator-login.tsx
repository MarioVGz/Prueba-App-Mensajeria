import React, { useState } from 'react';
import { Notificador, INotificadorDTO } from './notificadorAPI';
import './notificator-login.scss';

const NotificatorLogin: React.FC = () => {
  const [messageType, setMessageType] = useState<'SMS' | 'Email'>('SMS');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const notificationData: INotificadorDTO = {
      contenido: message,
      ...(messageType === 'SMS' ? { numero: number } : { correo: email }),
    };

    try {
      await Notificador.create(notificationData);
      setShowSuccess(true);
      // Reset form
      setMessage('');
      setNumber('');
      setEmail('');
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      alert('Error: No se pudo enviar el mensaje');
    }
  };

  return (
    <div className="notification-container">
      <div className="notification-form">
        <h1>Send Message</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select value={messageType} onChange={e => setMessageType(e.target.value as 'SMS' | 'Email')} className="form-control">
              <option value="SMS">Send SMS</option>
              <option value="Email">Send Email</option>
            </select>
          </div>

          <div className="form-group">
            {messageType === 'SMS' ? (
              <input
                type="tel"
                placeholder="Number"
                value={number}
                onChange={e => setNumber(e.target.value)}
                className="form-control"
                required
              />
            ) : (
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="form-control"
                required
              />
            )}
          </div>

          <div className="form-group">
            <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} className="form-control" required />
          </div>

          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>

      {showSuccess && <div className="success-message">Success</div>}
    </div>
  );
};

export default NotificatorLogin;
