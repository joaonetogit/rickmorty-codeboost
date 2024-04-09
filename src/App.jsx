import QueryProvider from './context/QueryProvider';
import useAos from './hooks/useAos';
import RouterComponent from './route';
import GlobalStyle from './styles/global';

export default function App() {
  useAos();

  return (
    <QueryProvider>
      <GlobalStyle />
      <RouterComponent />
    </QueryProvider>
  );
}
