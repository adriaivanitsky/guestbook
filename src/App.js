import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <div>
        <Header />
        <Home />
      </div>
    </DarkModeProvider>
  );
}

export default App;
