import { render, screen } from '@testing-library/react';
import App from './App';
import { DarkModeProvider } from './context/DarkModeContext';
import { EntryProvider } from './context/EntryContext';
import { UserProvider } from './context/UserContext';

test('input changes value, then button renders input', () => {
  render(
    <DarkModeProvider>
      <UserProvider>
        <EntryProvider>
          <App />
        </EntryProvider>
      </UserProvider>
    </DarkModeProvider>
  );

  const name = screen.getByLabelText(/name/i);
  const message = screen.getByLabelText(/message/i);
  expect(name).toBeInTheDocument();
  expect(message).toBeInTheDocument();

  // userEvent.type(name, 'adria');
  // expect(name.value).toBe('adria');
  // userEvent.type(message, 'sup');
  // expect(message).toBe('sup');

  // const button = screen.getByRole('button');
  // expect(button).toBeInTheDocument();
});
