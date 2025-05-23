import React from 'react';
import { useAppSelector } from 'app/config/store';
import NotificatorLogin from './notificator-login';
import NotificatorLogout from './notificator-logout';

const Notificator: React.FC = () => {
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);

  return isAuthenticated ? <NotificatorLogin /> : <NotificatorLogout />;
};

export default Notificator;
