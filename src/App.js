import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import List from './components/List';
import Checkbox from './components/Checkbox';
import User from './components/User';
import DashNav from './components/DashNav';

function App() {
  return (
    <div className="App">
      <User/>
      <Card/>
      <List/>
      <Checkbox/>
      <DashNav/>
    </div>
  );
}

export default App;
