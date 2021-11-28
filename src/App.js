import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {renderRoutes(routes)}
      </HashRouter>
    </div>
  );
}

export default App;
