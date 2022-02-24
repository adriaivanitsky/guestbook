import { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

export default function Login() {
  const { setUser } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      email === process.env.REACT_APP_AUTH_EMAIL &&
      password === process.env.REACT_APP_AUTH_PASSWORD
    ) {
      setUser('adria');
      const { from } = location.state || { from: { pathname: '/' } };
      history.replace(from.pathname);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="text"
        placeholder="email"
      ></input>
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password"></input>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}
