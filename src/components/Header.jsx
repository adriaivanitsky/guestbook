import React from 'react';
import { useUser } from '../context/UserContext';
import '../components/Header.css';
import { useDarkMode } from '../context/DarkModeContext';

export default function Header() {
  const { user } = useUser();
  const { toggle } = useDarkMode();

  return (
    <header>
      {user && <p>welcome, {user}</p>}
      {!user && <p>sign the guestbook</p>}
      <button onClick={toggle}>use dark mode</button>
    </header>
  );
}
