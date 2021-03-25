import './App.css';
import Nav from './components/header/header';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <div>
      <Nav />
      <div className="app-page">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
