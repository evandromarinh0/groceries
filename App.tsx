import { ThemeProvider } from 'styled-components';
import { theme } from './src/theme';
import HomePage from './src/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}