import React from 'react';
import Guestbook from '../components/Guestbook';
import { EntryContext, EntryProvider } from '../context/EntryContext';

export default function Home() {
  return (
    <div>
      <EntryProvider>
        <Guestbook />
      </EntryProvider>
    </div>
  );
}
