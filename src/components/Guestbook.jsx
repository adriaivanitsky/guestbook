import React from 'react';
import './Guestbook.css';

export default function Guestbook() {
  return (
    <div className="maindiv">
      <h1>Sign the guestbook!</h1>
      <label className="input">
        <input type="text" placeholder="name" />
      </label>
      <label className="textarea">
        <textarea placeholder="entry" />
      </label>
      <button>sign</button>
    </div>
  );
}
