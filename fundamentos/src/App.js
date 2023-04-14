import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
        <Events/>
      </header>
    </div>
  );
}

export default App;
