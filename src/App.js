import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import { useDarkMode } from './context/DarkModeContext';

function App() {
  const { darkMode } = useDarkMode();
  let theme;
  if (darkMode) theme = 'dark';
  else theme = 'light';
  return (
    <div className={theme}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
