import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import UserInput from './components/UserInput/UserInput';
import ResutlsTable from './components/ResultsTable/ResutlsTable';

function App() {
  return (
    <div>
     <Header />
     <UserInput/>
     <ResutlsTable/>
    </div>
  );
}

export default App;
