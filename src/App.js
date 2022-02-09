import './App.css';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div>
      <UserProvider></UserProvider>
    </div>
  );
}

export default App;
