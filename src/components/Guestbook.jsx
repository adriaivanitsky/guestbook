import { useState } from 'react';
import { useEntry } from '../context/EntryContext';
import './Guestbook.css';
import { useUser } from '../context/UserContext';

export default function Guestbook() {
  const { entry, setEntry } = useEntry();
  const { setUser } = useUser();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setEntry([...entry, { name, message }]);
    setUser(name);
    setName('');
    setMessage('');
  };

  return (
    <div className="maindiv">
      <h1>Sign the guestbook!</h1>
      <label className="input">
        <h3>name:</h3>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="textarea">
        <h3>message:</h3>
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
