import './App.css';
import Home from './views/Home';
import Header from './components/Header';
import { useDarkMode } from './context/DarkModeContext';
import Login from './views/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const { darkMode } = useDarkMode();
  let theme;
  if (darkMode) theme = 'dark';
  else theme = 'light';
  return (
    <BrowserRouter>
      <div className={theme}>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
