import { useState } from 'react';
import { useEntry } from '../context/EntryContext';
import './Guestbook.css';

export default function Guestbook() {
  const { entry, setEntry } = useEntry();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setEntry([...entry, { name, message }]);
    setName('');
    setMessage('');
  };

  return (
    <div className="maindiv">
      <h1>Sign the guestbook!</h1>
      <label className="input">
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="textarea">
        <textarea
          placeholder="entry"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button onClick={handleClick}>sign</button>
    </div>
  );
}
