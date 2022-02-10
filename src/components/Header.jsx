import React from 'react';
import { useUser } from '../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <header>
      {user && <p>welcome, {user}</p>}
      {!user && <p>sign the guestbook</p>}
    </header>
  );
}
