import React from 'react';
import Guestbook from '../components/Guestbook';
import { EntryProvider } from '../context/EntryContext';
import Entry from '../components/Entry';

export default function Home() {
  return (
    <div>
      <EntryProvider>
        <Guestbook />
        <Entry />
      </EntryProvider>
    </div>
  );
}
