import './App.css';
import MainPage from './components/pages/MainPage/MainPage';
import AppRoutes from './router/AppRoutes';
import { UserProvider } from './context/Context';
import data from './data.json';
function App() {
  return (
    <UserProvider allMovies={data['TendingNow']}>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
