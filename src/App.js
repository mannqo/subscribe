import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import Header from './components/header'
import Date from './components/date'

function App() {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Date />
        {renderRoutes(routes)}
      </HashRouter>
    </div>
  );
}

export default App;
