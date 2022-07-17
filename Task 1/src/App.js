import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Linecharts from './components/charts/linecharts/Linecharts';
import Navigationbar from './layouts/header/Navigationbar';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Navigationbar />
      <Dashboard />
      {/* <Linecharts /> */}
    </>
  );
}

export default App;
