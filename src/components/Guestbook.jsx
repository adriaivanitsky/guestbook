import { useState } from 'react';
import './Guestbook.css';
import { useEntry } from '../context/EntryContext';

export default function Guestbook() {
  const { entry, setEntry } = useEntry();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setEntry([...entry, { name, message }]);
    console.log(entry);
  };

  return (
    <div className="maindiv">
      <h1>Sign the guestbook!</h1>
      <label className="input">
        <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
      </label>
      <label className="textarea">
        <textarea placeholder="entry" onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button onClick={handleClick}>sign</button>
    </div>
  );
}
