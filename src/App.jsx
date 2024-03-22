import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Application from './components/Application';
import GlobalStyle from './styles/global';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Application />
    </QueryClientProvider>
  );
}

export default App;
