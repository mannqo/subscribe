import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <Header /> */}
        {renderRoutes(routes)}
      </HashRouter>
    </div>
  );
}

export default App;
