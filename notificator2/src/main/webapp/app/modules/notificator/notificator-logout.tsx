import React from 'react';

const NotificatorLogout: React.FC = () => {
  return (
    <div
      className="notificator-logout-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <h2
        style={{
          color: '#333',
          fontSize: '2rem',
          fontFamily: 'Arial, sans-serif',
          marginBottom: '1rem',
        }}
      >
        Bienvenido al Notificador
      </h2>
      <p
        style={{
          color: '#666',
          fontSize: '1.2rem',
          textAlign: 'center',
        }}
      >
        Por favor, inicia sesión para acceder al sistema
      </p>
    </div>
  );
};

export default NotificatorLogout;
