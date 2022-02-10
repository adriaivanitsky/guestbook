import React from 'react';
import { useEntry } from '../context/EntryContext';
import './Entry.css';

export default function Entry() {
  const { entry } = useEntry();
  return (
    <div className="container">
      {entry.map((singleEntry) => (
        <div className="singleEntry" key={singleEntry.message}>
          <p>{singleEntry.name}</p>
          <p>{singleEntry.message}</p>
        </div>
      ))}
    </div>
  );
}
