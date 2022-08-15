import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navbar from './components/Navbar';
import Wallet from './components/Wallet';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primaryContainer: 'blue'
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Navbar></Navbar>
      <Wallet></Wallet>
    </PaperProvider>
  );
}

